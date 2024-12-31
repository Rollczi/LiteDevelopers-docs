# Async Argument

To parse arguments <mark>asynchronously</mark> you can choose from <mark>three different</mark> ways:

1. Create `ArgumentResolver` with an async `ParseResult<T>` _(recommended)_
2. Add `@Async` annotation before argument
3. Use argument with the `CompletableFuture<T>` type 

## 1. Use async `ParseResult<T>` _recommended_

To create an argument resolver that parses arguments asynchronously, you need to:
- Return a `ParseResult.completableFuture()` in the `parse()` method
- Validate the argument **synchronously** in the `match()` method

```java
public class UserArgumentResolver extends ArgumentResolver<CommandSender, User> {

    private final Pattern VALID_USER_PATTERN = Pattern.compile("^[a-zA-Z0-9_]{3,16}$");
    private final UserService userService;

    public UserArgumentResolver(UserService userService) {
        this.userService = userService;
    }

    @Override
    protected ParseResult<User> parse(Invocation<CommandSender> invocation, Argument<User> context, String argument) {  // [!code focus]
        CompletableFuture<User> userFuture = userService.getUser(argument); // [!code focus]

        return ParseResult.completableFuture(userFutur, user -> {  // [!code focus]
            if (user == null) {  // [!code focus]
                return ParseResult.failure("User not found.");  // [!code focus]
            }  // [!code focus]

            return ParseResult.success(user);  // [!code focus]
        });  // [!code focus]
    }

    @Override
    public boolean match(Invocation<CommandSender> invocation, Argument<User> context, String argument) {  // [!code focus]
        return VALID_USER_PATTERN.matcher(argument).matches();
    }
}
```

::: info Full example
See this [example](https://github.com/Rollczi/LiteCommands/blob/master/examples/bukkit/src/main/java/dev/rollczi/example/bukkit/user/UserArgumentResolver.java) on GitHub.
:::

## 2. `@Async` annotation

You need to use the `@Async` annotation on the argument:

```Java
@Command(name = "user")
public class UserCommand {

    @Execute(name = "load")
    void execute(@Async @Arg User argument) { // [!code focus]
        System.out.print("This message is triggered in the main thread!"); // [!code focus]
    }
}
```

> [!WARNING]
> The `@Async` annotation on the argument will parse the argument asynchronously, but the command will be executed in the main thread.


## 3. `CompletableFuture<T>`  type

Using `CompletableFuture<T>` is more complicated:

```java
@Command(name = "user")
public class UserCommand {

    @Execute(name = "load")
    void execute(@Arg CompletableFuture<User> argument) { // [!code focus]
        System.out.print("This message is triggered in the main thread!"); // [!code focus]
        
        argument.whenComplete((user, error) -> {
            if (error != null) {
                return;
            }
            
            System.out.print("This message is triggered asynchronously!"); // [!code focus]
        });
    }
}
```
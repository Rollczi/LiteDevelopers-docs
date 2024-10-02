# Async Argument

To parse arguments <mark>asynchronously</mark> you can choose from <mark>three different</mark> ways:

1. Add `@Async` annotation before argument
2. Use argument with the `CompletableFuture<T>`  type
3. Create custom `ArgumentResolver` with an async result (Coming Soon)

## 1. `@Async` annotation

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

# 2. `CompletableFuture<T>`  type

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
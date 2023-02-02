# @Arg Annotation - Custom Arguments

You can create a custom argument to replace use plain argument and make your code more clean.

For example, replace `String` argument to `User` argument.

### ❌ Before
```java
    @Execute
    void execute(SENDER sender, @Arg String userName) {
        User user = userService.getUser(userName);

        if (user == null) {
            sender.sendMessage("User not found!");
            return;
        }
        
        //...
    }
```

### ✅ After
```java
    @Execute
    void execute(@Arg User user) {

        //...
    }
```

#### Create the custom argument and suggestions:
```java
@ArgumentName("user")
public class UserArgument implements OneArgument<User> {

    private final UserService userService;

    public UserArgument(UserService userService) {
        this.userService = userService;
    }

    @Override
    public Result<User, Object> parse(LiteInvocation invocation, String argument) {
        return Option.of(this.userService.getUser(argument))
                .toResult("User not found!");
    }

    @Override
    public List<Suggestion> suggest(LiteInvocation invocation) {
        return this.userService.getOnlineUsers().stream()
                .map(user -> user.getName())
                .map(Suggestion::of)
                .collect(Collectors.toList());
    }
}
```
#### Register your argument in LiteCommands builder:
```java
            .argument(User.class, new UserArgument(userService))
```

:::tip Tip - See all build-in arguments
- [Argument Basic Types](/documentation/litecommands/features/argument-basic-types) <br>
- [Argument Time Types](/documentation/litecommands/features/argument-time-types) <br>
- [Argument Time Chronologies Types](/documentation/litecommands/features/argument-no-iso-chronology) <br>
  :::
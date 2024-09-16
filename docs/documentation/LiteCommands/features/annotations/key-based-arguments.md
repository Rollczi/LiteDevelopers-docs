# Arguments with Keys in LiteCommands

LiteCommands allows defining arguments with keys, enabling flexible and readable command definitions. We can use
the `@Key` annotation to mark arguments, but it is also possible to use arguments without this annotation, which allows
for a simpler approach.

## Example Arguments

Below are two arguments: `FirstArgument` and `SecondArgument`, which will be used in the `/calculate` command.

```java
// FirstArgument.java
public class FirstArgument extends ArgumentResolver<CommandSender, Integer> {
    public static final String KEY = "first-calculate-key";

    @Override
    protected ParseResult<Integer> parse(
            Invocation<CommandSender> invocation,
            Argument<Integer> context,
            String argument) {
        try {
            int value = Integer.parseInt(argument);
            if (value < 1 || value > 10)
                throw new NumberFormatException();
            return ParseResult.success(value);
        }
        catch (NumberFormatException e) {
            return ParseResult.failure("Please provide a number between 1 and 10.");
        }
    }

    @Override
    public SuggestionResult suggest(
            Invocation<CommandSender> invocation,
            Argument<Integer> argument,
            SuggestionContext context) {
        return SuggestionResult.of(List.of("1", "2", "3", "4", "5", "6", "7", "8", "9", "10"));
    }
}

// SecondArgument.java
public class SecondArgument extends ArgumentResolver<CommandSender, Integer> {
    public static final String KEY = "second-calculate-key";

    @Override
    protected ParseResult<Integer> parse(
            Invocation<CommandSender> invocation,
            Argument<Integer> context,
            String argument) {
        try {
            int value = Integer.parseInt(argument);
            if (value < 1 || value > 20 || value % 5 != 0)
                throw new NumberFormatException();
            return ParseResult.success(value);
        }
        catch (NumberFormatException e) {
            return ParseResult.failure("Please provide a number between 1 and 20 (multiples of 5).");
        }
    }

    @Override
    public SuggestionResult suggest(
            Invocation<CommandSender> invocation,
            Argument<Integer> argument,
            SuggestionContext context) {
        return SuggestionResult.of(List.of("5", "10", "15", "20"));
    }
}
```

## Example Command (Using `@Key`)

The `@Key` annotation allows us to specify which argument we want to use in the command. We can also directly input the
key. The difference is that when using the [Invalid Usage Handler](../handler/invalid-usage-handler.md), if we do not
use the `@Key` annotation, the key of the argument will be displayed instead of its name in case of incorrect command
usage.

Below is the `/calculate` command that utilizes both arguments:

```java

@Command(name = "calculate")
public class CalculateCommand {

    @Execute
    void calculate(
            @Context CommandSender sender,
            @Arg("first") @Key(FirstArgument.KEY) Integer first,
            @Arg("second") @Key(SecondArgument.KEY) Integer second) {
        // Command logic using arguments
        sender.sendMessage("Calculating with first: " + first + " and second: " + second);
    }
}
```

```
Invalid Usage
output: /calculate <first> <second>
```

## Example Command (Without Using `@Key`)

Below is the `/calculate` command that uses both arguments without the `@Key` annotation:

```java

@Command(name = "calculate")
public class CalculateCommand {

    @Execute
    void calculate(
            @Context CommandSender sender,
            @Arg(FirstArgument.KEY) Integer first,
            @Arg(SecondArgument.KEY) Integer second) {
        // Command logic using arguments
        sender.sendMessage("Calculating with first: " + first + " and second: " + second);
    }
}
```

```
Invalid Usage
output: /calculate <first-calculate-key> <second-calculate-key>
```

## How to register?

```java
// YourPlugin.java
public class YourPlugin extends Plugin {

    private LiteCommands<CommandSender> liteCommands;

    @Override
    public void onEnable() {
        this.liteCommands = LiteBukkitFactory.builder(this)
                .commands(
                        new CalculateCommand()
                )
                .argument(Integer.class, ArgumentKey.of(FirstArgument.KEY, new FirstArgument())) // [!code focus]
                .argument(Integer.class, ArgumentKey.of(SecondArgument.KEY, new SecondArgument())) // [!code focus]
                .build();
    }

    @Override
    public void onDisable() {
        if (this.liteCommands != null) {
            this.liteCommands.unregister();
        }
    }
}
```

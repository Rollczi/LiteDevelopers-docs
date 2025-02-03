# Cooldown

The `@Cooldown` annotation in LiteCommands allows developers to set cooldown periods for commands, preventing users from executing the same command repeatedly within a specified timeframe. This feature is essential for managing command spam.

## How to Use It
To implement a cooldown for a command, apply the `@Cooldown` annotation to your command method. You can also set cooldowns for subcommands by annotating the respective methods. The `@Cooldown` annotation accepts the following parameters:

- key: A unique identifier for the cooldown.
- count: The duration of the cooldown.
- unit: The time unit for the cooldown duration (e.g., ChronoUnit.SECONDS, ChronoUnit.MINUTES).
- bypass: An optional permission string that allows certain users to bypass the cooldown.

Here's an example of how to set up a command with a cooldown:

```java [Bukkit]
@Command(name = "example") // [!code highlight]
@Cooldown(key = "example-cooldown", count = 60L, unit = ChronoUnit.SECONDS, bypass = "bypass.permission") // [!code highlight]
public class ExampleCommand {

    @Execute(name = "subexample") // [!code highlight]
    @Cooldown(key = "subexample-cooldown", count = 30L, unit = ChronoUnit.SECONDS, bypass = "bypass.permission") // [!code highlight]
    void subcommand() {
        // Subcommand logic here
    }

    @Execute
    void mainCommand() {
        // Main command logic here
    }
}
```
In this example, the `mainCommand` method has a 60-second cooldown, while the `subcommand` method has a 30-second cooldown. Users with the `bypass.permission` permission can execute these commands without waiting for the cooldown period to expire.

## Customizing the Default Cooldown Message

LiteCommands provides the flexibility to customize the message displayed to users when they attempt to execute a command that is still on cooldown. To change the default cooldown message, configure the `LiteMessages.COMMAND_COOLDOWN` message in your LiteCommands builder setup.

Here's how you can customize the cooldown message:

```java
liteCommands = LiteBukkitFactory.builder(this)
    .commands(new ExampleCommand())
    .message(LiteMessages.COMMAND_COOLDOWN, (invocation, cooldownState) -> { // [!code focus]
        CooldownContext context = cooldownState.getCooldownContext(); // [!code focus]
        Duration remainingDuration = cooldownState.getRemainingDuration(); // [!code focus]
        String formattedTime = DurationParser.DATE_TIME_UNITS.format(remainingDuration); // [!code focus]
        return "Please wait " + formattedTime + " before using this command again."; // [!code focus]
    }) // [!code focus]
    .build();

```

In this configuration, when a user attempts to execute a command that is still on cooldown, they will receive a message indicating how much time remains before they can use the command again. The `DurationParser.DATE_TIME_UNITS.format(remainingDuration)` method formats the remaining duration into a human-readable string.
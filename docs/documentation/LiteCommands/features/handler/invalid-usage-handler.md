# Invalid Usage Handler

LiteCommands offers a robust mechanism to manage invalid command usage, allowing developers to provide informative feedback to players when they enter commands incorrectly. This feature enhances user experience by displaying a message that outlines the correct usage of the command.

## Overview

When a player uses a command incorrectly, LiteCommands generates a message that includes the correct syntax for the command. This helps users understand how to properly use commands without confusion.

## Example Implementation

Below is an example of how to implement an invalid usage handler in Java:

```java
// ExampleInvalidUsageHandler.java
public class ExampleInvalidUsageHandler implements InvalidUsageHandler<CommandSender> {

    @Override
    public void handle(Invocation<CommandSender> invocation, InvalidUsage<CommandSender> result, ResultHandlerChain<CommandSender> chain) {
        CommandSender sender = invocation.sender();
        Schematic schematic = result.getSchematic();

        if (schematic.isOnlyFirst()) {
            sender.sendMessage(ChatUtil.color("&cInvalid usage of command! &7(" + schematic.first() + ")"));
            return;
        }

        sender.sendMessage(ChatUtil.color("&cInvalid usage of command!"));
        for (String scheme : schematic.all()) {
            sender.sendMessage(ChatUtil.color("&8 - &7" + scheme));
        }
    }
}
```

```java
// YourPlugin.java
public class YourPlugin extends Plugin {

    private LiteCommands<CommandSender> liteCommands;

    @Override
    public void onEnable() {
        this.liteCommands = LiteBukkitFactory.builder(this)
                .commands(
                        new ExampleCommand()
                )
                .invalidUsageHandler(new ExampleInvalidUsageHandler()) // [!code focus]
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

The code above dynamically generates an invalid usage message that represents the correct usage of the command.

> [!CAUTION]
> Ensure that you use the `-parameters` compiler flag to retrieve the parameter names in the method. For further details, refer to the [More info](../../getting-started.md#parameters-compile-flag).
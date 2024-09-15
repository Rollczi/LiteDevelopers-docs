# Missing Permissions Handler

LiteCommands includes a feature for handling missing permissions, allowing developers to inform players when they attempt to execute a command without the necessary permissions. This functionality enhances security and user experience by providing clear feedback regarding permission requirements.

## Overview

When a player lacks the required permissions to use a command, LiteCommands generates a message that informs them of their lack of permissions. This message can include specific permission details, helping players understand what they need to do to gain access.

## Example Implementation

Below is an example of how to implement a missing permissions handler in Java:

```java
// ExampleMissingPermissionsHandler.java
public class ExampleMissingPermissionsHandler implements MissingPermissionsHandler<CommandSender> {

    @Override
    public void handle(Invocation<CommandSender> invocation, MissingPermissions missingPermissions, ResultHandlerChain<CommandSender> chain) {
        String permissions = missingPermissions.asJoinedText();
        CommandSender sender = invocation.sender();

        sender.sendMessage(ChatUtil.color("You don't have permission to use this command! &7(" + permissions + ")"));
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
                .missingPermissionsHandler(new ExampleMissingPermissionsHandler()) // [!code focus]
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

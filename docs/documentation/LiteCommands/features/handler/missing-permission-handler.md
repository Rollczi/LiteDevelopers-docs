# Missing Permissions Handler

LiteCommands provides a feature for handling missing permissions, enabling developers to notify players when they attempt to execute a command without the necessary permissions. This enhances security and improves user experience by delivering clear feedback on permission requirements.

## Example Implementation

Here's a concise example of how to implement a missing permissions handler in Java:

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
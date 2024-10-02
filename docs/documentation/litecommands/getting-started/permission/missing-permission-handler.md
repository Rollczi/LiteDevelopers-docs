# Permission Messages

To <mark>customize</mark> a <mark>message about missing permissions</mark>, you can choose from two ways:
- Use the message system
- Implement a missing permissions handler

![](/missing-permission.png)

## Message System

To change the default message, register a custom message in the builder:

```java
.commands(
    new SomeCommand()
)
.message(LiteMessages.MISSING_PERMISSIONS, permissions -> "Required permissions: (" + permissions.asJoinedText() + ")")  // [!code focus]
.build();
```

The `permissions` parameter is a `MissingPermissions` object that contains the missing permissions.

## Missing Permissions Handler

To implement a missing permissions handler, create a class that implements the `MissingPermissionsHandler` interface:

```java
// PermissionsHandler.java
public class PermissionsHandler implements MissingPermissionsHandler<SENDER> {

    @Override
    public void handle(
            Invocation<SENDER> invocation,
            MissingPermissions missingPermissions,
            ResultHandlerChain<SENDER> chain
    ) {
        String permissions = missingPermissions.asJoinedText();
        SENDER sender = invocation.sender();

        sender.sendMessage("Required permissions: (" + permissions + ")");
    }
}
```

Then, register the handler in the builder:
```java
.commands(
    new SomeCommand()
)
.missingPermission(new PermissionsHandler()) // [!code focus]
.build();
```

And that's it! Now, when a player without the required permissions tries to execute a command, the handler will send a custom message.
# @Context

To <mark>get</mark> more information about the <mark>sender</mark> or the command's <mark>execution context</mark>, such as `CommandSender`, `Player`, `Location`, `World`, etc. you can use the `@Context` annotation.

```java
@Command(name = "health")
public class HealthCommand {
    
    @Execute // console can't execute it! // [!code focus]
    void health(@Context Player sender) { // [!code focus] 
        // /health // [!code focus]
        double health = sender.getHealth();
        sender.sendMessage("Your current health is: " + health);
    }
}
```

::: warning

If you use the `@Context` annotation, the command runs only when the context is resolved.<br>
In the example, it executes only if the sender is a player;
otherwise, it shows an `LiteMessages.PLAYER_ONLY` message. 
:::

You can also use `@Context` with other annotations, such as `@Bind`, `@Arg`, `@Flag` and more!

E.g. to teleport a player to another player `/teleport <target>`:

```java
@Command(name = "teleport")
public class TeleportCommand {
    
    @Execute
    void teleport(
        @Bind Server server, 
        @Context Player sender, // [!code focus]
        @Arg Player target
    ) { 
        sender.teleport(target.getLocation());
    }
}
```

::: tip
You can also create a custom context provider for your types!
Check out the [Custom Context](context/custom-context.md).
:::
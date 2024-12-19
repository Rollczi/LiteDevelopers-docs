# @Permission

To <mark>restrict access</mark> to a command, you can use the `@Permission` annotation.

```java
@Command(name = "heal")
@Permission("heal.use") // [!code focus]
public class HealCommand {
    @Execute
    void heal(@Context Player player) {
        player.setHealth(20);
        player.sendMessage("You have been healed!");
    }
}
```

::: warning Missing Permissions Message
In the example, the `HealCommand` can be executed only by players with the `heal.use` permission; otherwise, LiteCommands shows a `LiteMessages.NO_PERMISSION` message or uses a custom [missing permissions handler](permission/missing-permission-handler.md).
:::

## Multiple Permissions

You can define multiple permissions for a command:

```java
@Command(name = "gamemode")
@Permission({"gamemode.use", "gamemode.admin"}) // [!code focus]
public class GamemodeCommand {
    @Execute
    void gamemode(@Context Player player, @Arg GameMode mode) {
        player.setGameMode(gameMode);
    }
    
    @Execute
    @Permission("gamemode.other") // [!code focus]
    void list(@Context CommandSender sender, @Arg GameMode mode, @Arg Player target) {
        target.setGameMode(mode);
    }
}
```

::: info
Now `/gamemode <mode>` can be executed by players with `gamemode.use` and `gamemode.admin` permissions, and `/gamemode <mode> <player>` can be executed by players with `gamemode.other` permission.
:::
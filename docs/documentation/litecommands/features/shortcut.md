# @Shortcut

The `@Shortcut` annotation in LiteCommands allows you to create shortcuts for entire commands, enabling users to execute
commands more efficiently. For example, instead of typing `/gamemode creative`, a player can simply type `/gmc`.

## Example Implementation

Here's an example of how to use the `@Shortcut` annotation with a command that sets the game mode:

```java
@Command(name = "gamemode")
public class GamemodeCommand {

    @Execute(name = "creative")
    @Shortcut("gmc") // [!code highlight]
    public void setCreative(@Context Player player) {
        player.setGameMode(GameMode.CREATIVE);
        player.sendMessage(ChatUtil.color("&aGame mode set to Creative."));
    }

    @Execute(name = "survival")
    @Shortcut("gms") // [!code highlight]
    public void setSurvival(@Context Player player) {
        player.setGameMode(GameMode.SURVIVAL);
        player.sendMessage(ChatUtil.color("&aGame mode set to Survival."));
    }
}
```
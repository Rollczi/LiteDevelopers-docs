# @ExecuteDefault

The `@ExecuteDefault` annotation in LiteCommands allows you to catch any command execution, if no other method is 
matching the given arguments. 

## Example Implementation

Here's an example of how to use the `@ExecuteDefault` annotation with a command that sets the game mode:

```java
@Command(name = "gamemode")
public class GamemodeCommand {
    
    @ExecuteDefault // [!code highlight]
    public void executeDefault(@Context Player player) {
        player.sendMessage(ChatUtil.color("&cPlease use one of the following gamemodes:"));
        player.sendMessage(ChatUtil.color("&c- /gamemode creative"));
        player.sendMessage(ChatUtil.color("&c- /gamemode survival"));
    }

    @Execute(name = "creative")
    public void setCreative(@Context Player player) {
        player.setGameMode(GameMode.CREATIVE);
        player.sendMessage(ChatUtil.color("&aGame mode set to Creative."));
    }

    @Execute(name = "survival")
    public void setSurvival(@Context Player player) {
        player.setGameMode(GameMode.SURVIVAL);
        player.sendMessage(ChatUtil.color("&aGame mode set to Survival."));
    }
}
```
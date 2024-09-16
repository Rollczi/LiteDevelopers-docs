# @Quoted Annotation

The `@Quoted` annotation in LiteCommands allows players to provide arguments with quoted content, enabling them to
include spaces and special characters within an argument by enclosing the content in double quotes (`"`).

## Example Implementation

```java
@Command(name = "mute")
public class MuteCommand {

    private final Server server;
    
    public MuteCommand(Server server) {
        this.server = server;
    }
    
    @Execute
    void mutePlayer(@Context CommandSender sender, @Arg Player target, @Arg @Quoted String reason) {
        // [...] code that should mute a player but no one bothered to implement it
        server.broadcastMessage(ChatUtil.color("&cPlayer &7" + target.getName() + " &chas been muted! Reason: &7" + reason));
    }
}
```

## Usage Example

```
/mute Rollczi "Spamming and harassment"
```

<video width="1280" height="720" controls>
  <source src="/quoted.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

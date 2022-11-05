# Example kick command

#### Author: Sky0x
---

```java
@Route(name = "kick")
@Permission("myplugin.kick")
public class KickCommand {
    
    @Execute(min = 2)
    public void kickPlayer(Server server, @Arg @Name("target") Player target, @Joiner String reason) {
        target.kickPlayer(ChatUtil.color(reason));
        server.broadcastMessage("Player " + target.getName() + " has been kicked!");
    }
    
}
```
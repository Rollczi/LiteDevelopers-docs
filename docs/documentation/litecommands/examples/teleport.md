# Example teleport command
---

```java
@Route(name = "teleport", aliases = "tp")
@Permission("myplugin.teleport")
public class TeleportCommand {
    
    @Execute(min = 3, max = 4)
    public void to(Player sender, @Arg Location location, @Opt Option<World> world) {
        location.setWorld(world.orElseGet(sender.getWorld()));
        sender.teleport(location);
    }
    
    @Execute(required = 1)
    public void toPlayer(Player sender, @Arg Player to) {
        sender.teleport(to.getLocation());
    }
    
    @Execute(required = 2)
    @Permission("myplugin.teleport.other")
    public void targetToPlayer(@Arg @Name("target") Player target, @Arg @Name("to") Player to) {
        target.teleport(to.getLocation());
    }
    
}
```
# @Arg @Quoted String

If you want to parse an argument with quoted content including <mark>spaces</mark> and <mark>special characters</mark>, use the `@Quoted` annotation.

```java
@Command(name = "mute")
public class MuteCommand {
    @Execute
    void mute(
        @Context CommandSender sender, 
        @Arg Player target, 
        @Arg @Quoted String reason // [!code focus]
    ) {
        // [...] mute implementation
        sender.message(ChatUtil.color("&cPlayer &7" + target.getName() + " &chas been muted! Reason: &7" + reason));
    }
}
```

Here is an example of the `/mute` command usage:

```yaml
input: /mute Rollczi "Spamming and harassment"
reason: Spamming and harassment
```

<video width="1280" height="720" controls>
  <source src="/quoted.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

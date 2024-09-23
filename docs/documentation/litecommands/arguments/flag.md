# @Flag

To define a <mark>flag</mark> in a command, use the `@Flag` annotation.

```java
@Command(name = "mute")
public class MuteCommand {
    @Execute
    void mute(@Arg Player player, @Flag("-s") boolean isSilent) {
        // ..
    }
}
```

`@Flag("-s")` declares a flag with the identifier `-s` that can be used in the command.

Here is an example of the `/mute` command usage:

<Console
scheme="/mute <player> -s"
input="/mute Rollczi -s"
:variables="{player: 'Rollczi', isSilent: true}"
/>

<video width="1280" height="720" controls>
  <source src="/flag.webm" type="video/webm">
  Your browser does not support the video tag.
</video>


## Additional Options

You can also define a flag with a different identifier:

```java
@Flag("--silent")
```

Or create more than one flag in the same command:

```java
@Flag("-s") boolean isSilent, @Flag("-k") boolean isKick
```

# @Arg Optional<T> Annotation (Optional way)

The `@Arg Optional<T>` annotation is used to denote parameters within a command method that represent optional arguments. When an optional argument is not provided, the corresponding parameter will be set to `Optional.empty()` by default.

## Usage

Here’s an example of how to use the `@Arg Optional<T>` annotation:

```java
@Command(name = "day")
public class DayCommand {
    @Execute
    void day(@Context Player sender, @Arg Optional<World> world) {
        World selectedWorld = world.orElse(sender.getWorld());

        selectedWorld.setTime(1000);
    }
}
```

In this example:

- `@Context Player sender` represents a required argument for a player.
- `@Arg Optional<World> world` represents an optional argument for a world. If the user provides a world, it will be captured in the `world` parameter. If not provided, `world` will default to `Optional.empty()`.

### Handling Optional Values

When an optional argument is not provided, the corresponding parameter will be set to `Optional.empty()`. You can handle this using the `orElse` method to provide a default value. In the example above, the code retrieves the player's current world if no world is specified:

```java
World selectedWorld = world.orElse(sender.getWorld());
```

This approach ensures that your command executes correctly, even when the optional argument is not provided, by falling back to a sensible default value.
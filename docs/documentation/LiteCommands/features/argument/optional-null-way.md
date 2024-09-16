# @OptionalArg Annotation (Null way)

The `@OptionalArg` annotation is used to mark parameters within a command method as optional arguments. When an optional argument is not provided by the user, the corresponding parameter will be set to `null` by default.

## Usage

Here's an example of how to use the `@OptionalArg` annotation:

```java
@Command(name = "day")
public class DayCommand {
    @Execute
    void day(@Context Player sender, @OptionalArg World world) {
        if (world == null) {
            world = sender.getWorld();
        }

        world.setTime(1000);
    }
}
```

In this example:

- `@Context Player sender` represents a required argument for a player.
- `@OptionalArg World world` represents an optional argument for a world. If the user provides a world, it will be captured in the `world` parameter. If not provided, `world` will be set to `null` by default.

### Handling Null Values

When an optional argument is not provided, the corresponding parameter will be set to `null`. It's important to handle these null values appropriately within your command logic. In the example above, the code checks if `world` is `null` and assigns the player's current world if no world is specified.

```java
if (world == null) {
    world = sender.getWorld();
}
```

By handling null values, you can ensure that your command functions correctly regardless of whether the optional argument is provided or not.
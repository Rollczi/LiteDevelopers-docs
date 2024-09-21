# @Arg Optional 

To define an <mark>optional argument</mark> in a command, you can choose from <mark>two different</mark> ways:

1. Using the `@Arg` annotation with the `Optional<T>` type.
2. Using the `@OptionalArg` annotation with a check for `null`.

## Example

Add the `Optional<T>` type to the parameter to define an optional argument:

::: code-group

```java {4-5} [1. @Arg Optional<b>&lt;T&gt;</b>]
@Command(name = "day")
public class DayCommand {
    @Execute
    void day(@Context Player sender, @Arg Optional<World> world) {  // [!code focus]
        World selectedWorld = world.orElse(sender.getWorld()); // [!code focus]

        selectedWorld.setTime(1000);
    }
}
```

```java {4-7} [2. @OptionalArg (null)]
@Command(name = "day")
public class DayCommand {
    @Execute
    void day(@Context Player sender, @OptionalArg World world) { // [!code focus]
        if (world == null) { // [!code focus]
            world = sender.getWorld(); // [!code focus]
        } // [!code focus]

        world.setTime(1000);
    }
}
```

:::

In this example we handle the optional argument `World`, when the argument is not provided, we set the `World` to the sender's world:

::: code-group

```java [1. @Arg Optional<b>&lt;T&gt;</b>]
World selectedWorld = world.orElse(sender.getWorld());
```

```java [2. @OptionalArg (null)]
if (world == null) {
    world = sender.getWorld();
}
```
:::


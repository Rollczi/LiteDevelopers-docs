# Supported Bukkit Types

`@Arg` - Use Basic Types to easily validate, parse, and get arguments!

# Supported Types Bukkit

| Argument Type | Values       | Example                                  |
| ------------- | ------------ | ---------------------------------------- |
| `Player`      | Any player   | `Rollczi`                                |
| `World`       | Any world    | `world`, `world_nether`, `world_the_end` |
| `Location`    | Any location | `10 100 20`, `~ ~ ~`, `~ 100 ~`          |

## Example:

::: code-group

```java [Player Argument]
@Execute(route = "player-arg")
public void executePlayer(@Context SENDER sender, @Arg Player player) {
    System.out.println(player);
}
```

```java [World Argument]
@Execute(route = "world-arg")
public void executeWorld(@Context SENDER sender, @Arg World world) {
    System.out.println(world);
}
```

```java [Location Argument]
@Execute(route = "location-arg")
public void executeLocation(@Context SENDER sender, @Arg Location location) {
    System.out.println(location);
}
```

:::

# Bukkit Types

`@Arg` - Use Basic Types to easily validate, parse, and get arguments!

# Supported Types Bukkit

| Argument Type   | Values                    | Example                                  |
|-----------------|---------------------------|------------------------------------------|
| `Player`        | Online player             | `Rollczi`                                |
| `OfflinePLayer` | Offline/Online player     | `Rollczi`, `Mike`, `Lucky`               |
| `World`         | World                     | `world`, `world_nether`, `world_the_end` |
| `Location`      | Location (also current ~) | `10 100 20`, `~ ~ ~`, `~ 100 ~`          |

## Example:

::: code-group

```java [Player]
@Execute(name = "player-arg")
public void executePlayer(@Context SENDER sender, @Arg Player player) {
    System.out.println(player);
}
```

```java [OfflinePlayer]
@Execute(name = "player-arg")
public void executePlayer(@Context SENDER sender, @Async @Arg OfflinePlayer player) {
    System.out.println(player);
}
```

```java [World]
@Execute(name = "world-arg")
public void executeWorld(@Context SENDER sender, @Arg World world) {
    System.out.println(world);
}
```

```java [Location]
@Execute(name = "location-arg")
public void executeLocation(@Context SENDER sender, @Arg Location location) {
    System.out.println(location);
}
```

:::

# Platform Types

`@Arg` - Use Platform Types to easily validate, parse, and get arguments!

There you can find the list of available types for each platform. (List can be outdated)

| Platform      | Types               | Values                | Example                                                                    |
|---------------|---------------------|-----------------------|----------------------------------------------------------------------------|
| **Bukkit**    |                     |                       |                                                                            |
|               | `Player`            | Online player         | `Rollczi`                                                                  |
|               | `OfflinePLayer`     | Offline/Online player | `Rollczi`, `Mike`, `Lucky`                                                 |
|               | `World`             | World                 | `world`, `world_nether`, `world_the_end`                                   |
|               | `Location`          | Location              | `10 100 20`, `~ ~ ~`, `~ 100 ~`                                            |
| **Minestom**  |                     |                       |                                                                            |
|               | `Player`            | Online player         | `Rollczi`                                                                  |
| **Adventure** |                     |                       |                                                                            |
|               | `Component`         | Text                  | `text`, `<red>text`, `&c&lRed Text`, `<gradient:#aa33aa:#4455aa>Gradient!` |
| **JDA**       |                     |                       |                                                                            |
|               | `User`              | User                  | `@Rollczi`                                                                 |
|               | `Attachment`        | Attachment            | _Drop and drag or click to upload file_                                    |
|               | `Role`              | Role                  | `@Role`                                                                    |
|               | `IMentionable`      | Mentionable           | `@Role`, `@Rollczi`                                                        |
|               | `Channel`           | Channel               | `#channel`                                                                 |
|               | `GuildChannel`      | Guild channel         | `#channel`                                                                 |
|               | `GuildChannelUnion` | Guild channel         | `#channel`                                                                 |
|               | `Member`            | Member                | `@Rollczi`                                                                 |


### Bukkit Examples

::: code-group

```java [Player]
@Execute
void execute(@Arg Player player) { // [!code focus]
    // ...
}
```

```java [OfflinePlayer]
@Execute
void execute(@Arg OfflinePlayer player) { // [!code focus]
    // ...
}
```

```java [World]
@Execute
void execute(@Arg World world) { // [!code focus]
    // ...
}
```

```java [Location]
@Execute
void execute(@Arg Location location) { // [!code focus]
    // ...
}
```

:::

### Minestom Examples

```java
@Execute(name = "teleport")
void teleport(@Arg Player player, @Arg Player target) { // [!code focus]
    // ...
}
```


### Adventure Examples

::: code-group

```java [Component]
@Execute
void execute(@Arg Component nocolored) { // [!code focus]
    // ...
}
```

```java [Component with color]
@Execute
void execute(@Arg @Key("color") Component colored) { // [!code focus]
    // ...
}
```

:::

### JDA Examples

```java
@Execute(name = "set")
void setRole(@Arg Member member, @Arg Role role) { // [!code focus]
    // ...
}
```


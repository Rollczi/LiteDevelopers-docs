# Supported Minestom Types

`@Arg` - Use Basic Types to easily validate, parse, and get arguments!

# Supported Types Minestom

| Argument Type | Values     | Example   |
| ------------- | ---------- | --------- |
| `Player`      | Any player | `Rollczi` |

## Example:

```java Example.java
@Execute(route = "player-arg")
public void executePlayer(@Contenxt Player player, @Arg Player target) {
    // ...
}
```

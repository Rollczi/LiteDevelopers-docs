# Minestom Types

`@Arg` - Use Basic Types to easily validate, parse, and get arguments!

# Supported Types Minestom

| Argument Type | Values     | Example   |
| ------------- | ---------- | --------- |
| `Player`      | Any player | `Rollczi` |

## Example:

```java Example.java
@Execute(name = "player-arg")
public void executePlayer(@Context Player player, @Arg Player target) {
    // ...
}
```

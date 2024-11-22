# Adventure Types

`@Arg` - Use Basic Types to easily validate, parse, and get arguments!

# Supported Types Adventure

| Argument Type | Values     | Example |
| ------------- | ---------- | ------- |
| `Component`   | Any string | `text`  |

## Example:

```java Example.java
@Execute(route = "component-arg")
public void executeBoolean(@Context Player player, @Arg Component component) {
    // ...
}

```

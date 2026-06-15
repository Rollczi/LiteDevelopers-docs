# @Arg @CaseInsensitive

If you want an enum argument to be parsed in a case-insensitive manner, use the @CaseInsensitive annotation.

## Example

```java
@Command(name = "color")
public class ColorCommand {
    @Execute
    void color(@Sender Player player, @Arg @CaseInsensitive Color color) { // [!code focus]
        player.sendMessage("Resolved colors as " + color);
    }
    
    private enum Color {
        RED, GREEN, BLUE
    }
}
```

Here is an example of the `/color` command usage:

<Console
scheme="/color <color>"
input="/color red"
output="Resolved colors as RED"
/>

### Without the `@CaseInsensitive`

Without the `@CaseInsensitive` annotation, the `/color` command accepts only exact enum values (e.g. `RED, GREEN`). Any other casing will result in an error.

<Console
scheme="/color <color>"
input="/color red"
output="<Invalid usage error>"
/>


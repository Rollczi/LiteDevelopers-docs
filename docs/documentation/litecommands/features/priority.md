# @Priority

The `@Priority` annotation lets you control the <mark>order of executor matching</mark> when multiple executors accept the same input.

### For example

To prioritize an executor with `int` over one with `String`, use `@Priority(PriorityValue.HIGH)`:

```java
@Command(name = "hello")
public class HelloCommand {
    @Execute
    void execute(@Arg String text) { // [!code focus]
        print("Matches String executor!! " + text);
    }

    @Execute
    @Priority(PriorityValue.HIGH) // [!code focus]
    void execute(@Arg int number) { // [!code focus]
        print("Matches int executor! " + number);
    }
}
```

> All values of the [PriorityValue](https://github.com/Rollczi/LiteCommands/blob/master/litecommands-annotations/src/dev/rollczi/litecommands/annotations/priority/PriorityValue.java)

Now there’s no risk that the input `/hello 10` will trigger the executor with the `String` argument.

<Console
scheme="/hello <text/number>"
input="/hello 10"
output="Matches int executor! 10"
/>
<Console
scheme="/hello <text/number>"
input="/hello hi"
output="Matches String executor! hi"
/>

:::warning WARNING - The order in the file does not matter!
Java discards method order during compilation.
:::

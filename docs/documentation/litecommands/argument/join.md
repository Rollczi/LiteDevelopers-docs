# @Join

To <mark>concatenate multiple arguments</mark> into a single string, use the `@Join` annotation.

```java
@Command(name = "ban")
public class BanCommand {
    @Execute
    void ban(@Arg Player target, @Join String reason) { // [!code focus]
        // Command implementation
    }
}
```

Let's consider the following command usage:

```yaml
input: /ban JohnDoe Offensive language and behavior
reason: Offensive language and behavior
```

## Additional Options

Sometimes you may want to limit the number of arguments that will be joined.

```java
@Join(limit = 2)
```

Or you may want to join arguments with a different separator.

```java
@Join(separator = ", ")
```

Or both:

```java
@Command(name = "ban")
public class BanCommand {
    @Execute
    public void ban(
        @Arg Player target,
        @Join(limit = 10, separator = "-") String reason // [!code focus]
    ) {
        // Command implementation
    }
}
```

Now, our result will be:

```yaml
input: /ban JohnDoe Offensive language and behavior
reason: Offensive-language-and-behavior
```

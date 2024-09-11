# @Join Argument

The `@Join` annotation in the LiteCommands framework is used to concatenate
multiple arguments into a single string. This annotation is particularly
useful when you want to combine several input parameters into a cohesive
text representation, such as creating a reason for a ban command.

## Usage
Here is an example of how to use the `@Join` annotation:

```Java
@Command(name = "ban")
public class BanCommand {
    @Execute
    public void ban(
        @Arg Player target,
        @Join String reason
    ) {
        // Command implementation
    }
}
```

Let's consider the following command usage:

```
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
        @Join(limit = 10, separator = "-") String reason
    ) {
        // Command implementation
    }
}
```

Let's consider the following command usage:

```
/ban JohnDoe Offensive language and behavior
reason: Offensive-language-and-behavior
```
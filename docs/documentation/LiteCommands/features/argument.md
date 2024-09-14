# @Arg Annotation

`@Arg` annotation is used to get the argument from the command. It can be used only on method parameters.

For example, if you want to get the first, second and third argument from the command, you can use `@Arg` annotation to get them.

You can also use `@Arg` annotation to get the argument from the command and convert it to the specified type.<br>
For example, if you want to get the first argument from the command and convert it to `int`, you can use `@Arg int` to get it.

## Example 1: Simple `String` argument

```java
@Command(name = "example")
public class Example {

    @Execute
    public void execute(@Context SENDER sender, @Arg String text) {
        System.out.println(text);
    }

}
```

## Example 2: Two `int` arguments

```java
@Command(name = "example")
public class Example {

    @Execute
    public void execute(@Context SENDER sender, @Arg int a, @Arg int b) {
        System.out.println(a + b);
    }

}
```

:::tip Argument types **built-in** LiteCommands!

- [Argument Basic Types](/documentation/litecommands/features/types/supported-basic-types.md) <br>
- [Argument Minestom Types](/documentation/litecommands/features/types/supported-types-minestom-extension.md) <br>
- [Argument Adventure Types](/documentation/litecommands/features/types/supported-types-adventure-extension.md) <br>
  :::

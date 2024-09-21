# @Arg

To define argument's <mark>parsing</mark> and <mark>suggestions</mark>, you need to use `@Arg` annotation.

```java {4}
@Command(name = "say")
public class SayCommand {
    @Execute
    void execute(@Context SENDER sender, @Arg String text) { // [!code focus]
        System.out.println(text);
    }
}
```

### Types

If you want to automatically parse the argument to a specific type,
then change the type of the argument to one of the [supported types](argument/supported-basic-types.md) or [create your own](argument-custom.md).


```java {4}
@Command(name = "time set")
public class TimeSetCommand {
    @Execute
    void execute(@Context SENDER sender, @Arg int time) { // [!code focus]
        sender.sendMessage("Time set to " + time);
    }
}
```

> [!IMPORTANT]
> Argument types **built-in** LiteCommands!
> -   [Argument Basic Types](argument/supported-basic-types.md) 
> -   [Argument Minestom Types](argument/supported-types-minestom-extension.md) 
> -   [Argument Adventure Types](argument/supported-types-adventure-extension.md) 

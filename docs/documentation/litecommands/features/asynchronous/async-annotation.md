# @Async

To execute a command <mark>asynchronously</mark>, you can use the `@Async` annotation.

## Async command execution

```Java
@Command(name = "async-command")
public class Example {

    @Async // [!code focus]
    @Execute
    void execute() {
        System.out.print("This message is triggered asynchronously!"); // [!code focus]
    }
}
```
> [!IMPORTANT]
> The command will be executed in an asynchronous thread defined by [scheduler](scheduler.md).

## Async argument parsing

You can parse arguments asynchronously as well. To do this, you need to use the `@Async` annotation on the argument:

```Java
@Command(name = "user")
public class UserCommand {

    @Execute(name = "load")
    void execute(@Async @Arg User argument) { // [!code focus]
        System.out.print("This message is triggered in the main thread!"); // [!code focus]
    }
}
```

> [!WARNING]
> The `@Async` annotation on the argument will parse the argument asynchronously, but the command will be executed in the main thread.

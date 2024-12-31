# @Async Execution

To execute a command <mark>asynchronously</mark>, you can use the `@Async` annotation.

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

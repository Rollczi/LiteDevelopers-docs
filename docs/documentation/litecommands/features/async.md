# @Async

The `@Async` annotation in the LiteCommands framework is used to mark a command as asynchronous. This annotation is
particularly useful when you want to execute a command in a separate thread.

## Usage

Here is an example of how to use the `@Async` annotation:

```Java
@Command(name = "async-command")
public class Example {

    @Async
    @Execute
    void executeAsync() {
        System.out.print("This message is triggered asynchronously!");
    }

}
```

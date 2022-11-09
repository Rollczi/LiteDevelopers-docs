# Asynchronously command
#### Run your commands asynchronously!

## Annotation `@Async`

Run command asynchronously by adding an annotation `@Async`

```java
@Route(name = "async-command")
public class Example {
    
    @Async
    @Execute
    void executeAsync() {
        System.out.print("This message is triggered asynchronously!");
    }
    
}
```

## Return CompletableFuture

You can use CompletableFuture to resolve result after complete asynchronously task.

```java
@Route(name = "async-command")
public class Example {
    
    @Execute
    CompletableFuture<String> executeAsync() {
        return CompletableFuture.supplyAsync(() -> {
            // blocking a call

            return "The command was successfully completed!";
        });
    }
    
}
```
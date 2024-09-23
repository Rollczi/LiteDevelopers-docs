
# 3. First command

Create a new class `FirstCommand` and annotate it with <mark>`@Command`</mark>:

```java
@Command(name = "hello")
public class HelloCommand {

    @Execute
    void hello(@Context CommandSender sender, @Arg String text) {
        sender.sendMessage("Hello, " + text + "!");
    }

}
```

::: tip
If you don't know how to create a LiteCommands builder, check the [2. Configure Builder](configure-builder.md) page.
:::

Now, register the command in a LiteCommands builder:

```java
.commands(
    new HelloCommand()
)
```

Now, you can use the `/hello` command in your server:

<Console
    scheme="/hello <username>"
    input="/hello Rollczi" 
    output="Hello, Rollczi!"
/>

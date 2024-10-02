
# 3. First command

To create your <mark>first command</mark>, you need to create a class with the `@Command` annotation and a method with the `@Execute` annotation.

```java
@Command(name = "hello")
public class HelloCommand {

    @Execute
    void hello(@Context CommandSender sender, @Arg String username) {
        sender.sendMessage("Hello, " + username + "!");
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

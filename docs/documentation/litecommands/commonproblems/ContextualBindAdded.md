# Contextual Bind Added common problem

If you have a problem with the Contextual Bind Added error, please check if you have the following code in your
litecommands builder:

```java
        this.liteCommands = LiteBukkitFactory.builder(this.getServer(),"example-plugin")
        .contextualBind(Player.class,new BukkitOnlyPlayerContextual<>("This command is only available for players!"))
        // ^^^ This line is responsible for the error
        // If you are use Player class as sender argument, need to built-in contextual bind or other solution
        .commandInstance(new HelpCommand())
        .register();
```
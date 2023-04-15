# Configure LiteCommands Builder
#### Configure LiteCommands Builder to your needs!

## Create LiteCommands Builder

To create LiteCommands Builder you need to use `LiteCommandsBuilder` class.

::: code-group
```java [Bukkit]
public class ExamplePlugin extends JavaPlugin {

    private LiteCommands<CommandSender> liteCommands;

    @Override
    public void onEnable() {
        this.liteCommands = LiteBukkitFactory.builder(this.getServer(), "example-plugin")
                .commandInstance(new HelpCommand())
                .register();
    }
}
```

```java [Velocity]
@Plugin(id = "example-plugin", name = "Example Plugin", version = "1.0.0")
public class ExamplePlugin {

    private final ProxyServer proxyServer;
    private LiteCommands<CommandSource> liteCommands;

    @Inject
    public ExamplePlugin(ProxyServer server) {
        this.proxyServer = server;
    }
    
    @Subscribe
    public void onProxyInitialization(ProxyInitializeEvent event) {
        this.liteCommands = LiteVelocityFactory.builder(this.proxyServer)
                .commandInstance(new HelpCommand())
                .register();
    }
}
```

```java [Bungee]
public class ExamplePlugin extends Plugin {

    private LiteCommands<CommandSender> liteCommands;

    @Override
    public void onEnable() {
        this.liteCommands = LiteBungeeFactory.builder(this.getProxy())
                .commandInstance(new HelpCommand())
                .register();
    }
}
```

```java [PaperMc]
public class ExamplePlugin extends JavaPlugin {

    private LiteCommands<CommandSender> liteCommands;

    @Override
    public void onEnable() {
        this.liteCommands = LitePaperAdventureFactory.builder(this.getServer(), "example-plugin")
                .commandInstance(new HelpCommand())
                .register();
    }
}
```


```java [Bukkit Adventure Platform]
public class ExamplePlugin extends JavaPlugin {

    private BukkitAudiences audiences;
    private LiteCommands<CommandSender> liteCommands;

    @Override
    public void onEnable() {
        this.audiences = BukkitAudiences.create(this);
    
        this.liteCommands = LiteBukkitAdventurePlatformFactory.builder(this.getServer(), "example-plugin", this.audiences)
                .commandInstance(new HelpCommand())
                .register();
    }
}
```
:::

## Configure LiteCommands Builder
LiteCommands Builder has many methods to configure it to your needs.

:::danger STOP! - Read this before you continue
To simplify the documentation, we will use `SENDER` instead of `CommandSender`, `CommandSource` etc. depending on the platform.  
Use the correct type `SENDER` for your platform!
:::




### Register Commands

To register commands you need to use `commandInstance` method of LiteCommands Builder.<br>
You can register multiple commands at once.

:::details Code - commandInstance()

MyPlugin.java

```java <span class='file'>Plugin.java (builder)</span>
                // ...
                .commandInstance(new MyCommand(),  new MyCommand2())
                // ...
```

MyCommand.java

```java <span class='file'>MyCommand.java</span>
@Route(name = "my-command")
public class MyCommand {

    @Execute
    void execute(SENDER sender) {
        sender.sendMessage("Hello World!");
    }
    
}
```

:::



### Register invalid usage handler
Invalid usage handler is called when command is executed with invalid usage.  <br>
You can use it to send custom message, title or action bar to player.

:::details Code - invalidUsageHandler()

MyPlugin.java

```java <span class='file'>Plugin.java</span>
                // ...
                .invalidUsageHandler(new InvalidUsage())
                // ...
```

InvalidUsage.java

```java <span class='file'>InvalidUsage.java</span>
public class InvalidUsage implements InvalidUsageHandler<SENDER> {

    @Override
    public void handle(SENDER sender, LiteInvocation invocation, Schematic schematic) {
        List<String> schematics = schematic.getSchematics();

        if (schematics.size() == 1) {
            sender.sendMessage("Invalid usage! Correct usage: " + schematics.get(0));
            return;
        }

        sender.sendMessage("Invalid usage! Correct usages: ");
        for (String sch : schematics) {
            sender.sendMessage(" - " + sch);
        }
    }
}
```

:::

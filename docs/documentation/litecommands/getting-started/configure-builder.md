# 2. Configure Builder

To start using LiteCommands create a new instance of `LiteCommands` using the builder.

> [!CAUTION]
> Don't add any commands to `plugin.yml`!
> If you have declared commands in the `plugin.yml` then LiteCommands will not able to register them.

Depending on the platform you are using, <mark>choose</mark> the appropriate builder:

::: code-group

```java [Bukkit]
public class ExamplePlugin extends JavaPlugin {

    private LiteCommands<CommandSender> liteCommands;

    @Override
    public void onEnable() {
        this.liteCommands = LiteBukkitFactory.builder("fallback-prefix", this)
            .commands(
                new FlyCommand(),
                new GameModeCommand()
                // your other commands
            )
            .build();
    }

    @Override
    public void onDisable() {
        if (this.liteCommands != null) {
            this.liteCommands.unregister();
        }
    }
}
```

```java [Velocity]
@Plugin(id = "example-plugin", name = "ExamplePlugin", version = "1.0.0")
public class ExamplePlugin {

    private final ProxyServer proxyServer;
    private LiteCommands<CommandSource> liteCommands;

    @Inject
    public ExamplePlugin(ProxyServer proxyServer) {
        this.proxyServer = proxyServer;
    }

    @Subscribe
    public void onProxyInitialization(ProxyInitializeEvent event) {
        this.liteCommands = LiteVelocityFactory.builder(this.proxyServer)
            .commands(
                new SendCommand(),
                new MoveCommand(),
                // your other commands
            )
            .build();

        // your code ...
    }

    @Subscribe
    public void onProxyShutdown(ProxyShutdownEvent event) {
        if (this.liteCommands != null) {
            this.liteCommands.unregister();
        }
    }
}
```

```java [BungeeCord]
public class ExamplePlugin extends Plugin {

    private LiteCommands<CommandSender> liteCommands;

    @Override
    public void onEnable() {
        this.liteCommands = LiteBungeeFactory.builder(this)
            .commands(
                new SendCommand(),
                new MoveCommand(),
                // your other commands
            )
            .build();

        // your code ...
    }

    @Override
    public void onDisable() {
        if (this.liteCommands != null) {
            this.liteCommands.unregister();
        }
    }
}
```

```java [Minestom]
public class ExampleMinestom {

    public static void main(String[] args) {
        LiteMinestomFactory.builder()
            .commands(
                new FlyCommand(),
                new GameModeCommand()
            )
            .build();

        // your code ...
    }
}
```

```java [Sponge]
@Plugin("sponge-plugin")
public class SpongePlugin {

    @Inject
    public SpongePlugin(PluginContainer pluginContainer, Game game) {
        LiteSpongeFactory.builder(pluginContainer, game)
            .commands(
                new TeleportCommand(),
                new KickCommand(),
                // your other commands

            )
            .build();

        // your code ...
    }
}
```

```java [Fabric]
public class ExampleFabric implements ModInitializer {

    @Override
    public void onInitialize() {
        LiteFabricFactory.create()
            .commands(
                new BanCommand(),
                new MuteCommand(),
                // your other commands
            )
            .build();

        // your code ...
    }
}
```

```java [JDA]
public class ExampleJDA {

    public static void main(String[] args) {
        JDA jda = JDABuilder.createDefault("token")
            .build();

        LiteJDAFactory.builder(jda)
            .commands(
                new EmbedCommand(),
                new MessageCommand(),
                // your other commands
            )
            .build();

        // your code ...
    }
}
```

:::

> [!INFO]
> What is Fallback prefix?
> Command has two parts for example: `minecraft:give`, first `minecraft` is fallback prefix.
> Fallback prefix is always lowercase e.g. `myplugin` or `my-plugin`.
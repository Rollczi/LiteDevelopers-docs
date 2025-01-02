# StrictMode

The `StrictMode` enum in LiteCommands decides if methods get executed, even if the argument length
exceeds the method expected length.

If the `StrictMode` is enabled, LiteCommands checks the length of the given arguments and 
fails the execution with the reason `InvalidUsage.Cause.TOO_MANY_ARGUMENTS`. 
This can be caught in your custom `InvalidUsageHandler`.

If the `StrictMode` is disabled, LiteCommands tries to execute any matching method. If no matching
method is found, the `@ExecuteDefault` will be executed. [See @ExecuteDefault](execute-default.md)

By default, the `StrictMode` is globally enabled, and only the `@ExecuteDefault` annotation disables it.

## Example Implementation

Here's an example of how to change the default `StrictMode`:

```java [Bukkit]
public class ExamplePlugin extends JavaPlugin {

    private LiteCommands<CommandSender> liteCommands;

    @Override
    public void onEnable() {
        this.liteCommands = LiteBukkitFactory.builder("fallback-prefix", this)
                .commands(
                        // your commands
                )
                .strictMode(StrictMode.DISABLED) // [!code focus]
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

## Changing the StrictMode on commands

You can still change the `StrictMode` in your commands, by changing the `strict` parameter on the following annotations:
- `@RootCommand` 
- `@Command` 
- `@Execute` 
- `@ExecuteDefault`

```java 
@Command(name = "hello", strict = StrictMode.DISABLED) // [!code focus]
public class HelloCommand {
    @Execute(strict = StrictMode.ENABLED) // [!code focus]
    void execute() {
        // /hello
    }
}
```

> [!INFO]
> If you want to use the global configured `StrictMode`,
> you need to set the `strict` parameter on the annotations to
> `StrictMode.DEFAULT`, to let it forward to the global configured value.

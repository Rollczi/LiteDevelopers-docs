# Supported Platforms

LiteCommands supports multiple platforms. You can find all of them in the table below.

| Platform Name             | Compatible with                  | Compatible version  |
|---------------------------|----------------------------------|---------------------|
| `litecommands-bukkit`     | Bukkit / Spigot / Paper / Purpur | 1.8.8 - 1.21.5      |
| `litecommands-velocity`   | Velocity                         | 3.2.0               |
| `litecommands-bungeecord` | BungeeCord / Waterfall           | 1.20-R0.1           |
| `litecommands-minestom`   | Minestom                         | 1.20.6              |
| `litecommands-sponge`     | Sponge                           | 8.2.0               |
| `litecommands-fabric`     | Fabric                           | See current version |
| `litecommands-jda`        | JDA                              | 5.0.2               |
| -                         | Folia                            | -                   |

::: tip How to use it?
To use LiteCommands with a specific platform, you need to add the platform dependency to your project.
See the [Dependencies](getting-started/dependencies.md) page for more information.
:::

## What is SENDER?

When you see `SENDER` in the documentation, it means a platform-specific sender type.
You can find the sender type for each platform in the table below:

| Compatible with                  | Base Senders          |
|----------------------------------|-----------------------|
| Bukkit / Spigot / Paper / Purpur | `CommandSender`       |
| Velocity                         | `CommandSource`       |
| BungeeCord / Waterfall           | `CommandSender`       |
| Minestom                         | `CommandSender`       |
| Sponge                           | `CommandCause`        |
| Fabric                           | `ServerCommandSource` |
| JDA                              | `User`                |
| Folia                            | `CommandSender`       |


# Supported Platforms

LiteCommands supports multiple platforms. You can find all of them in the table below.

| Platform Name                                          | Compatible with                  | Compatible version  |
|--------------------------------------------------------|----------------------------------|---------------------|
| `litecommands-bukkit`                                  | Bukkit / Spigot / Paper / Purpur | 1.8.8 - 1.21.8      |
| `litecommands-folia` [(extension)](./extensions/folia) | Folia                            | 1.20 - 1.21.6       |
| `litecommands-velocity`                                | Velocity                         | 3.4.0               |
| `litecommands-bungeecord`                              | BungeeCord / Waterfall           | 1.21-R0.3           |
| `litecommands-minestom`                                | Minestom                         | 1.21.8              |
| `litecommands-sponge`                                  | Sponge                           | 13.0.0              |
| `litecommands-fabric`                                  | Fabric                           | See current version |
| `litecommands-jda`                                     | JDA                              | 5.6.1               |
| `litecommands-telegrambots`                            | TelegramBots                     | 9.0.0               |

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
| TelegramBots                     | `User`                |


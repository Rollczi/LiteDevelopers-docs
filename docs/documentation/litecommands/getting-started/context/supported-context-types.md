# Supported Types

List all supported `@Context` types for platforms:

| Platform/Extension | Types                                                                                                         |
|--------------------|---------------------------------------------------------------------------------------------------------------|
| Bukkit             | `CommandSender`, `Player`, `World`, `Location`                                                                |
| Velocity           | `CommandSource`, `Player`, `ServerConnection`, `RegisteredServer`, `ServerInfo`                               |
| BungeeCord         | `CommandSender`, `ProxiedPlayer`,                                                                             |
| Minestom           | `CommandSender`, `Player`, `Instance`                                                                         |
| Adventure          | `Audience`                                                                                                    |
| Sponge             | `CommandCause`, `ServerPlayer`                                                                                |
| Fabric (client)    | `FabricClientCommandSource`, `ClientPlayerEntity`,                                                            |
| Fabric (server)    | `ServerCommandSource`, `ServerPlayerEntity`,                                                                  |
| JDA                | `User`, `Guild`, `Member`, `MessageChannelUnion`, `MessageChannel`, `Channel`, `SlashCommandInteractionEvent` |

::: tip
These types are supported by default and represent context information for the command execution. Also, you can create a custom context provider for your types! Check out the [Custom Context](custom-context.md).
:::

## How to use


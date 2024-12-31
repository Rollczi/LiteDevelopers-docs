# JDA Types

`@Arg` - Use <mark>JDA Types</mark> to easily validate, parse, and get arguments!

# Supported Types JDA

| Argument Type       | Values                  | Example             |
|---------------------|-------------------------|---------------------|
| `User`              | Any user                | `user`              |
| `Attachment`        | Any attachment          | `attachment`        |
| `Role`              | Any role                | `role`              |
| `IMentionable`      | Any mentionable         | `mentionable`       |
| `Channel`           | Any channel             | `channel`           |
| `GuildChannel`      | Any guild channel       | `guildChannel`      |
| `GuildChannelUnion` | Any guild channel union | `guildChannelUnion` |
| `Member`            | Any member              | `member`            |

## Example:

```java Example.java
@Execute(route = "member-arg")
public void executeMember(@Context SlashCommandInteractionEvent event, @Arg Member member) {
    // ...
}
```

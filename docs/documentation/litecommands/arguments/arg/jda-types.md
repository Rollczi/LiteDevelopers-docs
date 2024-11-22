# JDA Types

`@Arg` - Use Basic Types to easily validate, parse, and get arguments!

# Supported Types JDA

| Argument Type                  | Values                  | Example          |
|--------------------------------|-------------------------|------------------|
| `Guild`                        | Any guild               | `guild`          |
| `MessageChannelUnion`          | Any message channel     | `messageChannel` |
| `Member`                       | Any member              | `member`         |
| `SlashCommandInteractionEvent` | The given command event | `event`          |

## Example:

```java Example.java
@Execute(route = "member-arg")
public void executeMember(@Context SlashCommandInteractionEvent event, @Arg Member member) {
    // ...
}
```

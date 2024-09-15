# ChatGPT Extension

The litecommands-chatgpt is a extension for supporting ChatGPT suggestions.

> [!CAUTION]
> Replace `{version}` with the version of LiteCommands you want to use.

#### Get the latest version of litecommands from [Panda Repository ❤](https://repo.panda-lang.org/#/releases/dev/rollczi/litecommands)

---

::: code-group

```kotlin [Gradle Kotlin]
implementation("dev.rollczi:litecommands-chatgpt:{version}")
```

```groovy [Gradle Groovy]
implementation "dev.rollczi:litecommands-chatgpt:{version}"
```

```xml [Maven]
<dependency>
    <groupId>dev.rollczi</groupId>
    <artifactId>litecommands-chatgpt</artifactId>
    <version>{version}</version>
</dependency>
```

:::

## Register the extension

Register the extension in the `LiteCommands` builder:

```java
.extension(new LiteChatGptExtension<>(), configuration -> configuration
        .apiKey("OPENAI_API_KEY") // get your api key from https://platform.openai.com/account/api-keys
    .model(ChatGptModel.GPT_4) // get model from https://platform.openai.com/docs/models/gpt-3-5
    .temperature(1.0) // see more https://platform.openai.com/docs/guides/gpt/how-should-i-set-the-temperature-parameter
    .tokensLimit(2, 64) // min and max tokens
    .cooldown(Duration.ofMillis(500)) // cooldown between suggestions per player
        )
```

## Example Command

```java
@Command(name = "ban")
public class BanCommand {

    @Execute
    void ban(
        @Arg Player player,
        @Join @ChatGpt(topic = "Reason for ban") String reason
    ) {
        player.kickPlayer(reason);
    }

}
```

## ChatGPT Extension in action!

<video width="1280" height="720" controls>
  <source src="/chat-gpt.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

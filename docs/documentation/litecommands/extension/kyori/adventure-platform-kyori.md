# Install Adventure (Non-native supported platforms)

LiteCommands Adventure Platform is an extension for supporting Kyori Adventure features
for platforms that are doesn't have native support for it. E.g. Bukkit, BungeeCord, etc.

> [!TIP]
> Make sure you have read the [Adventure Kyori](Adventure-Kyori.md) page before using this extension.

> [!CAUTION]
> Replace `{version}` with the version of LiteCommands you want to use.
#### Get the latest version of litecommands from [Panda Repository ❤](https://repo.panda-lang.org/#/releases/dev/rollczi/litecommands)
---

::: code-group
```kotlin [Gradle Kotlin]
implementation("dev.rollczi:litecommands-adventure-platform:{version}")
```

```groovy [Gradle Groovy]
implementation "dev.rollczi:litecommands-adventure-platform:{version}"
```

```xml [Maven]
<dependency>
    <groupId>dev.rollczi</groupId>
    <artifactId>litecommands-adventure-platform</artifactId>
    <version>{version}</version>
</dependency>
```
:::


## Registering the extension

Register the extension in the `LiteCommands` builder:

```java
.extension(new LiteAdventurePlatformExtension<>(this.audienceProvider), config -> config
    .miniMessage(true)
    .legacyColor(true)
    .colorizeArgument(true)
    .serializer(this.miniMessage)
)
```

- `audienceProvider` - the provider for the `Audience` object. If you don't have it, read the [Adventure Platform](https://docs.advntr.dev/platform/index.html) page for more information.

- `miniMessage()` - enables the MiniMessage support. (`<red>`, `<gradient:red:blue>`, `<#ff0000>`, etc.)
- `legacyColor()` - enables the legacy color support. `&c`, `&a`, etc.
- `colorizeArgument()` - enables the default colorizer for the `@Arg Component` argument.
- `serializer()` - sets the custom serializer (colorizer) for the `@Arg Component` argument. (if replaced, the `miniMessage()` and `legacyColor()` will be ignored)

## Full Example

> See [this full example](https://github.com/Rollczi/LiteCommands/tree/master/examples/bukkit-adventure-platform)
> to check how to use this extension in your project.
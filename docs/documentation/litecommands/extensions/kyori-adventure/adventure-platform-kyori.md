# Adventure Platform

LiteCommands Adventure Platform is an extension for supporting Kyori Adventure features
for platforms that are doesn't have native support for it. E.g. Bukkit, BungeeCord, etc.

> [!IMPORTANT]
> Make sure you have read the [Adventure Kyori](https://docs.advntr.dev/getting-started.html) page before using this extension.

## Add Dependency

::: code-group

```kotlin [Gradle Kotlin]
implementation("dev.rollczi:litecommands-adventure-platform:{version:litecommands}")
```

```groovy [Gradle Groovy]
implementation "dev.rollczi:litecommands-adventure-platform:{version:litecommands}"
```

```xml [Maven]
<dependency>
    <groupId>dev.rollczi</groupId>
    <artifactId>litecommands-adventure-platform</artifactId>
    <version>{version:litecommands}</version>
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

-   `audienceProvider` - the provider for the `Audience` object. If you don't have it, read the [Adventure Platform](https://docs.advntr.dev/platform/index.html) page for more information.

-   `miniMessage()` - enables the MiniMessage support. (`<red>`, `<gradient:red:blue>`, `<#ff0000>`, etc.)
-   `legacyColor()` - enables the legacy color support. `&c`, `&a`, etc.
-   `colorizeArgument()` - enables the default colorizer for the `@Arg Component` argument.
-   `serializer()` - sets the custom serializer (colorizer) for the `@Arg Component` argument. (if replaced, the `miniMessage()` and `legacyColor()` will be ignored)

## Full Example

> See [this full example](https://github.com/Rollczi/LiteCommands/tree/master/examples/bukkit-adventure-platform)
> to check how to use this extension in your project.

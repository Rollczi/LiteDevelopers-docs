# Adventure (Native)

LiteCommands Adventure is an extension for supporting Kyori Adventure features
for platforms that are have **native support for it. E.g. Paper, Purpur, Velocity, Minestom**, etc.

But some platforms have built-in support for Adventure Kyori, so you don't need to add any additional dependencies to your project.
See the [Adventure Kyori Extensions](https://docs.advntr.dev/getting-started.html) page to check if your platform has built-in support for Adventure Kyori.

> [!IMPORTANT]
> Make sure you have read the [Adventure Kyori](https://docs.advntr.dev/getting-started.html) page before using this extension.

---

::: code-group

```kotlin [Gradle Kotlin]
implementation("dev.rollczi:litecommands-adventure:{version:litecommands}")
```

```groovy [Gradle Groovy]
implementation "dev.rollczi:litecommands-adventure:{version:litecommands}"
```

```xml [Maven]
<dependency>
    <groupId>dev.rollczi</groupId>
    <artifactId>litecommands-adventure</artifactId>
    <version>{version:litecommands}</version>
</dependency>
```

:::

## Registering the extension

Register the extension in the `LiteCommands` builder:

```java
.extension(new LiteAdventureExtension<>(), config -> config
    .miniMessage(true)
    .legacyColor(true)
    .colorizeArgument(true)
    .serializer(this.miniMessage)
)
```

-   `miniMessage()` - enables the MiniMessage support. (`<red>`, `<gradient:red:blue>`, `<#ff0000>`, etc.)
-   `legacyColor()` - enables the legacy color support. `&c`, `&a`, etc.
-   `colorizeArgument()` - enables the default colorizer for the `@Arg Component` argument.
-   `serializer()` - sets the custom serializer (colorizer) for the `@Arg Component` argument.
    (if replaced, the `miniMessage()` and `legacyColor()` will be ignored)

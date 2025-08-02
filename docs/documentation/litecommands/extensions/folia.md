# Folia

Folia is a <mark>high-performance</mark> fork of Paper, designed to improve server performance by asynchronously processing regions.
The Folia extension provides the necessary integration for LiteCommands to work seamlessly with Folia server.

### Adding the dependency

---

::: code-group

```kotlin [Gradle Kotlin]
implementation("dev.rollczi:litecommands-folia:{version:litecommands}")
```

```groovy [Gradle Groovy]
implementation "dev.rollczi:litecommands-folia:{version:litecommands}"
```

```xml [Maven]
<dependency>
    <groupId>dev.rollczi</groupId>
    <artifactId>litecommands-folia</artifactId>
    <version>{version:litecommands}</version>
</dependency>
```

:::

### Registering the extension

Register the extension in the `LiteCommands` builder:

```java
.extension(new FoliaExtension(this))
```
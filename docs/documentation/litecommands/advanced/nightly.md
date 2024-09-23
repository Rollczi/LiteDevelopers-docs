# Nightly Dependencies

If you want to use the <mark>latest features</mark>, you can use the nightly version of LiteCommands.

Add the snapshot repository to your project and change the version of LiteCommands:

::: code-group

```kotlin [Gradle Kotlin]
maven { url = uri("https://repo.eternalcode.pl/snapshots") }
```

```groovy [Gradle Groovy]
maven { url "https://repo.eternalcode.pl/snapshots" }
```

```xml [Maven]
<repository>
    <id>eternalcode-reposilite-snapshots</id>
    <url>https://repo.eternalcode.pl/snapshots</url>
</repository>
```

:::

::: code-group

```kotlin [Gradle Kotlin]
implementation("dev.rollczi:{platform}:{version:litecommands-nightly}")
```

```groovy [Gradle Groovy]
implementation "dev.rollczi:{platform}:{version:litecommands-nightly}"
```

```xml [Maven]

<dependency>
    <groupId>dev.rollczi</groupId>
    <artifactId>{platform}</artifactId>
    <version>{version:litecommands-nightly}</version>
</dependency>
```

::: danger Remember!
The nightly version may contain bugs and is not recommended for production use.
:::

# Get Started
#### Get Started with LiteCommands framework!
---

::: info
Stable releases are publishing on [Panda Repository ❤](https://repo.panda-lang.org/#/releases/dev/rollczi/litecommands)
:::


# #1 Dependencies

## Available Platforms
- core
- bukkit
- bukkit-adventure
- bungee
- velocity

#### psst. get the latest version of litecommands from [Panda Repository ❤](https://repo.panda-lang.org/#/releases/dev/rollczi/litecommands)

### Adding repository:

```groovy [repository:Gradle Kotlin]
maven {
    url = uri("https://repo.panda-lang.org/releases")
}
```

```groovy [repository:Gradle Groovy]
maven {
    url "https://repo.panda-lang.org/releases"
}
```

```xml [repository:Maven]
<repository>
  <id>reposilite-repository-releases</id>
  <name>Reposilite Repository</name>
  <url>https://repo.panda-lang.org/releases</url>
</repository>
```

### Adding dependency

```groovy [dependency:Gradle Kotlin]
implementation("dev.rollczi.litecommands:{platform}:{version}")
```

```groovy [dependency:Gradle Groovy]
implementation "dev.rollczi.litecommands:{platform}:{version}"
```

```xml [dependency:Maven]
<dependency>
  <groupId>dev.rollczi.litecommands</groupId>
  <artifactId>{platform}</artifactId>
  <version>{version}</version>
</dependency>
```
<script setup>
    import constants from '../../components/Constants';
</script>

# Get Started
#### Get Started with LiteCommands framework!
---

::: info
Stable releases are publishing on [Panda Repository ❤](https://repo.panda-lang.org/#/releases/dev/rollczi/litecommands)
:::

### Supported Platforms

| Platform Name      | Compatible with              | Compatible version |
|--------------------|------------------------------|--------------------|
| `bukkit`           | Bukkit / Spigot / PaperMc    | 1.8 - 1.19         |
| `bukkit-adventure` | PaperMc / Adventure Platform | 1.8 - 1.19         |
| `bungee`           | BungeeCord                   | 1.19               |
| `velocity`         | Velocity                     | 3.1.2              |

### Add panda repository to repositories

```kotlin [repository:Gradle Kotlin]
maven { url = uri("https://repo.panda-lang.org/releases") }
```

```groovy [repository:Gradle Groovy]
maven { url "https://repo.panda-lang.org/releases" }
```

```xml [repository:Maven]
<repository>
  <id>reposilite-repository-releases</id>
  <name>Reposilite Repository</name>
  <url>https://repo.panda-lang.org/releases</url>
</repository>
```

### Add LiteCommands to dependencies

```kotlin [dependency:Gradle Kotlin]
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

::: warning
`{version}` Current version of LiteCommands `{{ constants.liteCommandVersion }}`  
`{platform}` Choose the platform you need (for example `bukkit`)
:::

#### Get the latest version of litecommands from [Panda Repository ❤](https://repo.panda-lang.org/#/releases/dev/rollczi/litecommands)
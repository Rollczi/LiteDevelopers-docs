<script setup>
    import constants from '../../components/Constants';
</script>

# Get Started
#### Get Started with LiteCommands framework!

## Supported Platforms

LiteCommands supports many platforms, check out the table below and choose the one you want to use.

| Platform Name      | Compatible with              | Compatible version |
|--------------------|------------------------------|--------------------|
| `bukkit`           | Bukkit / Spigot / PaperMc    | 1.8 - 1.19         |
| `bukkit-adventure` | PaperMc / Adventure Platform | 1.8 - 1.19         |
| `bungee`           | BungeeCord                   | 1.19               |
| `velocity`         | Velocity                     | 3.1.2              |

## Add <u>Panda Repository</u> to repositories & <u>LiteCommands</u> to dependencies

To use LiteCommands you need to add Panda Repository to your repositories and LiteCommands to your dependencies.<br>
For Maven, Gradle Groovy and Gradle Kotlin you can find the code below.

::: code-group

```kotlin [Gradle Kotlin]
maven { url = uri("https://repo.panda-lang.org/releases") }
```

```groovy [Gradle Groovy]
maven { url "https://repo.panda-lang.org/releases" }
```

```xml [Maven]
<repository>
  <id>reposilite-repository-releases</id>
  <name>Reposilite Repository</name>
  <url>https://repo.panda-lang.org/releases</url>
</repository>
```

:::

::: code-group

```kotlin [Gradle Kotlin]
implementation("dev.rollczi.litecommands:{platform}:{version}")
```

```groovy [Gradle Groovy]
implementation "dev.rollczi.litecommands:{platform}:{version}"
```

```xml [Maven]
<dependency>
  <groupId>dev.rollczi.litecommands</groupId>
  <artifactId>{platform}</artifactId>
  <version>{version}</version>
</dependency>
```

:::

::: info
Replace `{platform}` with the platform you want to use. (for example `bukkit`)  
Replace `{version}` with the version of LiteCommands you want to use.  
Current version of LiteCommands `{{ constants.liteCommandVersion }}`
:::

#### Get the latest version of litecommands from [Panda Repository ❤](https://repo.panda-lang.org/#/releases/dev/rollczi/litecommands)
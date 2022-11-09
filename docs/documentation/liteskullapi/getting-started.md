<script setup>
    import constants from '../../components/Constants';
</script>

# Get Started
#### Get Started with LiteSkullAPI library!

## Supported Platforms

LiteSkullAPI currently supports only Bukkit / Spigot / PaperMC.

| Platform                  | Version       |
|---------------------------|---------------|
| Bukkit / Spigot / PaperMc | 1.8 - 1.19.2  |
| _MineStom (Coming soon)_  | (Coming soon) |

## Add <u>mineCodes</u> to repositories & <u>LiteSkullAPI</u> to dependencies

To use LiteSkullAPI you need to add mineCodes to your repositories and LiteSkullAPI to your dependencies.
For Maven, Gradle Groovy and Gradle Kotlin you can find the code below.

```kotlin [repository:Gradle Kotlin]
maven { url = uri("https://repository.minecodes.pl/releases") }
```

```groovy [repository:Gradle Groovy]
maven { url "https://repository.minecodes.pl/releases" }
```

```xml [repository:Maven]
<repository>
  <id>minecodes-repository-releases</id>
  <name>mineCodes Repository</name>
  <url>https://repository.minecodes.pl/releases</url>
</repository>
```

```kotlin [dependency:Gradle Kotlin]
implementation("dev.rollczi:liteskullapi:{version}")
```

```groovy [dependency:Gradle Groovy]
implementation "dev.rollczi:liteskullapi:{version}"
```

```xml [dependency:Maven]
<dependency>
  <groupId>dev.rollczi</groupId>
  <artifactId>liteskullapi</artifactId>
  <version>{version}</version>
</dependency>
```

::: info
Replace {version} with the version of LiteCommands you want to use.<br>
`{version}` Current version of LiteSkullAPI `{{ constants.liteSkullAPIVersion }}`  
:::

#### Get the latest version of LiteSkullAPI from [mineCodes Repository ❤](https://repository.minecodes.pl/#/releases/dev/rollczi/liteskullapi)
# Get Started

#### Get Started with LiteSkullAPI library!

## Supported Platforms

LiteSkullAPI currently supports only Bukkit / Spigot / PaperMC.

| Platform                  | Version       |
| ------------------------- | ------------- |
| Bukkit / Spigot / PaperMc | 1.8 - 1.19.2  |
| _MineStom (Coming soon)_  | (Coming soon) |

## Add <u>mineCodes</u> to repositories & <u>LiteSkullAPI</u> to dependencies

To use LiteSkullAPI you need to add mineCodes to your repositories and LiteSkullAPI to your dependencies.
For Maven, Gradle Groovy and Gradle Kotlin you can find the code below.

::: code-group

```kotlin [Gradle Kotlin]
maven { url = uri("https://repository.minecodes.pl/releases") }
```

```groovy [Gradle Groovy]
maven { url "https://repository.minecodes.pl/releases" }
```

```xml [Maven]
<repository>
  <id>minecodes-repository-releases</id>
  <name>mineCodes Repository</name>
  <url>https://repository.minecodes.pl/releases</url>
</repository>
```

:::

::: code-group

```kotlin [Gradle Kotlin]
implementation("dev.rollczi:liteskullapi:{version}")
```

```groovy [Gradle Groovy]
implementation "dev.rollczi:liteskullapi:{version}"
```

```xml [Maven]
<dependency>
  <groupId>dev.rollczi</groupId>
  <artifactId>liteskullapi</artifactId>
  <version>{version}</version>
</dependency>
```

:::

::: info
Replace {version} with the version of LiteCommands you want to use.<br>
:::

#### Get the latest version of LiteSkullAPI from [mineCodes Repository ❤](https://repository.minecodes.pl/#/releases/dev/rollczi/liteskullapi)

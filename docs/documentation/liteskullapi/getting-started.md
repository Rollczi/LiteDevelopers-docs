# Get Started

#### Get Started with LiteSkullAPI library!

## Supported Platforms

LiteSkullAPI currently supports only Bukkit / Spigot / PaperMC.

| Platform                  | Version       |
| ------------------------- | ------------- |
| Bukkit / Spigot / PaperMc | 1.8 - 1.19.2  |
| _MineStom (Coming soon)_  | (Coming soon) |

## Add <u>EternalCode</u> to repositories & <u>LiteSkullAPI</u> to dependencies

To use LiteSkullAPI you need to add EternalCode to your repositories and LiteSkullAPI to your dependencies.
For Maven, Gradle Groovy and Gradle Kotlin you can find the code below.

::: code-group

```kotlin [Gradle Kotlin]
maven { url = uri("https://repo.eternalcode.pl/releases") }
```

```groovy [Gradle Groovy]
maven { url "https://repo.eternalcode.pl/releases" }
```

```xml [Maven]
<repository>
    <id>eternalcode-reposilite-releases</id>
    <name>EternalCode Repository</name>
    <url>https://repo.eternalcode.pl/releases</url>
</repository>
```

:::

::: code-group

```kotlin [Gradle Kotlin]
implementation("dev.rollczi:liteskullapi:{version:liteskullapi}")
```

```groovy [Gradle Groovy]
implementation "dev.rollczi:liteskullapi:{version:liteskullapi}"
```

```xml [Maven]
<dependency>
    <groupId>dev.rollczi</groupId>
    <artifactId>liteskullapi</artifactId>
    <version>{version:liteskullapi}</version>
</dependency>
```

:::

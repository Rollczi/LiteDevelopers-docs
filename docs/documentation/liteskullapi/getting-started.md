<script setup>
    import constants from '../../components/Constants';
</script>

# Get Started
#### Get Started with LiteSkullAPI library!
---

::: info
Stable releases are publishing on [mineCodes Repository ❤](https://repository.minecodes.pl/#/releases/dev/rollczi/liteskullapi)
:::

### Supported Platforms

| Platform                  | Version      |
|---------------------------|--------------|
| Bukkit / Spigot / PaperMc | 1.8 - 1.19.2 |

### Add mineCodes repository to repositories

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

### Add LiteSkullAPI to dependencies

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

::: warning
`{version}` Current version of LiteSkullAPI `{{ constants.liteSkullAPIVersion }}`  
:::

#### Get the latest version of LiteSkullAPI from [mineCodes Repository ❤](https://repository.minecodes.pl/#/releases/dev/rollczi/liteskullapi)
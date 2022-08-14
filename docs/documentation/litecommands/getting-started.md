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

### If Using Gradle (Groovy version):
```groovy
repositories {
    maven { url "https://repo.panda-lang.org/releases" }
}
```

```groovy
dependencies {
    implementation "dev.rollczi.litecommands:{platform}:{version}"
}
```

### If Using Maven:

```xml
<repository>
  <id>reposilite-repository-releases</id>
  <name>Reposilite Repository</name>
  <url>https://repo.panda-lang.org/releases</url>
</repository>
```

```xml
<dependency>
  <groupId>dev.rollczi.litecommands</groupId>
  <artifactId>{platform}</artifactId>
  <version>{version}</version>
</dependency>
```
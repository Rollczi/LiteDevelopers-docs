# 1. Dependencies


To use LiteCommands you need to add <mark>Panda Repository</mark> to your repositories and <mark>LiteCommands</mark> to your dependencies in your project.

Depending on the build system you are using, add the following code to your project:



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
implementation("dev.rollczi:{platform}:{version:litecommands}")
```

```groovy [Gradle Groovy]
implementation "dev.rollczi:{platform}:{version:litecommands}"
```

```xml [Maven]

<dependency>
    <groupId>dev.rollczi</groupId>
    <artifactId>{platform}</artifactId>
    <version>{version:litecommands}</version>
</dependency>
```

:::

::: info
LiteCommands requires **Java 8** or higer.
:::

> [!CAUTION] READ THIS!
> Replace **`{platform}`** with the platform you want to use (See [platforms](../platforms.md)).

## Parameters compile flag <Badge text="optional" type="tip"/>

To use all features of LiteCommands, you need to add `-parameters` flag to your compiler:

::: code-group

```kts [Gradle Kotlin]
tasks.compileJava {
    options.compilerArgs.add("-parameters")
}
```

```groovy [Gradle Groovy]
tasks.withType(JavaCompile) {
    options.compilerArgs.add("-parameters")
}
```

```xml [Maven]
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-compiler-plugin</artifactId>
    <version>3.11.0</version>
    <configuration>
        <compilerArgs>
            <arg>-parameters</arg>
        </compilerArgs>
    </configuration>
</plugin>
```

> [!TIP] Why <code>-parameters</code> flag?
> Parameters are used to automatically get the name of the parameter in the methods.
> Without this flag, you would have to define the name of the parameter in the `@Arg` annotation.
> 
> So instead of `@Arg("player") Player player`, you can write just `@Arg Player player`.
# Get Started with LiteCommands framework!

This page will guide you through the process of adding LiteCommands to your project.


> [!NOTE]
> LiteCommands requires **Java 8** or higer.

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
implementation("dev.rollczi:{platform}:{version}")
```

```groovy [Gradle Groovy]
implementation "dev.rollczi:{platform}:{version}"
```

```xml [Maven]

<dependency>
    <groupId>dev.rollczi</groupId>
    <artifactId>{platform}</artifactId>
    <version>{version}</version>
</dependency>
```

:::

> [!CAUTION]
> Replace **`{platform}`** with the platform you want to use (See [platforms](platforms.md)).                    
> Replace `{version}` with the version of LiteCommands you want to use.
#### Get the latest version of litecommands from [Panda Repository ❤](https://repo.panda-lang.org/#/releases/dev/rollczi/litecommands)
---

# Parameters compile flag

Add `-parameters` flag to your compiler to use all features of LiteCommands: Depending on the build system you are
using, add the following code to your project:

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

> [!NOTE]
> Parameters are used to get the name of the parameter in the method. Without this 
> flag, the name of the command arguments will be `arg0`, `arg1`, etc.
> 
> Also you can define the name of the parameter in the `@Arg("name")` annotation.

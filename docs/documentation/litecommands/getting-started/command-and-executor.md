# @Command & @Executor 

To define basic structure of a <mark>command</mark> and <mark>subcommands</mark>, use the `@Command` and `@Executor` annotations.

## Command

You can declare a simple command.
For example, `/hello`:

```java 
@Command(name = "hello") // [!code focus]
public class HelloCommand {
    @Executor // [!code focus]
    void execute() {
        // /hello
    }
}
```

## Subcommands

It is also easy to create a command with subcommands. 
For example, `/time set <time>`, where `time` is an integer, and subcommands `/time set day` and `/time set night`:

```java
@Command(name = "time set") // [!code focus]
public class TimeSetCommand {
    @Executor // [!code focus]
    void execute(@Arg int time) {
        // /time set <time>
    }

    @Executor(name = "day") // [!code focus]
    void day() {
        // /time set day
    }

    @Executor(name = "night") // [!code focus]
    void night() {
        // /time set night
    }
}
```

::: info
To read more about the `@Arg` annotation, visit the [Arguments](../arguments/arg.md) section.
:::

Also you can create a command with subcommands in a different way.
For example, `/time add <time>`, `/time set <time>`, and `/time set day`:

```java
@Command(name = "time") // [!code focus]
public class TimeCommand {
    @Executor(name = "add") // [!code focus]
    void addTime(@Arg int time) {
        // /time add
    }

    @Executor(name = "set") // [!code focus]
    void setTime(@Arg int time) {
        // /time set
    }

    @Executor(name = "set day") // [!code focus]
    void setDay() {
        // /time set day
    }
}
```

Once you have defined your commands, you can <u>register</u> them in the LiteCommands builder:

```java
// LiteCommands builder
.commands(
    new HelloCommand(),
    new TimeSetCommand()
)
.build();
```

# Java Types

To use Java types like `int`, `double`, `Duration`, `BigInteger`, `Enum`, and more, you need to use the `@Arg` annotation and specify the type of the argument.

| Argument Type     | Values                                         | Example                                |
|-------------------|------------------------------------------------|----------------------------------------|
| `Boolean`         | `true`, `false`                                | `true`                                 |
| `Byte`            | `-128` - `127`                                 | `10`                                   |
| `Short`           | `-32768` - `32767`                             | `1000`                                 |
| `Integer`         | `-2147483648` - `2147483647`                   | `1000000000`                           |
| `Long`            | `-9223372036854775808` - `9223372036854775807` | `100000000000`                         |
| `Float`           | `0.0` - `3.4028235E38`                         | `10.5`                                 |
| `Double`          | `0.0` - `1.7976931348623157E308`               | `10.5`                                 |
| `String`          | Any string                                     | `text`                                 |
| `String` (Quoted) | Any string surrounded by quotes                | `"Hello World"`                        |
| `Enum`            | Any enum                                       | `WORLD`                                |
| `Duration`        | `Xd`, `Xh`, `Xm`, `Xs`, `Xms`                  | `10m`, `5d4h30m15s`                    |
| `Period`          | `1y`, `1mo`, `1w`, `1d`                        | `1y`, `12mo`, `1w`                     |
| `Instant`         | `yyyy-MM-dd HH:mm:ss`                          | `2021-01-01 00:00`                     |
| `LocalDateTime`   | `yyyy-MM-dd HH:mm:ss`                          | `2021-01-01 00:00`                     |
| `UUID`            | `xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx`         | `123e4567-e89b-12d3-a456-426614174000` |
| `BigInteger`      | Any number                                     | `100000000000`                         |
| `BigDecimal`      | Any number                                     | `100000000000.0`                       |
| `Char`            | Any character                                  | `a`                                    |

Here is an example of how to use the `@Arg` annotation with different types:

::: code-group

```java [int]
@Command(name = "time set")
public class TimeCommand {
    @Execute
    void time(@Arg int time) { // [!code focus]
        // /time set <time>
    }
}
```

```java [BigDecimal]
@Command(name = "balance set")
public class BalanceCommand {
    @Execute
    void balance(@Context SENDER sender, @Arg BigDecimal amount) { // [!code focus]
        // /balance set <amount>
    }
}
```

```java [Duration]
@Command(name = "ban")
public class BanCommand {
    @Execute
    void ban(@Arg Player player, @Arg Duration duration) { // [!code focus]
        // /ban <player> <duration>
    }
}
```

```java [BigInteger]
@Command(name = "give")
public class GiveCommand {
    @Execute
    void give(@Arg BigInteger amount) { // [!code focus]
        // /give <amount>
    }
}
```

```java [Enum]
@Command(name = "alert")
public class AlertCommand {
    @Execute
    void alert(@Arg AlertType type, @Join String message) { // [!code focus]
        // /alert <type> <message...>
    }
}

// AlertType.java
public enum Action {
    CHAT, ACTIONBAR, TITLE, SUBTITLE, BOSSBAR
}
```

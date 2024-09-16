# Supported Basic Argument Types

`@Arg` - Use Basic Types to easily validate, parse, and get arguments!

## Supported Types

LiteCommands supports multiple argument types. You can find all of them in the table below.

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

## Example:

::: code-group

```java [Boolean Argument]

@Execute(route = "boolean-arg")
public void executeBoolean(@Context SENDER sender, @Arg boolean value) {
    System.out.println(value);
}
```

```java [Int Argument]

@Execute(route = "int-arg")
public void executeInt(@Context SENDER sender, @Arg int value) {
    System.out.println(value);
}
```

```java [Double Argument]

@Execute(route = "double-arg")
public void executeDouble(@Context SENDER sender, @Arg double value) {
    System.out.println(value);
}
```

```java [Char Argument]

@Execute(route = "char-arg")
public void executeChar(@Context SENDER sender, @Arg char value) {
    System.out.println(value);
}
```

```java [BigInteger Argument]

@Execute(route = "bigInteger-arg")
public void executeBigInteger(@Context SENDER sender, @Arg BigInteger value) {
    System.out.println(value);
}
```

```java [Enum Argument]

@Execute(route = "enum-argument")
public void executeEnum(@Context SENDER sender, @Arg Bit bit) {
    System.out.println(bit);
}

enum Bit {
    ONE,
    TWO
}
```

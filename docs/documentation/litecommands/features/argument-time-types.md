# Supported Time Arguments Types 
#### @Arg - Use Time Types to get the argument from the command and convert it to the specified time type!

## List of Supported Time Types
LiteCommands supports the following time types:

| Supported Date/Time Types | Argument format            | Example input                                          |
|---------------------------|----------------------------|--------------------------------------------------------|
| Duration                  | `?y?mo?w?d?h?m?s?ms?us?ns` | `1s`, `1m`, `1h`, `1d`, `2d10h2m20s`, `1m30s`, `500ms` |
| Period                    | `?y?mo?w?d`                | `1y`, `1m`, `1d`, `2y10m2d`, `1m30d`, `1w`             |
| Instant                   | `yyyy-MM-dd HH:mm:ss`      | `2020-01-01 00:00:00`                                  |
| OffsetDateTime            | `yyyy-MM-dd HH:mm:ss xxx`  | `2020-01-01 00:00:00 +01:00`                           |
| OffsetTime                | `HH:mm:ss xxx`             | `00:00:00 +01:00`                                      |
| ZoneOffset                | `xxx`                      | `+01:00`                                               |
| ZonedDateTime             | `yyyy-MM-dd HH:mm:ss z`    | `2020-01-01 00:00:00 Europe/Paris`                     |
| ZoneId                    | `ZoneId`                   | `Europe/Paris`, `UTC`, `GMT+2`, `+02:00`               |
| LocalDateTime             | `yyyy-MM-dd HH:mm:ss`      | `2020-01-01 00:00:00`                                  |
| LocalDate                 | `yyyy-MM-dd`               | `2020-01-01`                                           |
| LocalTime                 | `HH:mm:ss`                 | `00:00:00`                                             |
| Year                      | `yyyy`                     | `2020`                                                 |
| YearMonth                 | `yyyy-MM`                  | `2020-01`                                              |
| MonthDay                  | `MM-dd`                    | `01-01`                                                |
| Month                     | enum value of `Month`      | `JANUARY`                                              |
| DayOfWeek                 | enum value of `DayOfWeek`  | `MONDAY`                                               |

Use `@Arg` to parse the argument as a time type.

## Example
For example, to parse the argument as a `Duration`, `Instant` and `Month`:
```java
@Route(name = "time")
public class Example {

    @Execute(route = "duration")
    void execute(@Arg Duration duration) {
        System.out.println(duration);
    }

    @Execute(route = "instant")
    void execute(@Arg Instant instant) {
        System.out.println(instant);
    }
    
    @Execute(route = "month")
    void execute(@Arg Month month) {
        System.out.println(month);
    }
    
}
```

Execute the command:


> **/time duration 1h**<br>
> PT1H

> **/time instant 2020-01-01 00:00:00**<br>
> 2020-01-01T00:00:00Z
    
> **/time month JANUARY**<br>
> JANUARY

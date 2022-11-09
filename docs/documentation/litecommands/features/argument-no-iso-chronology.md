
# Supported no-iso Chronologies and Date Types
#### @Arg - Use no-iso Chronologies and Date types to handle date formats for your specific culture!

LiteCommands supports other chronologies of time in arguments.
- Hijrah
- Minguo
- Thai-buddhist
- Japanese

You can use them by adding e.g. `@Arg ThaiBuddhistDate` for buddhist date.

```java

@Route(name = "buddhist-date")
public class Example {

    private final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("GGGG y-MM-dd")
            .withChronology(ThaiBuddhistChronology.INSTANCE);

    @Execute
    void execute(@Arg BuddhistDate date) {
        System.out.println(formatter.format(date));
    }
    
}
```

> **/buddhist-date BE 2564-01-01<br>**
> BE 2564-01-01

### List of supported chronologies classes

| Supported types  | Format            | Example            | Info                                                                                                    |
|------------------|-------------------|--------------------|---------------------------------------------------------------------------------------------------------|
| HijrahDate       | `GGGG yyyy-MM-dd` | `AH 1441-01-01`    | 
| HijrahEra        | `GGGG`            | `AH`               |                                                                                                         |
| MinguoDate       | `GGGG yyyy-MM-dd` | `R.O.C. 109-01-01` |                                                                                                         |
| MinguoEra        | `GGGG`            | `R.O.C.`           |                                                                                                         |
| ThaiBuddhistDate | `GGGG yyyy-MM-dd` | `BE 2563-01-01`    | Old format `B.E. 2563-01-01` on java 8 or less                                                          |
| ThaiBuddhistEra  | `GGGG`            | `BE`               | Old format `B.E.` on java 8 or less                                                                     |
| JapaneseDate     | _See Info ->_     | _See Info ->_      | <a href="argument-no-iso-chronology-japanese" class="docs-button-small">Japanese Chronology (click)</a> |
| JapaneseEra      | _See Info ->_     | _See Info ->_      | <a href="argument-no-iso-chronology-japanese" class="docs-button-small">Japanese Chronology (click)</a> |
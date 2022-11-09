# @Arg - Basic Argument Types

LiteCommands supports the following basic types of arguments:
You can use them by adding e.g. `@Arg int` for integer

| Supported Basic Types | Allowed input                                                         |
|-----------------------|-----------------------------------------------------------------------|
| String                | Any string                                                            |
| boolean               | `true`, `false`                                                       |
| Boolean               | `true`, `false`                                                       |
| long                  | `-9223372036854775808` - `9223372036854775807`                        |
| Long                  | `-9223372036854775808` - `9223372036854775807`                        |
| int                   | `-2147483648` - `2147483647`                                          |
| Integer               | `-2147483648` - `2147483647`                                          |
| short                 | `-32768` - `32767`                                                    |
| Short                 | `-32768` - `32767`                                                    |
| byte                  | `-128` - `127`                                                        |
| Byte                  | `-128` - `127`                                                        |
| double                | `4.9E-324` - `1.7976931348623157E308`, `NaN`, `Infinity`, `-Infinity` |
| Double                | `4.9E-324` - `1.7976931348623157E308`, `NaN`, `Infinity`, `-Infinity` |
| float                 | `1.4E-45` - `3.4028235E38`, `NaN`, `Infinity`, `-Infinity`            |
| Float                 | `1.4E-45` - `3.4028235E38`, `NaN`, `Infinity`, `-Infinity`            |
| char                  | `a` - `z`, `A` - `Z`, `0` - `9`                                       |
| Character             | `a` - `z`, `A` - `Z`, `0` - `9`                                       |
| BigInteger            | Any natural number                                                    |
| BigDecimal            | Any decimal number                                                    |
| Enum (any)            | Any value of corresponding enum                                       |

## Examples:

### Example 1: `boolean`, `int`, `double`, `char`, and `BigInteger` arguments

```java Example.java
@Route(name = "example")
public class Example {

    @Execute(route = "boolean-arg")
    public void executeBoolean(@Arg boolean value) {
        System.out.println(value);
    }
    
    @Execute(route = "int-arg")
    public void executeInt(@Arg int value) {
        System.out.println(value);
    }
    
    @Execute(route = "double-arg")
    public void executeDouble(@Arg double value) {
        System.out.println(value);
    }
    
    @Execute(route = "char-arg")
    public void executeChar(@Arg char value) {
        System.out.println(value);
    }
    
    @Execute(route = "bigInteger-arg")
    public void executeBigInteger(@Arg BigInteger value) {
        System.out.println(value);
    }
    
}
```

> **/example boolean-arg true<br>**
> true

> **/example int-arg 1<br>**
> 1

> **/example double-arg 1.5<br>**
> 1.5

> **/example char-arg a<br>**
> a

> **/example bigInteger-arg 9223372036854775807<br>**
> 9223372036854775807

### Example 2: Enum argument

```java <u>Bit.java</u>
enum Bit {
    ONE,
    TWO
}
```

```java <span class='file'>ExampleEnumCommand.java</span>
@Route(name = "example")
public class ExampleEnumCommand {
    @Execute
    public void execute(@Arg Bit bit) {
        System.out.println(bit);
    }
}
```

> **/example ONE<br>**
> ONE
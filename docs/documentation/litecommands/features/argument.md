# @Arg Annotation

`@Arg` annotation is used to get the argument from the command. It can be used only on method parameters.

For example, if you want to get the first, second and third argument from the command, you can use `@Arg` annotation to get them.

You can also use `@Arg` annotation to get the argument from the command and convert it to the specified type.<br> 
For example, if you want to get the first argument from the command and convert it to `int`, you can use `@Arg int` to get it.

## Example 1: Simple `String` argument

```java
@Route(name = "example")
public class Example {

    @Execute
    public void execute(@Arg String text) {
        System.out.println(text);
    }
    
}
```
> **/example Hello<br>**
> Hello

## Example 2: Two `int` arguments

```java
@Route(name = "example")
public class Example {

    @Execute
    public void execute(@Arg int a, @Arg int b) {
        System.out.println(a + b);
    }

}
```

> **/example 1 2<br>**
> 3

:::tip Tip - Other types of arguments
You can use `@Arg` annotation on method parameters with other types:
- [Argument Basic Types](/documentation/litecommands/features/argument-basic-types) <br>
- [Argument Time Types](/documentation/litecommands/features/argument-time-types) <br>
- [Argument Time Chronologies Types](/documentation/litecommands/features/argument-no-iso-chronology) <br>
:::
# @Arg Annotation

`@Arg` annotation is used to get the argument from the command. It can be used only on method parameters.
[argument.md](argument.md)
For example, if you want to get the first, second and third argument from the command, you can use `@Arg` annotation to get them.

You can also use `@Arg` annotation to get the argument from the command and convert it to the specified type.<br> 
For example, if you want to get the first argument from the command and convert it to `int`, you can use `@Arg int` to get it.

## Example 1: Simple `String` argument

```java
@Route(name = "example")
public class Example {# @Permission Annotation

    The `@Permission` annotation is used to specify the required permission node for a command in the LiteCommands command framework.

## Usage

    @Route(name = "heal", aliases = "h")
    @Permission("mygame.heal")
    public class HealCommand {

        typescript
        Copy code
        @Execute
        public void healSelf(Player player) {
            player.setHealth(20.0);
        }
    }

    swift
    Copy code

    In this example, the `@Permission` annotation is used to specify the required permission node for the `HealCommand` class. The permission node `mygame.heal` is required to execute the `healSelf` method.

    Note that the permission node can be a string value of any format, but it is recommended to follow a# @Permission Annotation

    The `@Permission` annotation is used to specify the required permission node for a command in the LiteCommands command framework.

## Usage

    @Route(name = "heal", aliases = "h")
    @Permission("mygame.heal")
    public class HealCommand {

        typescript
        Copy code
        @Execute
        public void healSelf(Player player) {
            player.setHealth(20.0);
        }
    }

    swift
    Copy code

    In this example, the `@Permission` annotation is used to specify the required permission node for the `HealCommand` class. The permission node `mygame.heal` is required to execute the `healSelf` method.

    Note that the permission node can be a string value of any format, but it is recommended to follow a

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
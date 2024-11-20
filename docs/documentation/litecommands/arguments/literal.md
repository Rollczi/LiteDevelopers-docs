# @Literal

To define static <mark>literal</mark> argument you need to use `@Literal` annotation.

::: tip What is literal argument?
This is another way to define structure of command, similarly to `@Execute(name = "subcommand")` but used after some arguments. 
:::

E.g. in case `/user <user> group set <group>` the `group set` will be considered as a literal argument.

```java
@Command(name = "user")
public class UserCommand {
    @Execute
    void group(@Arg Player user, @Literal("group set") String literal, @Arg Group group) { // [!code focus]
        // Command /user <user> group set <group>
    }

    @Execute
    void groupClear(@Arg Player user, @Literal("group clear") String literal) { // [!code focus]
        // Command /user <user> group clear
    }
}
```

Let's run first command:

<Console
scheme="/user <user> group set"
input="/user Rollczi group set VIP"
:variables="{user: 'Rollczi', literal: 'group set', group: 'VIP'}"
/>

## Literal aliases

To define more literals for the same path, you can set attribute with an array.

```java
@Command(name = "ban")
public class BanCommand {
    @Execute
    void groupClear(@Arg Player target, @Literal({"temp", "t"}) String literal, @Arg Duration time) { // [!code focus]
        // Command /ban <target> temp <reason...>
        // or command /ban <target> t <reason...>
    }
}
```

When we run it, then the `literal` parameter will have `"t"` value:

<Console
scheme="/ban <target> t <time>"
input="/ban Rollczi t 1d"
:variables="{target: 'Rollczi', literal: 't', time: 'Duration.ofDays(1)'}"
/>


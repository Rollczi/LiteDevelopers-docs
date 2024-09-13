# Adventure Usage Example

> [!CAUTION]
> Remember to replace `SENDER` with your sender type that corresponds to the platform you are using.    
> For example, if you are using Bukkit, you should replace `SENDER` with `CommandSender` or `Player`.

## Argument

For example, you can use the `Component` object as an argument in your command:

```java
@Execute(name = "tell")
void tell(@Context SENDER sender, @Arg SENDER target, @Join Component message) {
    target.sendMessage(message);
}
```

## Response

You can also use the `Component` object as a response:

```java
@Execute(name = "info")
Component info() {
    return Component.text("This is an example of the Component response.");
}
```

## Colorizer

Colorizer is a feature that allows you to colorize the `Component` object in the `@Arg` argument.

If you want to use the default colorizer, you need to enable it in the `LiteCommands` builder:

::: code-group


```java [Adventure]
.extension(new LiteAdventureExtension<SENDER>()
    .colorizeArgument(true)
)
```

```java [Adventure Platform]
.extension(new LiteAdventurePlatformExtension<SENDER>(this.audienceProvider)
    .colorizeArgument(true)
)
```
:::

You can force **enable** the colorizer for the specific argument:

```java
@Execute(name = "colorize")
void colorize(@Arg @Key("color") Component colorized) {
    // ...
}
```

And you can also force **disable** the colorizer:

```java
@Execute(name = "raw")
void raw(@Arg @Key("raw") Component notColorized) {
    // ...
}
```

## Serializer (Colorizer)

Serializer is used to colorize the `Component` object in the `@Arg` argument and the response.

You can modify the default serializer by using the `miniMessage()` and `legacyColor()` methods in the `LiteCommands` builder:

::: code-group

```java [Adventure]
.extension(new LiteAdventureExtension<SENDER>()
    .miniMessage(true)
    .legacyColor(true)
)
```


```java [Adventure Platform]
.extension(new LiteAdventurePlatformExtension<SENDER>(this.audienceProvider)
    .miniMessage(true)
    .legacyColor(true)
)
```
:::

The `miniMessage()` method enables the MiniMessage support. Read more about it [here](https://docs.advntr.dev/minimessage/).
The `legacyColor()` method enables the legacy color support. `&c`, `&a`, etc.


If you want to use the custom serializer, you need to set it in the `LiteCommands` builder:

::: code-group

```java [Adventure]
.extension(new LiteAdventureExtension<SENDER>()
    .serializer(this.miniMessage)
)
```

```java [Adventure Platform]
.extension(new LiteAdventurePlatformExtension<SENDER>(this.audienceProvider)
    .serializer(this.miniMessage)
)
```
:::
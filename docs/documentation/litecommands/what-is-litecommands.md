# What is LiteCommands?

![litecommands](/litecommands.png)

LiteCommands is a versatile and feature-rich command framework designed to simplify command handling for a wide range of platforms and implementations. Providing a simple and intuitive API, LiteCommands makes it easy to create and manage commands for your Minecraft plugin, mod, or Discord bot.

## Cross-Platform Integration

LiteCommands seamlessly integrates with various platforms, making it effortless to manage commands across different systems. Whether you're developing for Velocity, Bukkit, Paper, BungeeCord, Minestom, JDA, or any other platform, LiteCommands has you covered.

See the [Platforms](platforms.md) page for more information.

## More Clear Logic

LiteCommands offers a more intuitive and clear approach to handling commands when compared to traditional methods.

::: code-group

```java [LiteCommands]
@Command(name = "chat")
@Permission("command.chat")
public class ChatCommand {

    private final ChatManager chatManager = new ChatManager();

    @Execute(name = "on")
    void enableChat(@Context CommandSender sender) {
        this.chatManager.enableChat();
    }

    @Execute(name = "off")
    void disableChat(@Context CommandSender sender) {
        this.chatManager.disableChat();
    }

    @Execute(name = "clear")
    @Permission("command.chat.clear")
    void clearChat(@Context CommandSender sender, @Arg int lines) {
        this.chatManager.clearChat(lines);
    }

}
```

```java [Traditional - Bukkit]
public class BukkitWayCommand implements CommandExecutor {

    private final ChatManager chatManager = new ChatManager();

    @Override
    public boolean onCommand(CommandSender sender, Command cmd, String label, String[] args) {
        if (!sender.hasPermission("command.chat")) {
            sender.sendMessage(ChatColor.RED + "You do not have permission to use this command.");
            return true;
        }

        if (args.length == 0) {
            this.usage(sender);
            return true;
        }

        if (args[0].equalsIgnoreCase("on")) {
            this.chatManager.enableChat();
            return true;
        }

        if (args[0].equalsIgnoreCase("off")) {
            this.chatManager.disableChat();
            return true;
        }

        if (args.length == 2 && args[0].equalsIgnoreCase("clear")) {
            if (!sender.hasPermission("command.chat.clear")) {
                sender.sendMessage(ChatColor.RED + "You do not have permission to use this command.");
                return true;
            }

            try {
                int lines = Integer.parseInt(args[1]);
                this.chatManager.clearChat(lines);
            } catch (NumberFormatException exeption) {
                sender.sendMessage(ChatColor.RED + "Invalid argument: " + args[1] + " is not a number.");
            }

            return true;
        }

        this.usage(sender);
        return true;
    }

    private void usage(CommandSender sender) {
        sender.sendMessage(ChatColor.RED + "Usage:");
        sender.sendMessage(ChatColor.RED + " - /chat on");
        sender.sendMessage(ChatColor.RED + " - /chat off");
        sender.sendMessage(ChatColor.RED + " - /chat clear <lines>");
    }

}
```

:::

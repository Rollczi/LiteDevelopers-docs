# @Context - Custom context

LiteCommands provides a flexible way to define custom context providers using the `@Context` annotation. This feature
allows you to specify who or what is executing the command, enabling easier access to specific objects within your
command logic.

By default, LiteCommands has two built-in context providers for the Bukkit platform:

- `@Context CommandSender sender`
- `@Context Player player`

However, you can define your own custom context providers for objects such as `User`, `Account`, `Member`, or any other
relevant entity in your application. This approach eliminates the need to retrieve data from the `Player` object and
then use a service or manager method to determine the corresponding `User`, `Account`, or `Member` etc. object. Instead, you
can directly access the required object within your command, resulting in more concise and efficient code.

## Example Implementation

Here's an example of how to create a custom context provider for an `Account` object:

:::tip More Practical Example
This code is a simplified version of the code from the **EternalEconomy** Plugin.  
See the full code of the EternalEconomy Plugin on [GitHub](https://github.com/EternalCodeTeam/EternalEconomy).
:::

```java
// AccountContext.java
public class AccountContext implements ContextProvider<CommandSender, Account> {

    private final AccountManager accountManager;
    private final MessageConfig messageConfig;

    public AccountContext(AccountManager accountManager, MessageConfig messageConfig) {
        this.accountManager = accountManager;
        this.messageConfig = messageConfig;
    }

    @Override
    public ContextResult<Account> provide(Invocation<CommandSender> invocation) {
        if (invocation.sender() instanceof Player player) {
            return ContextResult.ok(() -> {
                Account account = this.accountManager.getAccount(player.getUniqueId());

                if (account == null) {
                    throw new IllegalStateException("account " + player.getName() + " not found");
                }

                return account;
            });
        }

        return ContextResult.error(this.messageConfig.invalidPlayer);
    }
}
```

```java
// ExampleCommand.java
@Command(name = "balance")
public class ExampleCommand {

    @Execute
    public void balance(@Context Player player, @Context Account account) {
        // Assuming Account has a method to get the balance
        double balance = account.getBalance();
        player.sendMessage(ChatUtil.color("&aYour current balance is: &7" + balance));
    }
}
```

In this example, the `AccountContext` class implements the `ContextProvider` interface, specifying `CommandSender` as
the sender type and `Account` as the context type. The context provider retrieves the `Account` object associated with
the player's unique ID using an `AccountManager`.

To register the custom context provider, you can use the `context` method in the LiteCommands builder:

```java
// YourPlugin.java
public class YourPlugin extends Plugin {

    private LiteCommands<CommandSender> liteCommands;

    @Override
    public void onEnable() {
        this.liteCommands = LiteBukkitFactory.builder(this)
                .commands(
                        new ExampleCommand()
                )
                .context(Account.class, new AccountContext(accountManager, messageConfig)) // [!code focus]
                .build();
    }

    @Override
    public void onDisable() {
        if (this.liteCommands != null) {
            this.liteCommands.unregister();
        }
    }
}
```

By registering the `AccountContext` using the `context` method, you can now use the `@Context Account account`
annotation in your command methods to directly access the player's `Account` object.

This example demonstrates how custom context providers in LiteCommands can simplify your command logic and improve code
readability by providing direct access to specific objects relevant to your application.
# Custom @Context

You can create custom context providers for objects like `User`, `Account`, `Member`, `Guild`, or `Party`, 
eliminating the need to first retrieve data from the Player object and then use a service or manager. 

## Boring theory

To do this, implement the `ContextProvider<SENDER, T>` interface and register it.
- `SENDER` is a platform-specific sender type. (see [What is SENDER?](../../platforms.md#what-is-sender))
- `T` is the context type you want to provide.

## Practical example with `Account`

<mark>Imagine</mark> you have an `Account` class with player data like balance, level, and experience.
With a context provider you can access the `Account` directly in command methods.

::: info In this example:
`SENDER` is platform-specific sender type `CommandSender` <br>
`T` is the context type `Account` <br>
:::

```java
// AccountContextProvider.java
public class AccountContextProvider implements ContextProvider<CommandSender, Account> {

    private final AccountManager accountManager;

    public AccountContext(AccountManager accountManager) {
        this.accountManager = accountManager;
    }

    @Override
    public ContextResult<Account> provide(Invocation<CommandSender> invocation) {
        if (!(invocation.sender() instanceof Player player)) {
            return ContextResult.error("&cOnly players can use this command!");
        }
        
        return ContextResult.ok(() -> {
            Account account = this.accountManager.getAccount(player.getName());
            if (account == null) {
                throw new IllegalStateException("&cAccount " + player.getName() + " not found");
            }

            return account;
        });
    }
}
```

Now we can create a `BalanceCommand` that access the sender's `Account`:

```java
// BalanceCommand.java
@Command(name = "balance")
public class BalanceCommand {
    @Execute
    void balance(
            @Context CommandSender sender,
            @Context Account account // [!code focus]
    ) {
        double balance = account.getBalance();
        sender.sendMessage("Your current balance is: " + balance);
    }
}
```
And finally, we can register the custom context provider in the LiteCommands builder:

```java
.commands(
    new AccountCommand() // [!code focus]
)
.context(Account.class, new AccountContextProvider(accountManager)) // [!code focus]
.build();
```

<Console
scheme="Run the command /balance"
input="/balance"
output="Your current balance is: 100.0"
/>

This example shows how custom context providers in LiteCommands simplify command logic and improve code readability by
providing direct access to relevant objects.

> [!IMPORTANT] Check out real examples!
> This code is a simplified version of the code from the **EternalEconomy** Plugin.  
> See the full code of the EternalEconomy Plugin on [GitHub](https://github.com/EternalCodeTeam/EternalEconomy).


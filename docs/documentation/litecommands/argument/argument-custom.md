# @Arg (Custom)

You can create a custom argument to replace use plain argument and make your code cleaner.

For example, replace `String` argument to `Account` argument.

### ❌ Executor Before

This code is okay, but we want to make it better.

```java
@Execute
void execute(@Context SENDER sender, @Arg String accountName) { // [!code focus]
    Account account = this.accountManager.getUser(accountName);

    if (account == null) {
        sender.sendMessage("OH NO, this account is null");
    }

    //... code
}
```

### ✅ Executor After

Let's create a custom argument `Account` to replace `String` argument!

```java
@Execute
void execute(@Context SENDER sender, @Arg Account account) {  // [!code focus]
    //... code
}
```

First, you need to create a custom argument resolver that extends `ArgumentResolver`:

```java
public class AccountArgument extends ArgumentResolver<CommandSender, Account> {

    @Override
    protected ParseResult<Account> parse(
            Invocation<CommandSender> invocation,
            Argument<Account> argument,
            String string
    ) {
        Account account = this.accountManager.getAccount(string);

        if (account == null) {
            return ParseResult.failure("Account not found :(");
        }

        return ParseResult.success(account);
    }

    @Override
    public SuggestionResult suggest(
            Invocation<CommandSender> invocation,
            Argument<Account> argument,
            SuggestionContext context
    ) {
        return Bukkit.getOnlinePlayers().stream()
            .map(player -> player.getName())
            .collect(SuggestionResult.collector());
    }
}
```

Then, register the custom argument resolver in the `LiteCommands` builder:

```java
.argument(Account.class, new AccountArgument(...))
```

That's it! Now you can use the `@Arg Account` argument in your commands!

> [!IMPORTANT] More Practical Example
> This code is a simplified version of the code from the **EternalEconomy** Plugin.  
> See the full code of the EternalEconomy Plugin on [GitHub](https://github.com/EternalCodeTeam/EternalEconomy).

Other examples of custom arguments can be found on [GitHub](https://github.com/Rollczi/LiteCommands/tree/master/examples/bukkit/src/main/java/dev/rollczi/example/bukkit/argument).
 
> [!INFO] Argument types built-in LiteCommands
> -   [Argument Basic Types](supported-types/supported-basic-types.md) 
> -   [Argument Minestom Types](supported-types/supported-types-minestom-extension.md) 
> -   [Argument Adventure Types](supported-types/supported-types-adventure-extension.md) 
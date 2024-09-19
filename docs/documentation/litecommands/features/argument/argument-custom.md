# @Arg Annotation - Custom Arguments

You can create a custom argument to replace use plain argument and make your code more clean.

For example, replace `String` argument to `Account` argument.

## ❌ Executor Before

```java

@Execute
void execute(@Context SENDER sender, @Arg String accountName) {
    Account account = this.accountService.getUser(accountName);

    if (account == null) {
        sender.sendMessage("OH NO, this account is null");
    }

    //... code
}
```

## ✅ Executor After

```java

@Execute
void execute(@Context SENDER sender, @Arg Account account) {
    //... code
}
```

### Create the custom argument and suggestions:

> [!IMPORTANT] 
> More Practical Example
> This code is a simplified version of the code from the **EternalEconomy** Plugin.  
> See the full code of the EternalEconomy Plugin on [GitHub](https://github.com/EternalCodeTeam/EternalEconomy).

```java
public class AccountArgument extends ArgumentResolver<CommandSender, Account> {

    // ...

    @Override
    protected ParseResult<Account> parse(
            Invocation<CommandSender> invocation,
            Argument<Account> argument,
            String string) {
        Account account = this.accountManager.getAccount(string);

        if (account == null) {
            return ParseResult.failure("account not found :(");
        }

        return ParseResult.success(account);
    }

    @Override
    public SuggestionResult suggest(
            Invocation<CommandSender> invocation,
            Argument<Account> argument,
            SuggestionContext context
    ) {
        return this.server.getOnlinePlayers().stream()
                .map(Player::getName)
                .collect(SuggestionResult.collector());
    }
}
```

### Register your argument in LiteCommands builder:

```java
.argument(Account.class, new AccountArgument(...))
```

Other examples of custom arguments can be found on [GitHub](https://github.com/Rollczi/LiteCommands/tree/master/examples/bukkit/src/main/java/dev/rollczi/example/bukkit/argument).
 
> [!IMPORTANT]
Argument types **built-in** LiteCommands!
> -   [Argument Basic Types](../types/supported-basic-types.md) 
> -   [Argument Minestom Types](../types/supported-types-minestom-extension.md) 
> -   [Argument Adventure Types](../types/supported-types-adventure-extension.md) 
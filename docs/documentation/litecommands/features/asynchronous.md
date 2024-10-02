# Asynchronous

With LiteCommands you can <mark>parse, suggest, and execute</mark> commands <mark>asynchronously</mark>.

## When to use it?

1. Database operations (SQL queries, MongoDB operations, etc.)
2. Network operations (HTTP requests (APIs), socket connections, etc.)
3. System IO operations (file saving/reading, etc.)
4. Long-running operations (rank calculation, etc.)

## How to use it?

1. **@Async** annotation - mark a command or argument with `@Async`
2. **CompletableFuture** - use the CompletableFuture API
3. **Async Result API** - (coming soon)

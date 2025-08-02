# Scheduler

LiteCommands is a highly concurrent environment. Code can be executed in <mark>many threads</mark> simultaneously.

Scheduler and [SchedulerPool](https://github.com/Rollczi/LiteCommands/blob/master/litecommands-core/src/dev/rollczi/litecommands/scheduler/SchedulerPoll.java)
 control how LiteCommands run code.

## How to change Scheduler

You can change a scheduler in LiteCommands builder:
```java
.scheduler(new YourScheduler())
```


## Default Schedulers for Platforms

| Platform        | Scheduler                                                                                                                                                                        |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Bukkit          | [BukkitSchedulerImpl](https://github.com/Rollczi/LiteCommands/blob/master/litecommands-bukkit/src/dev/rollczi/litecommands/bukkit/BukkitSchedulerImpl.java)                      |
| Velocity        | `default`                                                                                                                                                                        |
| BungeeCord      | `default`                                                                                                                                                                        |
| MineStom        | [MineStomScheduler](https://github.com/Rollczi/LiteCommands/blob/master/litecommands-minestom/src/dev/rollczi/litecommands/minestom/MinestomScheduler.java)                      |
| Fabric (server) | [FabricServerScheduler](https://github.com/Rollczi/LiteCommands/blob/master/litecommands-fabric/src/main/java/dev/rollczi/litecommands/fabric/server/FabricServerScheduler.java) |
| Fabric (client) | [FabricClientScheduler](https://github.com/Rollczi/LiteCommands/blob/master/litecommands-fabric/src/main/java/dev/rollczi/litecommands/fabric/client/FabricClientScheduler.java) |
| Sponge          | [SpongeScheduler](https://github.com/Rollczi/LiteCommands/blob/master/litecommands-sponge/src/dev/rollczi/litecommands/sponge/SpongeScheduler.java)                              |
| JDA             | `default`                                                                                                                                                                        |
| Folia           | [FoliaScheduler](https://github.com/Rollczi/LiteCommands/blob/master/litecommands-folia/src/dev/rollczi/litecommands/folia/FoliaScheduler.java)                                  |

`default` - [SchedulerExecutorPoolImpl](https://github.com/Rollczi/LiteCommands/blob/master/litecommands-core/src/dev/rollczi/litecommands/scheduler/SchedulerExecutorPoolImpl.java)
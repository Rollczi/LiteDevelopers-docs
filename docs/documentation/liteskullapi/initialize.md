# Initialize

A simple example of LiteSkullAPI initialization

```java
public class SkullPlugin extends JavaPlugin {
    
    private SkullAPI skullAPI;
    
    @Override
    public void onEnable() {
        this.skullAPI = LiteSkullFactory.builder()
                .bukkitScheduler(this)
                .build();
    }
    
    @Override
    public void onDisable() {
        this.skullAPI.shutdown();
    }
    
}
```

## Additional builder configuration

You can configure LiteSkullAPI according to your preferences.

### Basic options
```java
/* Set custom logger */
.logger(Logger)
        
/* Set default skull */
.defaultSkull(SkullData)
.defaultSkull(SkullDataDefault)
```
:::info
Default skull is used if LiteSkullAPI can't extract texture from database, player or rest api.
:::

### Concurrency

```java
// Set scheduler to execute synchronized tasks */
.scheduler(SynchronizedExecutor)
        
/* Set standard bukkit scheduler to execute synchronized tasks */
.bukkitScheduler(Plugin)
    
/* Set count of thread for asynchronous executor service */
.threadPool(int)
```


### Cache
LiteSkullAPI cache skulls to ensure efficiency. Changing these options may have an impact on updating skulls.
```java
/* Set expiration of skull cache after write */
.cacheExpireAfterWrite(Duration)
    
/* Set expiration of skull cache after access */
.cacheExpireAfterAccess(Duration)
```


### Database
LiteSkullAPI can save skulls automatically to your database.
```java
/* Set implementation of database for skull */
.database(SkullDatabase)
    
/* Set expiration of skull data after saving to database. */
.dataBaseSaveExpire(Duration)
```
:::info
To use this feature implement the SkullDatabase interface and set it in builder. 
```java
public class SkullDatabaseImpl implements SkullDatabase {
    // ...
}
```
:::


### Advanced
```java
/* Set custom api skull extractor */
.apiExtractor(SkullDataAPIExtractor)
    
/* Set custom skull online player extractor */
.playerExtractor(SkullDataPlayerExtractor)
    
/* Set custom skull item creator */
.creator(SkullCreator)
```
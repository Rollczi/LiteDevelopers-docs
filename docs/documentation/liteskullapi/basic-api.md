# Basic API

Get skull item stack

```java
skullAPI.acceptSyncSkull("Rollczi", itemStack -> {

});
```

Get skull signature and texture

```java
skullAPI.acceptAsyncSkullData("Rollczi", skullData -> {
    String signature = skullData.getSignature();
    String texture = skullData.getValue();
});
```

# Basic API

Get skull item stack

```java
skullAPI.acceptSkull("Rollczi", itemStack -> {

});
```

Get skull signature and texture

```java
skullAPI.acceptSkullData("Rollczi", skullData -> {
    String signature = skullData.getSignature();
    String texture = skullData.getValue();
});
```

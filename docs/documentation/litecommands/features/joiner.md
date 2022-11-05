# @Joiner annotation

- `@Joiner` annotation is used to join all arguments at the end of the command into a single string. This is useful when you want to allow the user to enter multiple words.

:::warning
`@Joiner` can be used only with `String` type.<br>
`@Joiner` must be the last argument if `limit` annotation parameter is not specified.<br>
:::

## Example 1: Simple joiner usage

```java
@Route(name = "example")
public class Example {
    
    @Execute
    public void execute(@Joiner String text) {
        System.out.println(text);
    }
    
}
```
> **/example Hello world<br>**
> Hello world

## Example 2: Joiner with **delimiter**

```java
@Route(name = "example")
public class Example {
    
    @Execute
    public void execute(@Joiner(delimiter = ",") String text) {
        System.out.println(text);
    }
    
}
```
> **/example Hello my world<br>**
> Hello,my,world

## Example 3: Joiner with **limit**

```java
@Route(name = "example")

public class Example {
    
    @Execute
    public void execute(@Joiner(limit = 2) String text) {
        System.out.println(text);
    }
    
}
```
> **/example Hello my world<br>**
> Hello my
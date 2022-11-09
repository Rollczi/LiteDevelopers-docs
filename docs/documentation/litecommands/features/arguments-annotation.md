# @Args Annotation

`@Args` annotation is used to get all arguments from the command.

:::w

### Example
```java
@Route(name = "example")
public class Example {

    @Execute
    public void execute(@Args String[] args) {
        System.out.println(args.length);
    }
    
}
```

or you can use `List<String>` instead of `String[]`

```java
@Route(name = "example")

public class Example {

    @Execute
    public void execute(@Args List<String> args) {
        System.out.println(args.size());
    }
    
}
```

> **/example Hello my world<br>**
> 3

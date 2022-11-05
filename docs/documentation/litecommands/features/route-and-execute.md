# @Route and @Execute

- `@Route` annotation is used to define a route for a command. The route is a string that is used to invoke the command.
- `@Execute` annotation is used to define the method that is executed when user/player invokes the command.

## Example 1: Simple command with `@Route` and `@Execute` annotations
To create command `/command`
```java
@Route(name = "command")
public class Command {
    
    @Execute
    void executedMethod() {
        // -> /command
    }
}
```

## Example 2: Route with subcommand
You can define a subcommand in many ways.<br>
#### Solution 1: Using `@Route` annotation
```java
@Route(name = "command")
public class Command {
    
    @Execute
    @Route(name = "subcommand")
    void subcommand() {
        // -> /command subcommand
    }
}
```
#### Solution 2: Using `@Execute` annotation with `route` parameter
```java
@Route(name = "command")
public class Command {
    
    @Execute(route = "subcommand")
    void subcommand() {
        // -> /command subcommand
    }
}
```
#### Solution 3: Add space between route of command and subcommand in `@Route` annotation
```java
@Route(name = "command subcommand")
public class Command {
    
    @Execute
    void subcommand() {
        // -> /command subcommand
    }
}
```
**Solution 4 ->** Use `@Route` annotation on inner class
```java
@Route(name = "command")
public class Command {
    
    @Execute
    void command() {
        // -> /command
    }
    
    @Route(name = "subcommand")
    public class Subcommand {
        
        @Execute
        void subcommand() {
            // -> /command subcommand
        }
    }
}
```

## Example 3: Advanced command with `@Route` and `@Execute` annotations
```java
@Route(name = "command suffix")
public class Command {

    @Execute
    void command() {
        // -> /command suffix
    }

    @Execute(route = "sub")
    void sub() {
        // -> /command suffix sub
    }
    
    @Route(name = "subcommand")
    static class Subcommand {
        
        @Execute
        void subcommand() {
            // -> /command suffix subcommand
        }

        @Execute(route = "sub")
        void sub() {
            // -> /command suffix subcommand sub
        }
    }
}
```
# @RootRoute
This annotation is used to define various commands in one class.<br>
Helpful if multiple commands have common goals in same domain (for example, when 3 commands use one service/manager).

## Simple example
To create command `/command`
```java
@RootRoute
public class MessageCommands {
    
    @Execute(route = "msg")
    void executedMethod() {
        // -> /msg
    }

    @Execute(route = "reply", aliases = {"r"})
    void executedMethod() {
        // -> /reply or /r
    }
}
```

## Advanced example
```java
@RootRoute
public class MessageCommands {

    @Execute(route = "msg")
    void executedMethod() {
        // -> /msg
    }

    @Execute(route = "reply", aliases = {"r"})
    void executedMethod() {
        // -> /reply or /r
    }
    
    @Execute(route = "chat info")
    void chatInfo() {
        // -> /chat info
    }
    
    @Route(name = "spy")
    static class SpyCommands {
        
        @Execute
        void spySwitch() {
            // -> /spy
        }

        @Execute(route = "off")
        void spyOff() {
            // -> /spy off
        }
        
        @Execute(route = "on")
        void spyOn() {
            // -> /spy on
        }
    }
}
```
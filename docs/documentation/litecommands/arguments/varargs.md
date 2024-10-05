# @Varargs

If you want to define an argument that can accept <mark>list of values</mark>, you can use the `@Varargs` annotation.

Supported collection types:

| Collection Type | Supported Types                                                             |
|-----------------|-----------------------------------------------------------------------------|
| array           | `T[]`, `T...`                                                               |
| list            | `List<T>`, `ArrayList<T>`, `LinkedList<T>`                                  |
| set             | `Set<T>`, `HashSet<T>`, `LinkedHashSet<T>`, `NavigableSet<T>`, `TreeSet<T>` |
| queue           | `Queue<T>`, `Deque<T>`, `ArrayDeque<T>`, `PriorityQueue<T>`                 |
| vector          | `Vector<T>`, `Stack<T>`                                                     |
| -               | `Collection<T>`                                                             |

## Example

For example, you can create a command that gets a list of players and checks their health:

```java
@Command(name = "check-health")
public class CheckHealthCommand {
    @Execute
    void checkHealth(@Context CommandSender sender, @Varargs Player... players) { // [!code focus]
        for (Player player : players) {
            double health = player.getHealth();
            sender.sendMessage(player.getName() + " has " + health + " health");
        }
    }
}
```
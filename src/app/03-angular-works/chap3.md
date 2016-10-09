# Chapter 3 / Angular Works

Angular 2 is composable - we can build up components from smaller ones.

To interpolate varibles:
{{ variable }} 

expression can be executed as well:
{{ varible + 1 }}
{{ function(arguments) }}

### Inputs / Outputs

The [squareBrackets] pass inputs and the (parenthesis) handle outputs

Inputs: pass info to the components
Outputs: send out data from a component

$event is a special variable here that represents the thing emitted on the output

EventEmitter is an object that helps you implement the Observer Pattern

```
let ee = new EventEmitter();
    ee.subscribe((name: string) => console.log(`Hello ${name}`));
    ee.emit("Nate");
```

When we assign an EventEmitter to an output Angular Automatically subscribes for us

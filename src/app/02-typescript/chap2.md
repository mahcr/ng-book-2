# Chapter 2 / Typescript

TypeScript isn’t a completely new language, it’s a superset of ES6. If we write ES6 code, it’s perfectly
valid and compilable TypeScript code.

### Types

Benefits
* helps writting better code, prevent bugs at compile time
* helps reading code

Types:
* string
* number
* array<string>, type[]
* enums
* void
* any

### Classes and Properties

ex.

```
class Vehicle {
  public tires: number;

  getTires() :number {
    return this.tires;
  }
}
```

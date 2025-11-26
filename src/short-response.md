# Section 2 — Short Response

Write your responses directly in this file. Follow markdown formatting guidelines. Check the rubric.md file to see how your short responses will be graded.

As a quick guide, check the following before submitting:

- [] Answered all parts of every question
- [] No typos or grammar mistakes (use grammarly!)
- [] Accurately uses relevant technical terminology
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Responses are concise and easy to comprehend

---

## Question 1

In your own words, explain what does _encapsulation_ refer to? Why is this concept beneficial when programming?

Provide a code snippet to illustrate _encapsulation_.

## Response 1

**Encapsulation** refers to when a class keeps its data and functions together and hides the important stuff so you can't mess with it directly. The use of private fields inside the object makes it so that it is protected, and so you can only make changes through the methods the class gives you.

### Syntax example

```js
class Player {
  #health = 100; // private field

  healPlayer(amount) {
    if (this.#health <= 100) {
      this.#health += amount;
      return `Health is now at ${this.#health}`;
    } else {
      return `Health is already at max!`;
    }
  }
}
```

In my example `health` is the private field in a `Player` class showcasing a video game style example. `health` is made a private field utilizing the `#`, which means that you wont be able to touch it directly and have to go through with the `healPlayer()` **method** instead.

This concept is useful when programming because sometimes you don't want certain features to be publicly changed whenever the user feels like it. For example, in video games, you're not supposed to just heal your health out of nowhere, you have to use an item to heal, and the game changes your health through a method. In other words, it's helpful because it keeps certain data or features hidden so people can't just go in and change them on their own.

--

## Question 2

Explain what the `this` keyword is. Why is the `this` keyword useful?

In the code snippet below, what does `this` refer to?

```js
class Counter {
  constructor() {
    this.count = 0;
  }
  increment() {
    this.count++;
  }
}

const counterA = new Counter();
const counterB = new Counter();

counterA.increment();
counterA.increment();
counterA.increment();

counterB.increment();

console.log(counterA.count);
console.log(counterB.count);
```

## Response 2

For context, the `this` keyword refers to the object that the method is called on. In the provided code snippet example above, the `this` keyword would be referring to the instance of the `Counter` class that is being assigned to `counterA` &`counterB`.

### Syntax highlight

```js
const counterA = new Counter();
const counterB = new Counter();

counterA.increment();
counterB.increment();
```

We can then see both new object instances being declared with the `new` operator, and when the `increment()` method is being called on it utilizing **dot notation**, `this` refers to the object where the call was made, basically stating `this` = `counterA` or `this` = `counterB`.

---

## Question 3

In your own words, explain what **polymorphism** means in OOP. Provide an example in code that demonstrates polymorphism.

## Response 3

**Polymorphism** is when different classes follow the same **interface**, meaning they have the same method names, but each class does its own thing. You can call the same method on different objects, and they’ll all respond in their own way while still following that shared interface for multiple data types.

### Syntax example

```js
class Car {
  constructor(brand, year, color) {
    this.brand = brand;
    this.year = year;
    this.color = color;
  }

  start() {
    return `${this.brand} engine is starting`;
  }
}

class ElectricCar extends Car {
  constructor(brand, year, color) {
    super(brand, year, color);
  }

  start() {
    return `${this.brand} motor is starting`;
  }
}
```

This demonstrates polymorphism because we are using the same `start()` interface in both classes, yet we are changing the instructions for each class and returning different data.

---

## Question 4

You're building a game where players can raise different digital pets: Cats, Dogs, and Birds. All pets have have a `name`, `energy` level, and `happiness` level and can all `sleep`. Cats have the ability to `hunt`, dogs have the ability to `chase`, and birds have the ability to `fly`.

**Part A:** Describe in words how you would use inheritance to organize these classes.

**Part B:** Explain one advantage of using inheritance here instead of creating three completely separate classes.

## Response 4

I would use inhertance to organize these **classes** by firstly setting the **properties** to common behaviors or necessities that a pet has. Then I would make seperate subclasses from the `Pet` **parent class** `Cats`, `Dogs`, and `Birds`. Each **subclass** will also include their unique abilities. I would use **inheritance** through the `super()` keyword in order to invoke the parentclasse's properties.

One advantage of using inheritance here instead of creating three separate classes is that it will prevent me from having to repeat the same lines of code for all three classes that derive from the `Pet` class.

### Syntax example

```js
class Pet {
  constructor(name, energy, happiness) {
    this.name = name;
    this.energy = energy;
    this.happiness = happiness;
  }
}
class Cat extends Pet {
  constructor(name, energy, happiness, hunt) {
    super(name, energy, happiness);
    this.hunt = hunt;
  }
}

class Dog extends Pet {
  constructor(name, energy, happiness, chase) {
    super(name, energy, happiness);
    this.chase = chase;
  }
}

class Bird extends Pet {
  constructor(name, energy, happiness, fly) {
    super(name, energy, happiness);
    this.fly = fly;
  }
}
```

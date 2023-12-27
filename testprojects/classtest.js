class Game {}

class Player {
    constructor(name) {
        this.name = name;
        this.speed = 10;
    }
}
class Hero extends Player {
    constructor(name, heroName) {
        super(name);
        this.heroName = heroName;
        this.speed = (this.speed * 1.1);
    }
}
class SuperHero extends Hero {
    constructor(name, heroName) {
        super(name, heroName);
        this.speed = (this.speed * 1.2);
    }
}

class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal{
    bark() {
        console.log("Woof!");
    }
    run() {}
} 

class Bird extends Animal{
    speak() {
        console.log("Hello!");
    }
    fly() {}
}










const Kevin = new Player("Kevin");
console.log(Kevin.speed);
const Matt = new Hero("Matthew", "Mansa");
console.log(Matt.speed);
const Mom = new SuperHero("Sonja", "Mom");
console.log(Mom.speed);
const hour = new Date().getHours() % 12;
const mins = new Date().getMinutes();
console.log(hour + ":" + mins);

console.log(Matt.heroName);
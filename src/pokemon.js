class Pokemon {
  static allPokemon = [];

  #health = 100;

  #level = 1;

  constructor(name, type) {
    this.name = name;
    this.type = type;

    Pokemon.allPokemon.push(this);
  }

  get health() {
    return this.#health;
  }

  get level() {
    return this.#level;
  }

  getHealth() {
    return this.#health;
  }

  getLevel() {
    return this.#level;
  }

  levelUp() {
    this.#level++;
    this.#health += 10;
    console.log(`${this.name} leveled up to level ${this.#level}!`);
  }

  isFainted() {
    if (this.#health <= 0) {
      return true;
    }
    return false;
  }

  attack(targetPokemon) {
    const attackDmg = 10 * this.#level;
    targetPokemon.#health -= attackDmg;

    if (targetPokemon.#health < 0) {
      targetPokemon.#health = 0;
    }
    console.log(`${this.name} attacked ${targetPokemon.name}`);
  }

  static getTotalPokemon() {
    return Pokemon.allPokemon.length;
  }

  static findByName(name) {
    return Pokemon.allPokemon.find((pokemons) => pokemons.name === name);
  }
}

// TEST YOUR CODE HERE

// DO NOT REMOVE
module.exports = { Pokemon };

const charizard = new Pokemon('Charizard', 'Fire');
const squirtle = new Pokemon('Squirtle', 'Water');

// 1. Checking instance properties
console.log(charizard); // Pokemon { name: "Charizard", type: "Fire" }
console.log(squirtle); // Pokemon { name: "Squirtle", type: "Water" }

// 2. Leveling up a Pokemon
squirtle.levelUp(); // Squirtle leveled up to level 2!
squirtle.levelUp(); // Squirtle leveled up to level 3!
squirtle.levelUp(); // Squirtle leveled up to level 4!

// 3. Checking the level
console.log(squirtle.getLevel()); // 2
// OR if you use the get syntax
console.log(squirtle.level); // 2

// 4. Checking on health
console.log(squirtle.getHealth()); // Should be 100
// OR if you use the get syntax
console.log(squirtle.health); // Should be 100

// 5. Attacking until one faints: Fixed version
while (!charizard.isFainted()) {
  squirtle.attack(charizard);
}
console.log(charizard.isFainted()); // Should print true
console.log('Charizard fainted!');

// 6. Finding a Pokemon instance
console.log(Pokemon.findByName('Charizard')); // Pokemon { name: "Charizard", type: "Fire" }

// 7. Viewing count of all Pokemon
console.log('Total Pokemon:', Pokemon.getTotalPokemon()); // 2

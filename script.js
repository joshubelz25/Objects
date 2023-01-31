'use strict';

console.log("Hello World");

document.write('<h1>Objects</h1>');

const flash = {
    species: "human",
    color: "red",
    outfit: "FAST",
    name: "Flash",
    speed: function(){
        return(" This person is a " + this.species + " His main scheme is " + this.color + " The main thing he does is " + this.outfit + " and his name is the " + this.name)
    }
}

console.log(flash.species);
console.log(flash.color);
console.log(flash.outfit);
console.log(flash.name);

document.write('<h1>',flash.speed(),'</h1>');

function Cereal (kindof, taste, crunch, sizefbowl){
    this.kindof = kindof;
    this.taste = taste;
    this.crunch = crunch;
    this.sizefbowl = sizefbowl;
}

Cereal.prototype.adding = "Chopped up Reeses"
Cereal.prototype.string = function() {
    return " I like " + this.kindof + " it kinda " + this.taste + " Good with its good nice " + this.crunch + " crunch, but it makes it better in the " + this.sizefbowl
}

const mycereal = new Cereal(" Reeses Puffs ", "Good", "Medium", "Large");

console.log(mycereal)
console.log(mycereal, Cereal.prototype.adding);
console.log(mycereal, Cereal.prototype.string());
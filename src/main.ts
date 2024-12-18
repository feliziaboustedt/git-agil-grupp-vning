const numbers = [2,5,7,9,24]; 

console.log(numbers.map((number) => number*10));

console.log(numbers);

class Person{

  constructor(public name:string, public age:string){
  
  }
}

const elin = new Person("Elin", "29 år"); 
const malin = new Person("Malin", "34 år"); 
const felizia = new Person ("Felizia", "30 år"); 

const friends = [elin, malin, felizia]; 

console.log(friends); 
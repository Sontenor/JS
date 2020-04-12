//Задача 1

"use strict"

let string1 = 'Ytube';

let string2 = 'ou';

let sliceString = `Y${string2}Tube`;

console.log(sliceString);

//Задача 2

let numbers = [25, 1];

let project = 'проект';

let team = 'команда';

let howMuch = 'Сколько';

let str = 'нужно программистов чтобы сделать проект ?';

let sentence = `${howMuch} ${str}. Ч${str.slice(21,33)} ${numbers[1]} ${str.slice(34,40)} ${str.slice(0,6)} ${numbers[0]} ${str.slice(6,20)}!`;

console.log(sentence) ;


//Задача 3

function fizzBuzz(a=0){
	if (a%3==0 && a%5==0)
		 return "FizzBuzz"
	else if(a%3==0)
	  return "Fizz"
	else if(a%5==0)
	  return "Buzz"
	return a
}

//Задача 4

function userName(name = "Дима", age = 32) {
	
	return {
			 name,
			 age,
		}
  
  }
  userName();

//Задача 5

function userName(name="Дима".toUpperCase()){

	return {
		 name,
	}

}

userName();

//Задача 6


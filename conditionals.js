const raining = true;
const cold = false;
const temperature = 15;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

// temperature has to be < 0 for the program to tell us to pick a scarf.
// temperature have to be >=15 for the program to tell us short sleeves are OK.



const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
} 

/*
Here we're checking that both conditions: 
isCitizen
age > 18 
are true for the if statement overall to evaluate to true.
If any of our two conditions are false, then the whole expression is false.
*/

 

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
} 
// Here our if statement is true when temperature is either below -40 or above 40 degrees.


if (!raining) {
  console.log("Leave your umbrella at home!");
}

/* We read the expression in the above example usually as "if not raining", 
but it's not always intuitive what "not true" or "not false" mean unless you remember that the ! operator reverses the value of raining. 
That is, if raining is true, !raining is false. 
If raining is false, !raining is true.
*/
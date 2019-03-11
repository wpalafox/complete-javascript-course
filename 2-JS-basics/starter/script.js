/*
CODING CHALLENGE 1



Mark and John are trying to compare their BMI (Body Mass Index), 
which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/ 

/*
const mark_height = 1.87; 
const john_height = 1.85; 
let mark_weight_kg = 70;
let john_weight_kg = 79;


const mark_BMI = mark_weight_kg / (mark_height)^2 
const john_BMI = john_weight_kg / (john_height)^2 
console.log(mark_BMI, john_BMI)
// Logical operators
//var johnOlder = ageJohn < ageMark;
//console.log(johnOlder);


var markBMIHigher = mark_BMI > john_BMI;  

console.log("Is Mark's BMI higher than John's? "+markBMIHigher)
*/

/*
CODING CHALLENGE 2



John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. 
Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. 
If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/


const john_game_1 = 89; 
const john_game_2 = 120;
const john_game_3 = 103; 

const mike_game_1 = 116; 
const mike_game_2 = 94;
const mike_game_3 = 123;

let avg_score_john = (john_game_1+john_game_2+john_game_3)/3
let avg_score_mike = (mike_game_1+mike_game_2+mike_game_3)/3

console.log("John's average score: "+avg_score_john)
console.log("Mike's average score: "+avg_score_mike)


if (avg_score_john > avg_score_mike) {
	
	console.log("John's average score is higher!")

}else if(avg_score_john < avg_score_mike){ 
	
	console.log("Mike's average score is higher!")

}else{
	
	console.log("Average scores are tied!")

}



















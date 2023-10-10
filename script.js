//find a Palidrome number
// let string = prompt("Please enter the string");
// let stringArray = string.split('');

// let stringArrayRev = stringArray.reverse();
// let revString = stringArrayRev.join('');

// if(string === revString){
//     console.log(`${string}: Is Palidrome`);
// }else{
//     console.log(`${string}: Is  not Palidrome`);

// }

//find a Palindrome number with loop

//  let string = prompt("Please enter the string");
//  let len = string.length;
//  let msg = "It is a Palindrome";

//  for(var i= 0; len/2; i++){
//     if(string[i] != string[len - 1- i]){
//          msg = "It is a Palindrome";
        
//     }
// }
//     console.log(`${string}: ${msg}`);

// Check the Number of Occurance of a character in a string using for Loop

let string = prompt("Please enter the string");
let letter = prompt("Please enter the letter");

let strLen = string.length;
for(var i = 0; i < string ; i++){
    if(string[i] == letter){
        counter++;
    }
}
console.log(`${string} => ${letter} =>${counter}`);

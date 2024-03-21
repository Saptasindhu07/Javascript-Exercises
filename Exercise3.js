//Write a JavaScript program to compute the sum of all digits that occur in a given string.

let user_input_2=prompt("Enter the String: ")
let sum_2=0
for (let i of user_input_2){
    if(Number(i)/2){
        sum_2=sum_2+Number(i)
    }
    else{
        
    }
}
console.log("Sum is ",sum_2)
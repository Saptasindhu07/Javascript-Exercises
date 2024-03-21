//  Write a JavaScript program to divide an integer by another integer as long as the result is an integer and return the result.

let input_=+prompt("Enter the Dividend")
let input_divisor=+prompt("Enter the divisor")
let result_=0
while(true){
    let check_=input_%input_divisor
    if(check_!=0){
        break
    }
    else{
        input_=(input_)/input_divisor
    }
    
}
console.log("Result is ",input_)
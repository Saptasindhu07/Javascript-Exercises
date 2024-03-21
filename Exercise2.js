//Write a JavaScript program to change the
//capitalization of all letters in a given string

let string_input=prompt("Enter String: ")
let array2=[]
for(let i in string_input){
    let Uppercase=string_input.toUpperCase()
    if(Uppercase[i]==string_input[i]){
        array2.push(string_input[i].toLowerCase())
    }
    else{
        array2.push(string_input[i].toUpperCase())
    }
}
changed_string=""
for(let i of array2){
    changed_string=changed_string+i
}
console.log("The Required output is "+changed_string)

//Write a JavaScript program to swap pairs of adjacent digits of a given integer of even length. 


let user_input=prompt("Enter even numbered digit: ")
let new_array=[]
for(let i of user_input){
    new_array.push(i)
}
let count=0
while (count+1<user_input.length){
    let copy=new_array[count]
    new_array[count]=new_array[count+1]
    new_array[count+1]=copy
    count=count+1
}
new_string=""
for(let i of new_array){
    new_string=new_string+i
}
console.log(`The required output is ${new_string}`)
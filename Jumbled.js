//Write a JavaScript program to check whether it is possible to rearrange characters of a given string in such way that it will become equal to another given string.

let array1_=[]
let array2_=[]
let input_jumbled=prompt("Enter String:")
let input_target_jumbled=prompt("Enter Target String")
for(let i of input_jumbled){
    array1_.push(i)
}
for(let i of input_target_jumbled){
    array2_.push(i)
}
console.log(array1_,array2_)
let x=0
while(true){
    let count_=0
    let compare=array1_[x]
    for(let i of array2_){
        if(i==compare){
            count_=count_+1
        }
    }
    if(count_==0){
        break
    }
    x=x+1
    if(x=(array1_.length)-1){
        break
    }

}
if(x==(array1_.length)-1){
    console.log("Rearrangement Possible")
}
else{
    console.log("Rearrangement Not Possible")
}
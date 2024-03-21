//Program to find K'th Largest Number from An Array

let array_greatest=[]
while(true){
let input_greatest=+prompt("Enter Number")
array_greatest.push(input_greatest)
let _decision_=prompt("More?")
if (_decision_=="No"||_decision_=="no"){
    break
}
}
let target_=+prompt("Enter target: ")
console.log(array_greatest)
let integer_k=1
let start=0
while(true){
    start=array_greatest[0]
    for(let i of array_greatest){
        if (i>start){
            start=i
        }
    }
    if(integer_k==target_){
        break
    }
    else{
        for(let i in array_greatest){
            if(array_greatest[i]==start){
                array_greatest[i]=0
            }
        }
    }
    integer_k=integer_k+1
}
console.log(start)

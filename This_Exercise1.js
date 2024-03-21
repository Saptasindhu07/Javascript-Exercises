function method1(){
    let total_marks=(+this.English)+(+this.Maths)+(+this.Science)
    let array_new=[(+this.English),(+this.Maths),(+this.Science)]
    let max_=array_new[0]
    for(let i of array_new){
        if(i>max_){
            max_=i
        }
    }
    console.log("Your Total Marks is ",total_marks)
    console.log("Your Highest Marks is ",max_)
}
let student_details={}
let count1=1
while(true){
    let message="Enter Name of Person"+count1
    let name_=prompt(message)
    let English_=prompt("Enter Your English Marks:")
    let Maths_=prompt("Enter your Maths marks ")
    let Science_=prompt("Enter Science Marks ")
    student_details[name_]={
        English:English_,
        Maths:Maths_,
        Science:Science_,
        target_mathod:method1
    }
    let decision_new=prompt("More Inputs?")
    if(decision_new=="no"|| decision_new=="No"){
        break;
    }
    count1=count1+1
}
console.log(student_details)

while (true){
    let access_name=prompt("Enter Name of person for details ")
    student_details[access_name].target_mathod()
    let decision_new_2=prompt("Continue?")
    if(decision_new_2=="No"){
        break
    }
}
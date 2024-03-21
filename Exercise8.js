let exam_result={}
while(true){
let object_name=prompt("Please Enter Your Name: ")
let object_marks_English=+prompt("Please Enter Your English Marks:")
let object_marks_Maths=+prompt("Please enter Your Maths Marks: ")
let object_marks_Chemistry=+prompt("Please enter Chemistry Marks: ")
exam_result[object_name]={
    "English": object_marks_English,
    "Maths": object_marks_Maths,
    "Chemistry": object_marks_Chemistry,
    "average": (object_marks_Chemistry+object_marks_English+object_marks_Maths)/3
}
    let decision_=prompt("More Inputs?:")
    if(decision_=="No"||decision_=="no"){
        break
    }
}
console.log(exam_result)
for(let i in exam_result){
    let temp_comparison=exam_result[i]["average"]
    if(temp_comparison>80){
        console.log(i," has got A+")
    }
    else if(temp_comparison>60){
        console.log(i," has got B+")
    }
    else if(temp_comparison>40){
        console.log(i," has got C+")
    }
    else{
        console.log(temp_comparison," has Failed")
    }
}
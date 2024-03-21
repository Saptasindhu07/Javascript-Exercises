let object_methods={
    student_total_marks: function(){
    console.log(+this.english_marks+ +this.maths_marks+ +this.science_marks)
}
}
function create_student_data(english_marks,maths_marks,science_marks){
    let temp_student_data={}
    temp_student_data.english_marks=+english_marks
    temp_student_data.maths_marks=+maths_marks
    temp_student_data.science_marks=+science_marks
    return temp_student_data
}
let count=1
let temp_student_data_2={}
while(true){
    let english_marks_=+prompt("Enter English Marks:")
    let maths_marks_=+prompt("Enter maths marks")
    let science_marks_=+prompt("Enter Science marks")
    temp_student_data_2["user"+count]=create_student_data(english_marks_,maths_marks_,science_marks_)
    let decision_box=prompt("More?")
    count=count+1
    if(decision_box=="No"||decision_box=="no"){
        break;
    }
}
console.log(temp_student_data_2)
let required= prompt("Enter Info To Access")
object_methods.student_total_marks.call(temp_student_data_2[required])
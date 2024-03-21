let result_methods={
    average: function(){
        console.log("Average Marks is ",(this.English+this.Maths+this.Science)/3)
    },
    gradingEnglish: function(){
        if(this.English>60){
            console.log("Grade A")
        }
        else{
            console.log("Grade B")
        }
    },
    gradingMaths: function(){
        if(this.Maths>60){
            console.log("Grade A")
        }
        else{
            console.log("Grade B")
        }
    },
    gradingScience: function(){
        if(this.Science>60){
            console.log("Grade A")
        }
        else{
            console.log("Grade B")
        }
    }
}
let result={}   
while(true){
    let student_name=prompt("Enter Student Name ")
    let english_marks=+prompt("English Marks")
    let maths_marks=+prompt("Enter Maths Marks")
    let science_marks=+prompt("Enter Science Marks ")
    result[student_name]={
        English:english_marks,
        Maths:maths_marks,
        Science:science_marks
    }
    let decision_box_2=prompt("More ?")
    if(decision_box_2=="no"||decision_box_2=="No"){
        break
    }
}
console.log(result)
let student_name_check=prompt("Enter Student Name to check")
let subject_check=prompt("Enter Subject grading grade u want")
console.log(result_methods.gradingEnglish.call(result.student_name_check))
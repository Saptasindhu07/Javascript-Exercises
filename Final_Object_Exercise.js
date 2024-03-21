
function Create_Result(English,Maths,Science){
    this.English=English
    this.Maths=Maths
    this.Science=Science
}
Create_Result.prototype={
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
    result[student_name]=new Create_Result(english_marks,maths_marks,science_marks)
    let decision_box_2=prompt("More ?")
    if(decision_box_2=="no"||decision_box_2=="No"){
        break
    }
}
console.log(result)

result.Sapta.gradingEnglish()
result.Sapta.gradingMaths()
result.Sapta.gradingScience()
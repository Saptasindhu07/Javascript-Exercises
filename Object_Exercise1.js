//Write a JavaScript program to list the properties of a JavaScript object.

function Method_Employee_Details(){
    console.log(`Employee Name is ${this.Employee_Name_}, Salary is ${this.Employee_Salary_} and Position is ${this.Employee_Position_}`)
}
let Employee_Details={}
while(true){
    let Employee_Name=prompt("Please Enter Your Name")
    let Employee_Salary=+prompt("Please Enter Salary")
    let Employee_Position=prompt("Please Enter your Position")
    Employee_Details[Employee_Name]={
        Employee_Name_:Employee_Name,
        Employee_Salary_:Employee_Salary,
        Employee_Position_:Employee_Position
    }
    let decision_new=prompt("MORE?")
    if(decision_new=="No"||decision_new=="no"){
        break
    }
}
for(let i in Employee_Details){
    Method_Employee_Details.call(Employee_Details[i])
}
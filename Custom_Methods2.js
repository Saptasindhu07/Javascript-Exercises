function check_adult(){
    if(this.age>18){
        console.log("Adult")
    }
    else{
        console.log("Minor")
    }
}
let sample_data={}
let i=1
while(i<=4){
    let name_=prompt("Enter Name pls")
    let age_=prompt("Enter age pls")
    let height_=prompt("Enter Height Pls")
    sample_data[name_]={
        age:age_,
        height:height_,
        target_method:check_adult
    }
    i=i+1
}
console.log(sample_data)
for(let i in sample_data){
    sample_data[i].target_method()
}
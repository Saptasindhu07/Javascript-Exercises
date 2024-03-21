//Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen

for(let i=1;i<=15;i++){
    let temp=i%2
    if(temp==0){
        console.log(i+" is Even")}
    else{
        console.log(i+" is Odd")
    }
}
function Main_Func(){
    let i=1
    function inner_func_(){
        if(i==1){
            console.log("1st time u called the inner function")
        }else{
        console.log(`${i}th time u called the function`)
        }i=i+1
    }
    return inner_func_
}
let var1=Main_Func()
var1()
var1()
var1()
let var2=Main_Func()
var2()
var2()
var2()
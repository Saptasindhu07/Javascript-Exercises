//closure to return cube of any number 
function MainFunc(x){
    function inner_func(){
        return x**3
    }
    return inner_func
}
console.log(MainFunc(5)())
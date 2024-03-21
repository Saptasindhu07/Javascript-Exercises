//Write a JavaScript program to capitalize the first letter of each word of a given string.
let m=prompt("Enter the Sentence").split(" ")
let main_array=[]
for(let i of m){
    let testArray_=i.split("")
    testArray_[0]=testArray_[0].toUpperCase()
    main_array.push(testArray_.join(""))
}
console.log(main_array.join(" "))
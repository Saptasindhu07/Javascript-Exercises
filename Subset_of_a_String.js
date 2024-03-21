//Write a JavaScript program which returns a subset of a string. 

let subset_sample_string=prompt("Enter The String U need the Subset of:")
let i=0
for(let j of subset_sample_string){
    console.log(subset_sample_string.slice(i))
    i=i+1
}
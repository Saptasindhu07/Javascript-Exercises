let array_2_new=["apple","orange","mango","strawberry"]
let copy=[...array_2_new]
let temp_min=0
let h=0
while(true){
    let temp_max=""
    for(let i of array_2_new){
        if(i.length>temp_max.length){
            temp_max=i
        }
    }
    temp_min=temp_max
    for(let i of array_2_new){
        if(i==0){
        }
        else if(i.length<temp_min.length){
            temp_min=i
        }
    }
    for(let i in array_2_new){
        if (array_2_new[i]==temp_min){
            array_2_new[i]=0
        }
    }
    copy[h]=temp_min
    h=h+1
    if(h>=array_2_new.length){
        break
    }
}
console.log(copy)
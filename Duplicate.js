let array_duplicate2=prompt("Enter the Main array (no repitition)").split(" ")
let array_duplicate1=prompt("Enter the Check array: ").split(" ")
console.log(array_duplicate2)
console.log(array_duplicate1)
let _count_=0
let internal_count=0
while(true){
    _count_=0
    for(let i of array_duplicate1){
        if(array_duplicate2[internal_count]==i){
            _count_=_count_+1
        }
    }
    console.log(array_duplicate2[internal_count]," repeats ",_count_," times")
    if(internal_count==(array_duplicate2.length)-1){
        break
    }
    internal_count=internal_count+1
}

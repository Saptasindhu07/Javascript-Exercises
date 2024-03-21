function about(){
    console.log("Name:",this.name,",Age:",this.age,",Height:",this.height)
}
let Person1={
    name:"Sapta",
    age:24,
    height:7
}
let Person2={
    name:"TreeWalkere",
    age:17,
    height:6
}
about.call(Person2)
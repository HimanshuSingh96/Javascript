//arrow function allows us to write a shorter function syntax
//introduced in ES6

//before
var hello= function(){
    console.log("hello world");
}
hello();

//after
var hello = () => {
    console.log("hello world");
}
hello();


var hello = (val)=>{
    console.log("hello"+val);
  }
hello("himan");
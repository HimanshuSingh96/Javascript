//this example returns a incremented value of the element by 2
var arr1=[1,2,3,4];

var mapArr= arr1.map((x)=>{
  return x+2;
});

console.log(arr1);
console.log(mapArr);


//this example concatenates "A" with each character of the object
var name = "Himanshu";
var newName = Array.prototype.map.call(name,function(item){
  return item +"A"
});
console.log(newName);


//this example will return the square of the array elements
var array1= [2,3,4,5];
var newArray=array1.map( (x)=>{
  return x*2;
});

console.log(newArray);


//map() is also used to filter an array
const cart =[{product:"Laptop",Price:55000},
             {product:"Mobile",Price:14000}];

const cart1 =cart.map(x=>x.product);
const cart2 = cart.map(x=>x.Price);


const cart3=cart.map(function(val,index){
  return {key:index,value:val}
})
console.log(cart1);
console.log(cart2);
console.log(cart3);
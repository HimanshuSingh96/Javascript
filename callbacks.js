//normal call no need of callbacks

function first(){
    console.log(1);
}
function second(){
    console.log(2);
}

first();
second();


//if there is any API call where we have to wait for the response.
//to simulate this,we are using setTimeout()

function first(){
    setTimeout(()=>{
        console.log(1);
    },1000);
}

function second(){
    console.log(2);
}
first();//it will not wait for the response instead it will execute another function.
second();

//callback function

function show(){
    console.log("I m show function");
}
function calling(callback){
    callback();
}
calling(show);


//with an argument

function show(a){
    console.log("I m show function" +a);
}
function calling(callback){
    var a = 100;
    callback(a);
}
calling(show);

 //synchronus callback
function show(a){
    console.log("i m in show function" +a);
  }
  function ready(a,callback){
    callback(a);
  }
  ready(107,show);
 console.log("End");
 
 //asynchronus callback

 setTimeout(()=>{
     console.log("I m in arrow function")
 },5000);
 consople.log("I m executed before arrow function");





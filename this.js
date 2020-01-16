// function car(){
//     console.log(this.name);
    
// }

// var name="BMW";
// var obj1={name: "Audi", car:car};
// var obj2={name:"Maseratti", car:car }

// car();
// obj1.car();


//Default and implicit binding of "this" keyword

//'use strict';
// var obj1 ={
//     name:"pulsar",
//     bike: function(){
//         console.log(this.name);
//     }
// }


// var obj2 ={
//     name: "bajaj",
//     bike: obj1.bike
// };

// var name ="ninja";
// var bike = obj1.bike;
// bike();//default call

// obj1.bike();//when we call object property as a method, then it becomes "this object for thatn method"--implicit call.
// obj2.bike();//implicit call


//explicit and fixed Binding of "this keyword"
// function bike(){
//     console.log(this.name);
// }

// var obj1= {
//     name: "ct 100",
//     bike:bike
// };
// bike.call(obj1);//when we use call and apply method, the first parameters acts as a execution context that is "this" binding.
// bike.apply(obj1);


// var bike = function(){
//     console.log(this.name);
// }

// var name =" Ninja";
// var obj1 ={name:"Pulsar"};
// var obj2 = {name: "Karizma"};

// var originalBike = bike;
// bike = function(){
//     originalBike.call(obj1);
// };

// bike();
// bike.call(obj2);


var person ={
    fname:"Himanshu",
    lname: "Singh",
    fullname: function(){
        return this.fname +" "+ this.lname;
    }
};

console.log(person.fullname());
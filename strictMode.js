//whenever we use strict mode it doesn't allow the deleting of the function instead it will throw an Error
//however when you remove 'use strict' it will show error.
// 'use strict';
// function x(p1,p2){
// console.log(p1);
// console.log(p2);
// }
// x(2,3);
// delete x;

//octal numbers are not allowed
//'use strict';
// x=010;
// console.log(x);

//doesn't allow writing to a read-only property
// 'use strict';
// let obj={};
// Object.defineProperty(obj,"x",{value:2,writable:false});
// obj.x=10;
// console.log(obj.x);

//string eval cannot be used as a variable
// 'use strict';
// let eval=3;
// console.log(eval);


// 'use strict';
// let obj = {
//     get x(){
//         return 0;
//     }
// }

// obj.x= 20;
// console.log(obj.x);

//string arguments cannot be used
// 'use strict';
// let arguments =30;
// console.log(arguments);



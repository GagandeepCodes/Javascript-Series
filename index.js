// console.log("hello world");
// var num1 = 2;
// var num2 = 3;
// // console.log(num1*num2);
// // var marks = 81.25;
// // console.log(marks);
// // if a varibale is not defined the by default value of it is undefined
// var und;
// // console.log(und);

// var marks = {
//     gagan: 21,
//     sabhya: 22,
//     ankit: 31
// }
// // console.log(marks);

// var arr = [1, 2, 3, "gagan", 4];
// // console.log(arr);
// function avg(a, b) {
//     return (a + b) / 2;
// }

// c = avg(4, 5);
// // console.log(c);

// //conditionals in javascript
// var arr = [1, 2, 3, 4, 5];
// // for(var i=0;i<arr.length;i++){
// //     console.log(arr[i]);
// // }

// // arr.forEach(function (element) {
// //     console.log(element);
// // })
// var j =0;
// do{
//     console.log(arr[j]);
//     j++;
// }while(j<arr.length)

// //string in javascript
// let str = "I am learning javascript";
// console.log(str.length);
// console.log(str.indexOf("javascript"));

// //dom manipulation
// let elem = document.getElementById('click');
// // console.log(elem);
// console.log(elem.innerText);

// tn = document.getElementsByName('div');
// console.log(tn);
// createdElement = document.createElement('p');
// createdElement.innerText = "this is a paragraph again";
// // tn[0].appendChild(createdElement);
// console.log(tn);

// // query selector
// sel = document.querySelectorAll('.container');
// console.log(sel);

// function clicked(){
//     console.log("the button was clicked");
// }

// firstContainer.addEventListener('click', function(){
//     document.querySelector('.container').innerHTML = " <b> we have clicked";
//     console.log('click hua');
// })
// // firstContainer.addEventListener('mouseover', function(){
// //     console.log('Mouse over hua hai');
// // })
// // firstContainer.addEventListener('mouseout', function(){
// //     console.log('Mouse out hua hai');
// // })

// summ = (a,b)=>{
//     return a+b;
// }

// obj = { name: "gagan", length : 1}
// jso = JSON.stringify(obj);
// console.log(obj)
// console.log(jso)
// console.log(typeof(jso));
// parsed = JSON.parse(`{"name":"gagan","length":1}`);
// console.log(parsed);
// console.log(typeof(parsed));

//***************************SCOPE****************************** */

// var x = 1;
// var y = 2;
// var z = 3;
// console.log(`global x: ${x}`);
// console.log(`global y: ${y}`);
// console.log(`global z: ${z}`);

// function myFunc(){
//     let x = 4;
//     let y = 5;
//     let z = 6;
//     console.log(`function x: ${x}`);
//     console.log(`function y: ${y}`);
//     console.log(`function z: ${z}`);
//     {
//         console.log(`block x: ${x}`);
//         console.log(`block y: ${y}`);
//         console.log(`block z: ${z}`);
//     }
// }

// const toProperCase = (name) =>{
//     return name[0].toUpperCase() + name.slice(1).toLowerCase();
// }
// myFunc();
// console.log(toProperCase("gAgAN"));

//***********************ARRAY*********************** */

// const myArray = [];
// myArray[0] = "Dave";
// myArray[1] = 3;
// myArray[2] = false;

// myArray.push("school");
// myArray.push(1001);
// myArray.pop();
// const newlength = myArray.unshift(42);
// console.log(newlength);
// console.log(myArray);
// const firstitem = myArray.shift();
// console.log(firstitem);
// myArray.splice(1,1,21);
// console.log(myArray);

//*************************OBJECT*****************************/

// const myObj = {name : "Dave"};

// const anotherObj = {
//     alive : true,
//     answer : 42,
//     hobbies : ["Eat","Sleep","Code"],
//     beverage : {
//         morning : "Coffee",
//         afternoon: "Iced Tea"
//     },
//     action: function(){
//         return `time for ${anotherObj.beverage.morning}`;
//     }
// };
// console.log(anotherObj.alive);

// const team  = {
//     striker : "Cristiano Ronaldo",
//     midfielder : "luka Modric",
//     defender : ["Sergio Ramos", "Pepe"],
//     goalkeeper : "Casilas"
//   };

// for(let job in team){
//     console.log(`${team[job]} as ${job}`);
// }
// function goal({striker}){
//     return `${striker} scored`;
// }
// console.log(goal(team));

//**********************CLASSES********************** */
// class Pizza{
//     constructor(pizzaSize,pizzaType){
//         this._type = pizzaType;
//         this._size = pizzaSize;
//         this.crust = "original";
//         this.topping = []
//     }
//     bake(){
//         console.log(
//             `Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`
//         );
//     }
// }

// const myPizza = new Pizza("pepporoni", "medium");
// myPizza.bake();
// console.log(myPizza.type);

// class specialityPizza extends Pizza{
//     constructor(pizzaSize){
//         super(pizzaSize);
//         this.type = "The Works";
//     }
//     slice(){
//         console.log(
//             `Your ${this.type} ${this.size} has 8 slice.`
//         );
//     }
// }

// const mySpecial = new specialityPizza("medium");
// mySpecial.slice();

/*************************JSON************************* */

// const obj = {
//     name : "gagan",
//     hobbies: ["eat","code","sleep"],
//     hello: function(){
//         console.log("Hello!");
//     }
// };
// console.log(obj);
// console.log(obj.name);
// obj.hello();
// const sendJSON  = JSON.stringify(obj);
// console.log(sendJSON);
// console.log(typeof(sendJSON));
// const receiveJSON = JSON.parse(sendJSON); 
// console.log(receiveJSON);

/*****************************ERROR HANDLING**************************** */
"use strict";

const makeError = () =>{
    try{
        throw new customError("This is a custom Error!");
    }catch(err){
        console.error(err.name);
        console.error(err.message);
        console.error(err.stack);
    }
};

makeError();

function customError(message){
    this.message = message;
    this.name = "customError";
    this.stack = `${this.name} : ${this.message}`;
}
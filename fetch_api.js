// const users = fetch("https://jsonplaceholder.typicode.com/users");
// console.log(users);
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(Response =>{
//     return Response.json();
// })
// .then(data =>{
//     // console.log(data);
//     // console.log(typeof(data));
//     data.forEach(user => {
//         console.log(user);
//     });
// }) 

//Async and Await

//Workflow function

// const getAllUserEmails = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const jsonUserData = await response.json();

//     const userEmailArray = jsonUserData.map(user => {
//         return user.email;
//     });

//     // console.log(userEmailArray);
//     return userEmailArray;
// }
// console.log(getAllUserEmails());


// const myCoolFunction = async() =>{
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const jsonUserData = await response.json();
//     console.log("Hello");
//     console.log(jsonUserData);
//     return jsonUserData;
// }

// myCoolFunction();
// //this anotherFunc waits or the completion of the myccolfunc
// //now mycoolfunc returns a jsonuserdata
// //therefore we will wait for that function to complete and
// //then execute this one
// const anotherFunc = async() =>{
//     const data = await myCoolFunction();
//     console.log("No Hello");
//     console.log(data);
// }
// anotherFunc();
// console.log(myUsers.userList); 

// GET DATA


// const getDadJoke = async() => {
//     const response = await fetch("https://icanhazdadjoke.com/",{
//     method : "GET",
//     headers : {
//         Accept : "application/json"
//     }
// });

// const jsonJokeData = await response.json(); 

// console.log(jsonJokeData);
// }

// getDadJoke();


// POST DATA


const jokeObject = {
    id : "0oO71TSv4Ed",
    joke : "what do you call a pregnent slave> buy one get one free."
}
const postData = async(jokeObj) => {
    const response = await fetch("https://httpbin.org/post", {
        method :"POST",
        headers : {
            "Content-Type" : "applicatioon/json"
        },
        body : JSON.stringify(jokeObj)
    });

    const jsonResponse = await response.json();

    console.log(jsonResponse);
} 

postData();


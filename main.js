const view1  = document.getElementById("view1");
console.log(view1);
console.log(typeof(view1));
const view2 = document.querySelector("#view2");
console.log(view2);
const sameviews = document.querySelectorAll(".view");
console.log(sameviews);

const divs = view1.querySelectorAll("div");
console.log(divs);
const sameDivs =  view1.getElementsByTagName("div");
console.log(sameDivs);
const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);

for (let i=0;i<evenDivs.length;i++){
    evenDivs[i].style.backgroundColor = "darkblue"; 
} 

const navText = document.querySelector("nav h1").innerText = "Home";
console.log(navText);

console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.hasChildNodes());

view1.style.display = "none";
view2.style.display = "flex";
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";

console.log(view2.hasChildNodes());
// while(view2.lastChild){
//     view2.lastChild.remove();
// }

// const createDivs = (parent,iter) => {
//     const newDiv = document.createElement("div");
//     newDiv.textContent = iter;
//     newDiv.style.backgroundColor = "#000";
//     newDiv.style.width = "100px";
//     newDiv.style.height = "100px";
//     newDiv.style.margin = "10px";
//     newDiv.style.display = "flex";
//     newDiv.style.justifyContent = "center";
//     newDiv.style.alignItems = "center";
//     parent.append(newDiv);
// }

// for (let i=0;i<12;i++){
//      createDivs(view2,i+1 );  
// }      

document.addEventListener("readystatechange",(event) => {
    if(event.target.readyState === "complete") {
        console.log("readystate : complete");
        initApp();
    }
});

const initApp = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = view.querySelector("h2");


    view.addEventListener("click",(event) =>{
        // view.classList.toggle("purple");
        // view.classList.toggle("darkblue");
         view.style.backgroundColor = "purple";
    },
    false
    ); 

    div.addEventListener("click",(event) =>{
        event.stopPropagation();
        div.style.backgroundColor = "blue";
    },
    false
    );

    h2.addEventListener("click",(event) =>{
        // event.target.textContent = "Clicked";
        h2.innerText = "Clicked";
    },
    false
    );
}
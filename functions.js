import { posts } from "./posts.js";
posts.forEach(post=>{
    console.log(post);
});
console.clear();
const filterposts = posts.filter(post=>{
    return post.userId===2;
});

console.log(filterposts);
console.log(typeof(filterposts));


const mappedpost = filterposts.map(post=>{
    return post.id*10;
});
console.log(mappedpost);
console.log(typeof(mappedpost)); 
console.log(typeof(mappedpost[0]));
for(let i=0;i<mappedpost.length;i++){
    console.log(mappedpost[i]);
}

const reducePostValue = mappedpost.reduce((sum,post)=>{
    return sum+post;
});
console.log(reducePostValue);
console.log(typeof(reducePostValue)); 
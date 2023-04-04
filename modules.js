import playGuitar from "./guitars.js";
import { shredding,plucking } from "./guitars.js";

console.log(playGuitar());
console.log(shredding());
console.log(plucking());

import user from "./user.js";
const me  = new user("gbhardwaj572@gmail.com","Gagandeep");
console.log(me);
console.log(typeof(me));
console.log(me.greeting());
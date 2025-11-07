//local module
// import { add } from "./math.js";

// add(10, 20)

// core modules

const fs = require("fs")
const os = require("os")



fs.writeFileSync("demo.txt", "hello world")
fs.copyFileSync("demo.txt", "demo-random.txt")
const val = fs.readFileSync("demo.txt", "utf-8")
console.log(val);

fs.mkdirSync("./src", {recursive:true})
fs.unlinkSync("demo-random.txt")

const ans=os.cpus()
console.log(ans);
console.log(ans.length);

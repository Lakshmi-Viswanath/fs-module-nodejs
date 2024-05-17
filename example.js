//read file in node js common module.
const { resolve } = require('node:path');
const {readFile} = require('node:fs/promises');

(async ()=>{
const filePath = resolve('./index.html');
const contents = await readFile(filePath , {encoding : 'utf-8'})
console.log(contents);
})();
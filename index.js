import { readFile, writeFile } from 'fs/promises';

const filePath = new URL('./index.html', import.meta.url);
let contents = await readFile(filePath , {encoding: 'utf-8'});

const data = {
    name : "Lakshmi",
    age : 30,
    address : "Bangalore"
}
for(const [key, value] of Object.entries(data)){
    contents = contents.replace(`{{${key}}}` , value)
}

await writeFile(new URL('./newFile.html', import.meta.url), contents);

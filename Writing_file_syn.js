const fs = require('fs');

const content = "Hello good morning myself Venkata Jayanth";
try{
    fs.writeFileSync('./input.txt', content, 'utf-8');
    console.log("Data is written succesfully");
}catch(err){
    console.log("Error while writing data");
}
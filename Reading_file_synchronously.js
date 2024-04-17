const fs = require('fs');

try {
    const data = fs.readFileSync('./input.txt', 'utf-8');
    console.log(data);
} catch (err) {
    console.error(err);
}

// const data = fs.readFileSync('./input.txt',
//     {encoding: 'utf-8', flag: 'r'});
// console.log(data);
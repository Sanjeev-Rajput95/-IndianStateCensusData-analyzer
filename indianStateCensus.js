
const csv = require('csv-parser');
const fs = require('fs');
let result = [];
module.exports = function read(filePath) {
    return new Promise ((resolve,reject) =>{
        fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (row) => {
             result.push(row)
        })
        .on('end', () => {
            resolve(result);
        });
        
    })
 
}

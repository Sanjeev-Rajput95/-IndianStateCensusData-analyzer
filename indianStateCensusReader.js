const readFile = require('./indianStateCensus');
let path = 'C:/Users/naps/Desktop/snjv/reactapp/IndianStateCensus/IndiaStateCensusData.csv';
readFile(path).then((response) => {
    console.log(response);
}).catch((error) => {

})

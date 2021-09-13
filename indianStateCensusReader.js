const readFile = require('./indianStateCensus');
let path = 'C:/Users/naps/Desktop/snjv/reactapp/IndianStateCensus/IndiaStateCensusData.csv';
readFile(path).then((response) => {
    for(let i = 0; i < response.length - 1 ; i++) {
        if(response[i].State === "Uttar Pradesh") {
             console.log("the population of Uttar Pradesh is = " + response[i].Population)
        }
        if(response[i].Population == '103804637') {
            console.log(" the state name whose population = 103804637 name is = " + response[i].State)
        }
    }
}).catch((error) => {

})

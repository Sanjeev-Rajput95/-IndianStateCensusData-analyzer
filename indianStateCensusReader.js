const readFile = require('./indianStateCensus');
let path = 'C:/Users/naps/Desktop/snjv/reactapp/IndianStateCensus/IndiaStateCensusData.csv';
readFile(path).then((response) => {
    for (let i = 0; i < response.length - 1; i++) {
        if (response[i].State === "Uttar Pradesh") {
            console.log("the population of Uttar Pradesh is = " + response[i].Population)
        }
        if (response[i].Population == '103804637') {
            console.log(" the state name whose population = 103804637 name is = " + response[i].State)
        }
    }
    console.log(parseInt(response[0].Population));
    for (let j = 0; j < response.length; j++) {

        for (let k = j + 1; k < response.length; k++) {

            if (parseInt(response[j].Population) > parseInt(response[k].Population)) {
                let temp;
                temp = response[j];
                response[j] = response[k];
                response[k] = temp;
            }
        }
    }
    console.log(" the state name is = " + response[0].State + " \n state's population is least = " + response[0].Population)
    console.log(" the state name is = " + response[response.length - 1].State + " \n state's population is highest = " + response[response.length - 1].Population)
    for (let i = 0; i < response.length - 1; i++) {
        if (response[i].State === "Uttar Pradesh") {
            console.log("the population of Uttar Pradesh is = " + response[i].Population)
        }
        if (response[i].Population == '103804637') {
            console.log(" the state name whose population = 103804637 name is = " + response[i].State)
        }
    }
    for (let j = 0; j < response.length; j++) {
        for (let k = j + 1; k < response.length; k++) {
            if (parseInt(response[j].DensityPerSqKm) > parseInt(response[k].DensityPerSqKm)) {
                let temp;
                temp = response[j];
                response[j] = response[k];
                response[k] = temp;
            }
        }
    }
    console.log(" The Density of most populated is " + response[response.length - 1].DensityPerSqKm);

}).catch((error) => {

})

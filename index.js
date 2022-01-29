const fs = require('fs');
const readline = require("readline-sync");


const read = require('./ReaderAndFormater'); // read file and convert it into hashmap of hashmap
const dataBase = read('./input.txt') // input a file with data and convert it to universal data set
  
// Array to store all Funds In Portfolio
let allFundsInPortfolio = [];

const addFunds = (namesOfFund) => {  // function to add fund to allFundsInPortfolio array
    allFundsInPortfolio = new Array(); // to reset the array
    for(let j = 0; j<namesOfFund.length; j++){
        allFundsInPortfolio.push(namesOfFund[j]);
    }
}

const compareFund = (nameOffund) => { // to compare new fund overlap with exesting funds
    const fundToBeCompared = dataBase.get(nameOffund);
    if(!fundToBeCompared){  // if fund to be compared does not exist in universal dataSet
        console.log('FUND_NOT_FOUND');
        return;
    }
    for(let no = 0; no<allFundsInPortfolio.length; no++){ // to iterate over all the funds in potfolio
        let overlap = 0;
        const n = dataBase.get(allFundsInPortfolio[no]);
        for(const [key,value] of n){
            if(fundToBeCompared.get(key)){
                overlap+=1;
            }
        }
        // calculate the oerlap percentage
        let total = n.size + fundToBeCompared.size;
        const ans = (2*overlap)/(total)*100;
        const ans2 = +(Math.round(ans + "e+2")  + "e-2");
        console.log(`${nameOffund} ${allFundsInPortfolio[no]} ${ans2.toFixed(2)}%`);
    }
}

const addStock = (temp) => {  // to add stock to a fund in universal data set
    const fundName = temp[0];
    let stock_name = "";
    for(let k = 1; k<temp.length; k++){ // to handel stocks that has spaces in name
        stock_name+=(temp[k]+" ");
    }
    stock_name.trim();
    dataBase.get(fundName).set(stock_name,true);
    return;
}


const sleep = (ms = 900) => new Promise((r) => setTimeout(r,ms)); 

const main = async() => {
    while (true) {
        let input = readline.question();
        /** 
         * to handel if all inpute are given at once,
         *  add blank line at end to maintain flow OR
         *  press return key at end
        */ 
        await sleep();
        let temp = input.split(' ');
        if(temp[0]=='CURRENT_PORTFOLIO'){
            addFunds(temp.slice(1));
            console.log();
            continue;
        }
    
        else if(temp[0]==='CALCULATE_OVERLAP'){
            compareFund(temp[1]);
        }
    
        else if(temp[0]=='ADD_STOCK'){
           addStock(temp.slice(1));
        }
    
        if(temp[0] == 'stop'){
            break;
        }
    }
}

main();



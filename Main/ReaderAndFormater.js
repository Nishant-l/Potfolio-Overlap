const fs = require('fs');

const read = (filepath) => {
    try{
        const data = fs.readFileSync(filepath,'utf8')
        const json = JSON.parse(data);
        const mapOfFund = new Map();
        for(let i of json.funds){
            const mapOfStockInAFund = new Map();
            i.stocks.map((stock)=>{
                mapOfStockInAFund.set(stock,true)
            })
            mapOfFund.set(i.name,mapOfStockInAFund);
        }
        return mapOfFund;

    } catch(err){
        console.log('Wrong file path entered please enter stop and try again')
        return -1;
    }
       
}
module.exports = read;
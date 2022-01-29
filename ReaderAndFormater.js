const fs = require('fs');

const read = (filepath) => {
    
    console.log(filepath);
    
    const data = fs.readFileSync(filepath,'utf8')
       
    const b = JSON.parse(data);
    const c = new Map();
    for(let i of b.funds){
        const d = new Map();
        i.stocks.map((stock)=>{
            d.set(stock,true)
        })
        c.set(i.name,d);
    }
    return c;
}
module.exports = read;
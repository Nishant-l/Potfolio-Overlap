const fs = require('fs');

const read = (filepath) => {
    try{
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

    } catch(err){
        console.log('Wrong file path entered please enter stop and try again')
        return -1;
    }
       
}
module.exports = read;
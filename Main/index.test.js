const {addFunds,compareFund,addStock} = require('./index');

test('add fund in potfolio', () => {
    expect(
        addFunds(['1'])
    )
    .toEqual(['1'])
})

test('compare non existing fund in global with existing one in potfolio', () => {
    let dataBase = new Map();
    dataBase.set('b',{});
    expect(
        compareFund('a',['b,c,d'],dataBase)
    )
    .toBe(-1)
})

test('compare new fund with existing one in potfolio', () => {
    let dataBase = new Map();
    let bb = new Map();
    bb.set('1',true);
    bb.set('2',true);
    let aa = new Map();
    aa.set('1',true);
    dataBase.set('b',bb);
    dataBase.set('a',aa);
    let ans = new Array;
    ans.push(66.67);
    expect(
        compareFund('a',['b'],dataBase)
    )
    .toEqual(ans)
})

test('adding stock to a fund', () => {
    let dataBase = new Map();
    let bb = new Map();
    bb.set('1',true);
    bb.set('2',true);
    let aa = new Map();
    aa.set('1',true);
    dataBase.set('b',bb);
    dataBase.set('a',aa);
    const temp = new Array();
    temp.push('a')
    temp.push('llll');
    expect(
        addStock(temp,dataBase)
    )
    .toBe(true);
})
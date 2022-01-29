const read = require('./ReaderAndFormater');

test('entered invallid file path', () => {
    expect(
       read('./aaaa/aaaa.t')
    )
    .toEqual(-1);
})

test('entered valid file path', () => {
    const ans = new Map();
    const stock = new Map();
    stock.set('a',true);
    stock.set('b',true)
    ans.set("ICICI_PRU_NIFTY_NEXT_50_INDEX",stock);
    expect(
       read('./Main/testInput.txt')
    )
    .toEqual(ans);
})


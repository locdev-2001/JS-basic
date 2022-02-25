console.log('Hello world from HTML')
let arrTop4 = ['T1', 'DK', 'KT', 'DX'];
let i = 0
while (i < arrTop4.length) {
    if (arrTop4[i] === 'DK')
    {
        console.log('found winner:', arrTop4[i], 'at', i);
        break;
    }
    
    console.log(i);
    i++;
}
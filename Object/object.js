console.log('load')
//object in javascript
// to define a variable is an object, use {}.
let a = {
    name: 'ghost',//property
    address: 'HCM',//property
    test: function () {
        console.log('this is a function inside an object')
        return ''
    }//function
};//object
//Key: value
// key cant write space, you can use _ to space it
let b = 'string'// string
console.log(`type of a: ${typeof a} and type of b: ${typeof b}`);
console.log(`${a.name} tell ${a.test()}`)
(() => {
    // // 1. NaN
    // if (null === null) {
    //     console.log('null Equal null')
    // }
    // if (NaN !== NaN) {
    //     console.log('Nan cannot equal self because NaN/NaN != 1')
    // }
    // const result = 1 / 'hello'
    // // cannot use NaN === NaN in if use Number.isNaN
    // if (Number.isNaN(result)) {
    //     console.log('Result is NaN')
    // }

    // 2. Type Coercion
    // 1 < 2 < 3
    // true < 3
    // true
    //
    // 3 > 2 > 1
    // true > 1 
    // false
    // console.log(2 - '1') // - convert 1 to int
    // console.log(2 + '1') // + see string convert 2 to string
    // console.log(true + true) // cast true = 1

})()
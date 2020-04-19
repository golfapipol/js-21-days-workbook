(() => {
    // 1. NaN
    if (null === null) {
        console.log('null Equal null')
    }
    if (NaN !== NaN) {
        console.log('Nan cannot equal self because NaN/NaN != 1')
    }
    const result = 1 / 'hello'
    // cannot use NaN === NaN in if use Number.isNaN
    if (Number.isNaN(result)) {
        console.log('Result is NaN')
    }

})()
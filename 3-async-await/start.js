(() => {
    // const simulateAsyncAPI = (text, timeout) => {
    //     setTimeout(() => console.log(text), timeout)
    // }
    // simulateAsyncAPI('A', 1000)
    // simulateAsyncAPI('B', 500)
    // simulateAsyncAPI('C', 100)

    const simulateAsyncAPICallback = (text, timeout, callback) => {
        setTimeout(() => {
            console.log(text)
            if (callback) {
                callback()
            }
        }, timeout)
    }

    simulateAsyncAPICallback('A', 1000, () => {
        simulateAsyncAPICallback('B', 500, () => {
            simulateAsyncAPICallback('C', 100, () => {
                console.log('Callback')
            })
        })
    })
})()
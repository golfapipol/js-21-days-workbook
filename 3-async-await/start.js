(() => {
    const simulateAsyncAPI = (text, timeout) => {
        setTimeout(() => console.log(text), timeout)
    }

    simulateAsyncAPI('A', 1000)
    simulateAsyncAPI('B', 500)
    simulateAsyncAPI('C', 100)
})()
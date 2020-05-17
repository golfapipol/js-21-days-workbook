(() => {
    // Class VS Prototype
    class Person {

    }
    // What's prototype
    // __proto__ -> object to hold all function of objects (for reuse, reduce memory usage)
    const name = 'Apipol'
    console.log(name)

    const arr = []
    console.log(arr.__proto__)

    // Prototype Chain
    // __proto__ -> __proto__
    console.log(arr.__proto__)
    console.log(arr.toLocaleString())

    // Extend prototype
    function sayHello(val) {
        console.log(`hello ${val}`)
    }
    String.prototype.sayHello = sayHello
    console.log(name.__proto__)
    name.sayHello('world')
})()
(() => {
    //lexical scope, dynamic scope
    function printName() {
        console.log(this)
    }
    printName()

    //invoker object
    const person = { name: 'John', printName}
    const person2 = { name: 'Jane', printName}
    person.printName()
    person2.printName()
    

})();
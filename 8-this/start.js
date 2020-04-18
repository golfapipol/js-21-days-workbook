(() => {
    //lexical scope, dynamic scope
    function printName() {
        console.log(this)
        console.log(this.name)
    }
    // printName()

    //invoker object
    const person = { name: 'John', printName}
    const person2 = { name: 'Jane', printName}
    // person.printName()
    // person2.printName()
    
    // global
    name = 'G'
    printName()

})();
(() => {
    //lexical scope, dynamic scope
    // function printName() {
    //     console.log(this)
    //     console.log(this.name)
    // }
    // printName()

    // 2.1 invoker object
    // const person = { name: 'John', printName}
    // const person2 = { name: 'Jane', printName}
    // person.printName()
    // person2.printName()

    // 2.2 global
    // name = 'G'
    // printName()

    // 2.3 constructor function
    // function Person(name) {
    //     this.name = name
    //     this.printName = printName
    // }

    // const person3 = new Person('Joker')
    // person3.printName()

    // 3. call(), apply(), bind()
    function printName(nationality, city) {
        console.log(this)
        console.log(`my name is ${this.name}, nationality is ${nationality} and city ${city}`)
    }

    function Person(name, nationality, city) {
        this.name = name
        this.nationality = nationality
        this.city = city
        
        printName(this.nationality, this.city)
        printName.call(this, this.nationality, this.city)
        printName.apply(this, [this.nationality, this.city])

        const printNamePerson = printName.bind(this)
        printNamePerson()
    }
    const person4 = new Person('Joker','English', 'Gotham')

})();
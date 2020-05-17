(() => {
    const carBrands = [
        'BMW',
        'Maserati',
        'Toyota',
        'Honda',
        'Hyundai',
        'Mercedes Benz',
        'Ferrari',
    ]

    const clearResult = () => {
        const ulElement = document.querySelector('.results')
        if (ulElement) {
            document.body.removeChild(ulElement)
        }
    }
    const selectCarBrand = (event) => {
        searchElement.value = event.target.innerText
        clearResult()
    }

    const searchElement =document.querySelector('.search')

    const onInput = (event) => {
        clearResult()
        const inputText = event.target.value.toLowerCase()
        console.log('input', inputText)
        const matchedCarBrands = carBrands.filter(carBrand => carBrand.toLowerCase().startsWith(inputText))

        console.log('matchedCarBrands', matchedCarBrands)
        const ulElement = document.createElement('ul')
        ulElement.classList.add('results')

        matchedCarBrands.forEach(carBrand => {
            const liElement = document.createElement('li')
            liElement.innerText = carBrand
            liElement.onclick = selectCarBrand
            ulElement.appendChild(liElement)
        })
        document.body.appendChild(ulElement)
    }

    const run = () => {
        searchElement.addEventListener('input', onInput)
        document.addEventListener('click', clearResult)
    }

    run()
})()
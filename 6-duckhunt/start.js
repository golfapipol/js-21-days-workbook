(() => {
    const random = (min, max) => Math.floor(Math.random()  * (max -min +1)) + min
    const createDucks = () => {
        return [...Array(5)].map(() => ({
            x: random(0, window.innerWidth),
            y: window.innerHeight,
            speedX: random(-50, 50),
            speedY: random(5, 10),
        }))
    }

    const setupDuckElement = (duck) => {
        const duckElement = document.createElement('div')
        duckElement.className = 'duck'
        duckElement.style.left = `${duck.x}px`
        duckElement.style.top = `${duck.y}px`
        duckElement.style.backgroundImage = getDuckBackgroundImage(duck, duckElement)
        document.body.appendChild(duckElement)
        return { duck, duckElement }
    }

    const getDuckBackgroundImage = (duck, duckElement) => {
        const direction = duck.speedX > 0 ? 'right': 'left'
        if (duckElement.style.backgroundImage.indexOf('1') !== -1) {
            return `url('./${direction}-2.png')`
        }
        return `url('./${direction}-1.png')`
    }
    const moveDuck = (duckElement, duck) => {
        const {left, top} = duckElement.getBoundingClientRect()
        duck.x = left + duck.speedX
        duck.y = top - duck.speedY
        duckElement.style.left = `${duck.x}px`
        duckElement.style.top = `${duck.y}px`
        duckElement.style.backgroundImage = getDuckBackgroundImage(duck, duckElement)
    }

    const run = () => {
        const ducks = createDucks()
        const duckElements = ducks.map(setupDuckElement)

        duckElements.forEach(({duck, duckElement}) => {
            setInterval(() => moveDuck(duckElement, duck), 100)
        })
    }
    run()
})()
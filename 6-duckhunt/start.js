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
        const outOfBoundX = duck.x < 0 || duck.x > window.innerWidth
        const outOfBoundY = duck.y < 0 || duck.y > window.innerHeight

        if (outOfBoundX) {
            duck.speedX *= -1
        }
        if (outOfBoundY) {
            duck.speedY *= -1
        }
        duck.x = left + duck.speedX
        duck.y = top - duck.speedY
        duckElement.style.left = `${duck.x}px`
        duckElement.style.top = `${duck.y}px`
        duckElement.style.backgroundImage = getDuckBackgroundImage(duck, duckElement)
    }
    const fireDuck = (event) => {
        const duckElement = event.target;
        duckElement.style.transition = 'top 2s'
        duckElement.style.top = `${window.innerHeight}px`
        clearInterval(duckElement.interval)

        setTimeout(() => {
            document.body.removeChild(duckElement)

            const duck = document.querySelector('.duck')
            if (!duck) {
                const winningElement = document.querySelector('.winning')
                winningElement.style.opacity = 1
            }
        }, 2000)
    }

    const run = () => {
        const ducks = createDucks()
        const duckElements = ducks.map(setupDuckElement)

        duckElements.forEach(({duck, duckElement}) => {
            duckElement.interval = setInterval(() => moveDuck(duckElement, duck), 100)
            duckElement.addEventListener('click', fireDuck)
        })
    }
    run()
})()
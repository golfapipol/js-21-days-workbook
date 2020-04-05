(() => {
    const random = (min, max) => Math.floor(Math.random()  * (max -min +1)) + min
    const createviruses = () => {
        return [...Array(3)].map(() => ({
            x: random(window.innerWidth/2, window.innerWidth),
            y: random(window.innerHeight/4, window.innerHeight/2),
            speedX: random(-50, 50),
            speedY: random(-50, 50),
        }))
    }

    const setupvirusElement = (virus) => {
        const virusElement = document.createElement('div')
        virusElement.className = 'virus'
        virusElement.style.left = `${virus.x}px`
        virusElement.style.top = `${virus.y}px`
        virusElement.style.backgroundImage = `url('./coronavirus.png')`
        document.body.appendChild(virusElement)
        return { virus, virusElement }
    }

    const moveVirus = (virusElement, virus) => {
        const {left, top} = virusElement.getBoundingClientRect()
        const outOfBoundX = virus.x < 0 || virus.x > window.innerWidth
        const outOfBoundY = virus.y < 0 || virus.y > window.innerHeight

        if (outOfBoundX) {
            virus.speedX *= -1
        }
        if (outOfBoundY) {
            virus.speedY *= -1
        }
        virus.x = left + virus.speedX
        virus.y = top - virus.speedY
        virusElement.style.left = `${virus.x}px`
        virusElement.style.top = `${virus.y}px`
        virusElement.style.backgroundImage = `url('./coronavirus.png')`
        // virusElement.style.transform = "rotate(20deg)";
    }
    const fireVirus = (isWin) => (event) => {
        const virusElement = event.target;
        virusElement.style.transition = 'top 2s'
        virusElement.style.top = `${window.innerHeight}px`
        clearInterval(virusElement.interval)

        setTimeout(() => {
            document.body.removeChild(virusElement)

            const virus = document.querySelector('.virus')
            if (!virus) {
                const winningElement = document.querySelector('.winning')
                winningElement.style.opacity = 1
                isWin.win = true
            }
        }, 2000)
    }

    const run = () => {
        let isWin = {win:false}
        const viruses = createviruses()
        const virusElements = viruses.map(setupvirusElement)

        virusElements.forEach(({virus, virusElement}) => {
            virusElement.interval = setInterval(() => moveVirus(virusElement, virus), 100)
            virusElement.addEventListener('click', fireVirus(isWin))
        })

        setInterval(() => {
            if (isWin.win) {
                return
            }
            const viruses = createviruses()
            const virusElements = viruses.map(setupvirusElement)

            virusElements.forEach(({virus, virusElement}) => {
                virusElement.interval = setInterval(() => moveVirus(virusElement, virus), 100)
                virusElement.addEventListener('click', fireVirus(isWin))
            })
        }, 7000)
    }
    run()
})()
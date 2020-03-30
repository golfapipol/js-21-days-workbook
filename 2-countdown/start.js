(() => {
    const SECOND = 1000
    const MINUTE = SECOND * 60
    const HOUR = MINUTE * 60
    const DAY = HOUR * 24

    const setInnerText = (id, text) => {
        const element = document.getElementById(id)
        element.innerText = text
    }

    const countdown = () => {
        const now = new Date().getTime()
        const olympic = new Date('July 22 2021 23:59:59').getTime()
        const unixTimeLeft = olympic - now;
        setInnerText("days", Math.floor(unixTimeLeft / DAY))
        setInnerText("hours", Math.floor(unixTimeLeft % DAY / HOUR))
        setInnerText("minutes", Math.floor(unixTimeLeft % HOUR / MINUTE))
        setInnerText("seconds", Math.floor(unixTimeLeft % MINUTE / SECOND))
    }

    const run = () => {
        countdown()
        setInterval(countdown, SECOND)
    }

    run()
})()
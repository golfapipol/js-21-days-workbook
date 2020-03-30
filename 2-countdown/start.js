(() => {
    const SECOND = 1000
    const MINUTE = SECOND * 60
    const HOUR = MINUTE * 60
    const DAY = HOUR * 24

    const countdown = () => {
        const now = new Date().getTime()
        const olympic = new Date('July 22 2021 23:59:59').getTime()
        const unixTimeLeft = olympic - now;
        const daysElement = document.getElementById("days")
        daysElement.innerText = Math.floor(unixTimeLeft / DAY)
        const hoursElement = document.getElementById("hours")
        hoursElement.innerText = Math.floor(unixTimeLeft % DAY / HOUR)
        const minutesElement = document.getElementById("minutes")
        minutesElement.innerText = Math.floor(unixTimeLeft % HOUR / MINUTE)
        const secondsElement = document.getElementById("seconds")
        secondsElement.innerText = Math.floor(unixTimeLeft % MINUTE / SECOND)
    }

    const run = () => {
        countdown()
    }

    run()
})()
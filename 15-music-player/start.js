(() => {
    const audioElement = document.querySelector('audio')
    const playElement = document.querySelector('.play')
    const progressBarElement = document.querySelector('.progress-bar')
    const startTimeElement = document.querySelector('.start-time')
    const endTimeElement = document.querySelector('.end-time')

    const onClick = () => {
        if (audioElement.paused) {
            audioElement.play()
            playElement.className = 'pause'
        } else {
            audioElement.pause()
            playElement.className = 'play'
        }
        
    }

    const getDuration = (time) => {
        const minutes = Math.floor(time / 60 % 60).toString()
        const seconds = Math.floor(time % 60).toString().padStart(2, '0')
        return `${minutes}:${seconds}`
    }

    const onTimeUpdate = () => {
        startTimeElement.innerHTML = getDuration(audioElement.currentTime)
        progressBarElement.value = audioElement.currentTime
    }

    const onLoadedData = () => {
        endTimeElement.innerHTML = getDuration(audioElement.duration)
        progressBarElement.max = audioElement.duration
    }

    const onInput = () => {
        audioElement.currentTime = progressBarElement.value
    }

    const onEnded = () => {
        playElement.className = 'play'
        audioElement.currentTime = 0
    }

    const run = () => {
        playElement.addEventListener('click', onClick)
        audioElement.addEventListener('timeupdate', onTimeUpdate)
        audioElement.addEventListener('loadeddata', onLoadedData)
        audioElement.addEventListener('ended', onEnded)

        progressBarElement.addEventListener('input', onInput)
    }

    run()
})()
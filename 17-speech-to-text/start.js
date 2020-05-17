(() => {
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

    const recognition = new window.SpeechRecognition()
    const buttonElement = document.querySelector('.control')

    const onClick = () => {
        const isPausing = buttonElement.classList.contains('record')

        if (isPausing) {
            recognition.start()
            buttonElement.classList.remove('record')
            buttonElement.classList.add('pause')
        } else {
            recognition.stop()
            buttonElement.classList.remove('pause')
            buttonElement.classList.add('record')
        }
        
    }

    const onEnd = () => {
        const isRecording = buttonElement.classList.contains('pause')
        if (isRecording) {
            recognition.start()
        }
    }

    const onResult = (event) => {
        const textElement = document.querySelector('.text')
        const {transcript} = event.results[0][0]
        textElement.innerText += transcript
    }

    const run = () => {
        recognition.lang = 'th-TH'
        recognition.addEventListener('result', onResult)
        recognition.addEventListener('end', onEnd)
        buttonElement.addEventListener('click', onClick)
    }

    run()
})()
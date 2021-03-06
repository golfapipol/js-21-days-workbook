(() => {
    const message = new SpeechSynthesisUtterance()

    const onVoicesChanged = () => {
        const voices = speechSynthesis.getVoices()
        const thVoice = voices.find(voice => voice.lang == 'th-TH')
        message.voice = thVoice
    }

    const onClick = (event) => {
        message.text = event.target.getAttribute('alt')
        speechSynthesis.speak(message)
    }

    const run = () => {
        speechSynthesis.addEventListener('voiceschanged', onVoicesChanged)

        const imgElements = Array.from(document.querySelectorAll('img'))
        imgElements.forEach((element) => {
            element.addEventListener('click', onClick)
        })
    }

    run()
})()
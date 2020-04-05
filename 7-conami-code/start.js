(() => {
    const konamiCodes = [
        'ArrowUp',
        'ArrowUp',
        'ArrowDown',
        'ArrowDown',
        'ArrowLeft',
        'ArrowRight',
        'ArrowLeft',
        'ArrowRight',
        'b',
        'a'
    ]

    let index = 0;

    const onKeyDown = ({key}) => {
        const listElements = document.querySelectorAll('.code li')
        console.log('keydowns', listElements)
        if (key == konamiCodes[index]) {
            listElements[index].className = 'active'
            index++
        } else {
            listElements.forEach(element => {
                element.className = ''
            });
            index = 0  
        }
        if (konamiCodes.length === index) {
            startSnowing()
        }
    }

    const run = () => {
        setup()
        document.addEventListener('keydown', onKeyDown)
    }

    run()
})();
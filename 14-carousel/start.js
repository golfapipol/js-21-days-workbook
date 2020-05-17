(() => {
    let currentIndex = 0
    
    const displayImage = (imageElements, targetIndex) => {
        console.log('scrolling')

        if (targetIndex < 0) {
            targetIndex = imageElements.length - 1 
        }
        if (targetIndex > imageElements.length -1 ) {
            targetIndex = 0
        }
        const newImage = imageElements[targetIndex]
        newImage.scrollIntoView({ behaviour: 'smooth' })
        currentIndex = targetIndex
    }
    const run = () => {
        const imageElements = document.querySelectorAll('img')
        const previousButtonElement = document.querySelector('.previous')
        const nextButtonElement = document.querySelector('.next')
        
        previousButtonElement.addEventListener('click', () => displayImage(imageElements, currentIndex - 1))
        nextButtonElement.addEventListener('click', () => displayImage(imageElements, currentIndex + 1))
    }

    run()
})()
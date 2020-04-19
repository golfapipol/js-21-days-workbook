(() => {
    const onScroll = (event) => {
        const sectionElements = Array.from(document.querySelectorAll('section'))
        sectionElements.forEach((sectionElement) => {
            const imgElement = sectionElement.querySelector('img')
            const textElement = sectionElement.querySelector('.text')

            const scrollPosition = window.pageYOffset;
            const revealPosition = imgElement.offsetTop + imgElement.offsetHeight / 10;

            if(scrollPosition >= revealPosition) {
                textElement.classList.add('reveal')
            }
        })
    }
    const run = () => {
        document.addEventListener('scroll', onScroll)
    }

    run()
})()
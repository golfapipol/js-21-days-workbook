(() => {
    let originalScrollY = window.scrollY
    const onScroll = () => {
        const moonElement = document.querySelector('.moon')
        const wishElement = document.querySelector('.wish')
        const marioElement = document.querySelector('.mario')
        
        moonElement.style.transform = `translate(${window.scrollY * 0.7}%, ${window.scrollY * -0.7}%)`
        wishElement.style.transform = `translateY(${window.scrollY * -1.2}%)`
        marioElement.style.transform = `translateX(${window.scrollY * 1.2}%)`
    }

    const run = () => {
        document.addEventListener('scroll', onScroll)
    }

    run();
})()
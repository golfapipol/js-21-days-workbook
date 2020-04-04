(()=> {
    const canvas = document.getElementById("painting")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const context = canvas.getContext('2d')

    let previousPoint = {x:0, y:0}

    const onMouseMove = ({pageX, pageY}) => {
        const currentPoint = { x:pageX, y:pageY}
        context.beginPath()
        context.lineCap = 'round'
        context.lineJoin = 'round'
        context.lineWidth = 40
        context.strokeStyle = `rgba(222,10,109,0.8)`

        context.moveTo(previousPoint.x,previousPoint.y)
        context.lineTo(currentPoint.x, currentPoint.y)
        context.stroke()
        context.closePath()
        previousPoint = currentPoint
    }

    const onMouseEnter = ({pageX, pageY}) => {
        previousPoint.x = pageX
        previousPoint.y = pageY
    }

    const run = () => {
        canvas.addEventListener('mouseenter', onMouseEnter)
        canvas.addEventListener('mousemove', onMouseMove)
    }
    run()
})()
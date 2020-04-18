(() => {
    let draggingElement

    const onDragStart = (event) => {
        draggingElement = event.target
    }
    const onDrop = (event)=>{
        event.currentTarget.append(draggingElement)
        draggingElement = null
    }
    const onDragOver = (event) => {
        event.preventDefault()
    }
    const onDragEnter = (event) => {
        event.preventDefault()
    }
    const run = () => {
        const taskElements = Array.from(document.querySelectorAll('.task'))
        const dropZoneElements = Array.from(document.querySelectorAll('.drop-zone'))

        taskElements.forEach((taskEle) => {
            taskEle.addEventListener('dragstart', onDragStart)
        })

        dropZoneElements.forEach((dropzoneEle) => {
            dropzoneEle.addEventListener('drop', onDrop)
            dropzoneEle.addEventListener('dragover', onDragOver)
            dropzoneEle.addEventListener('dragenter', onDragEnter)
        })
    }

    run()
})()
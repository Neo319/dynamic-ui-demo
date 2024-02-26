// module for creating a sliding image carousel given a div of id 'carouselContainer'
// div must contain another div of id 'slider', with images of class 'carouselImg'

const carousel = function () {
    console.log('carousel ready!')

    const container = document.getElementById('carouselContainer')
    const slider = document.getElementById('slider')
    slider.classList.add('transition')
    const allImages = document.getElementsByClassName('carouselImg')

    let currentImage = 0 // the index of the image currently displayed
    const imageCount = allImages.length - 1 // the number of images that can be scrolled through

    

    const tabs = document.createElement('div')
    tabs.id = 'tabs'

    const leftButton = document.createElement('button')
    leftButton.textContent = '<-'
    tabs.appendChild(leftButton)
    leftButton.id = 'leftButton'

    //create a menu of divs that appear as circles to cycle through images 
    for (let i = 0; i <= imageCount; i++) {
        const newDivContainer = document.createElement('div')
        const newDiv = document.createElement('div')
        newDivContainer.appendChild(newDiv)
        newDiv.classList.add('tabCircle')

        newDivContainer.addEventListener('click', () => {
            currentImage = i // the displayed image index is stored
            changeImage(currentImage) // the image is changed
        })

        tabs.appendChild(newDivContainer)
    }

    const rightButton = document.createElement('button')
    rightButton.textContent = '->'
    tabs.appendChild(rightButton)
    rightButton.id = 'rightButton'


    container.after(tabs) //tabs are appended after the slider container

    



    // a dot that indicates which image is currently displayed
    const dot = document.createElement('div')
    dot.id = 'dot'
    dot.classList.add('transition')


    const firstCircle = document.querySelector('.tabCircle')
    console.log(firstCircle)
    firstCircle.appendChild(dot) // default positioning is inside the first circle
    

    
    function changeImage (index) {
        console.log(`selecting ${index}`)
        //changing image logic
        const imageWidth = allImages[currentImage].offsetWidth
        slider.style.transform = `translateX(${-imageWidth * currentImage}px)`

        //moving dot logic
        const circleGap = 24 //the distance to move by one circle, in px
        dot.style.transform = `translateX(${circleGap * currentImage}px)` 

        scroller() // looping the scroll on image change
    }

    // use timeout to scroll image every five seconds
    let scrollTimer
    
    function scroller () {
        clearTimeout(scrollTimer) // clear timeout to pause when image is manually changed 

        scrollTimer = setTimeout(() => {
            if (currentImage < imageCount) {
                currentImage++
                changeImage(currentImage)
            } else {
                currentImage = 0
                changeImage(currentImage)
            }
        }, 5000)
    }
    scroller() // initiating the loop

    

    
}

export default carousel

// module for creating a sliding image carousel given a div of id 'carouselContainer'
// div must contain another div of id 'slider', with images of class 'carouselImg'

const carousel = function () {
    console.log('carousel ready!')

    const container = document.getElementById('carouselContainer')
    const slider = document.getElementById('slider')
    const allImages = document.getElementsByClassName('carouselImg')

    let currentImage = 0 // the index of the image currently displayed
    const imageCount = allImages.length - 1 // the number of images that can be scrolled through

    

    const tabs = document.createElement('div')
    tabs.id = 'tabs'

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

    container.after(tabs) //tabs are appended after the slider container

    // a dot that indicates which image is currently displayed
    const dot = document.createElement('div')
    dot.id = 'dot'

    const firstCircle = document.querySelector('.tabCircle')
    console.log(firstCircle)
    firstCircle.appendChild(dot) // default positioning is inside the first circle
    
    

    
    function changeImage (index) {
        console.log(`selecting ${index}`)
        //changing image logic

        //moving dot logic
        const circleGap = 24 //the distance to move by one circle, in px
        dot.style.transform = `translateX(${circleGap * currentImage}px)` 
        
        dot.classList.add('transition')
    }
    


}

export default carousel

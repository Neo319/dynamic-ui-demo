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
        const newDiv = document.createElement('div')
        newDiv.classList.add('tabCircle')

        newDiv.addEventListener('click', () => {
            console.log(`selecting image ${i}`)
            currentImage = i // the displayed image index is stored
            changeImage(currentImage) // the image is changed
        })
        tabs.appendChild(newDiv)
    }

    // a dot that indicates which image is currently displayed
    const dot = document.createElement('div')
    dot.id = dot
    
    container.after(tabs)

    
    function changeImage (index) {
        //changing image logic

        //moving dot logic
    }
    


}

export default carousel

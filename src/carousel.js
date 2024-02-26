// module for creating a sliding image carousel given a div of id 'carouselContainer'
// div must contain another div of id 'slider', with images of class 'carouselImg'

const carousel = function () {
    console.log('carousel ready!')

    const container = document.getElementById('carouselContainer')
    const slider = document.getElementById('slider')
    const allImages = document.getElementsByClassName('carouselImg')

    let currentImage = 0 // the index of the image currently displayed
    const imageCount = allImages.length - 1 // the number of images that can be scrolled through



    // function right () {
    //     // set a class on div #slider that activates a CSS animation, then remove it with a timeout 
    //     console.log('sliding right')
    //     if (currentImage !== imageCount) { // if not scrolled to the far right
    //         currentImage++
    //         console.log(currentImage)
            
    //         const imageWidth = allImages[currentImage].offsetWidth 
    //         slider.classList.add('sliding-right') //used to trigger an animation
    //         slider.style.transform = `TranslateX(${-imageWidth * currentImage}px)`

    //     } else {
    //         console.log('too far right') // will be animated
    //     }
    // }
    
    // //button to move right
    // const rightBtn = document.createElement('button')
    // rightBtn.textContent = '>' // temp styling
    // rightBtn.addEventListener('click', right)

    // container.appendChild(rightBtn)

    const tabs = document.createElement('div')
    tabs.id = 'tabs'

    //create a menu of divs that appear as circles to cycle through images 
    for (let i = 0; i <= imageCount; i++) {
        const newDiv = document.createElement('div')
        newDiv.classList.add('tabCircle')
        tabs.appendChild(newDiv)
    }


    container.after(tabs)

    


}

export default carousel

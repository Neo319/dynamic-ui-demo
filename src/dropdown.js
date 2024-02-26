// module for creating a dropdown menu, given a div of class 'dropdown'.

const dropdown = function () {
  const mainDiv = document.getElementsByClassName('dropdown')[0]

  const hoverDiv = document.createElement('div') // the element which the user hovers over
  const menu = document.createElement('div') // the list which is rendered on hover
  const container = document.createElement('div')
  container.id = 'dropDownContainer'

  //the contents of hoverDiv
  hoverDiv.style = "border: 1px solid gray; width: 250px;" // editable
  mainDiv.style = "width: 250px;"
  hoverDiv.classList.add ('dropdown') // for CSS declarations
  menu.style = "width: 250px" //editable
  hoverDiv.textContent = '...'
  
  
  //fleshing out the contents of the list 
  const menuList = document.createElement('ul')
  
  const one = document.createElement('li')
  one.classList.add('listItem')
  one.textContent = "First List Item" // editable
  menuList.appendChild(one)

  const two = document.createElement('li')
  two.classList.add('listItem')
  two.textContent = "Second List Item"
  menuList.appendChild(two)

  const three = document.createElement('li')
  three.classList.add('listItem')
  three.textContent = "Third List Item"
  menuList.appendChild(three)

  menuList.style = " display: flex; flex-direction: column; margin: 0; border: 1px solid gray; width: 250px;"

  menu.appendChild(menuList)


  //dropdown menu function
  menu.classList.add('menu')
  menu.classList.add('slide-down') // defining CSS class for sliding animation
  menu.style.display = 'none' // the menu is hidden

  container.addEventListener('mouseenter', function slideDown () {
    console.log('hover detected')
    menu.style.display = 'flex' // the menu is displayed rather than hidden
    menu.classList.add('active') //animation is triggered
  })

    container.addEventListener('mouseleave', function hide () {
      console.log('hover exit')
      menu.style.display = 'none' // the menu is hidden
      menu.classList.remove('active') 
    })
  

  container.appendChild(hoverDiv)
  container.appendChild(menu)

  mainDiv.appendChild(container)
}



export default dropdown

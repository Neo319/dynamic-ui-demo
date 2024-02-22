// module for creating a dropdown menu, given a div of class 'dropdown'.

const dropdown = function () {
  console.log("dropdown ready!")

  const mainDiv = document.getElementsByClassName('dropdown')[0]
  console.log(mainDiv)

  const hoverDiv = document.createElement('div') // the element which the user hovers over
  const menu = document.createElement('div') // the list which is rendered on hover

  //the contents of hoverDiv
  hoverDiv.style = "border: 1px solid gray; width: 250px;"
  hoverDiv.textContent = '...'
  
  
  //fleshing out the contents of the list 
  const menuList = document.createElement('ul')
  
  const one = document.createElement('li')
  one.textContent = "First List Item" // editable
  menuList.appendChild(one)

  const two = document.createElement('li')
  two.textContent = "Second List Item"
  menuList.appendChild(two)

  const three = document.createElement('li')
  three.textContent = "Third List Item"
  menuList.appendChild(three)

  menu.appendChild(menuList)








  mainDiv.appendChild(hoverDiv)
  mainDiv.appendChild(menu)

  
}



export default dropdown

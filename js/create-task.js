const addTaskButton = document.getElementById('create-task')
const listTask = document.getElementById('list-task')

addTaskButton.onclick = () => {
  let task = document.createElement('div')
  let taskTitle = document.createElement('h1')
  let sectionLine1 = document.createElement('hr')
  let description = document.createElement('p')
  let sectionLine2 = document.createElement('hr')
  
  let buttonSection = document.createElement('section')
  
  let buttonRed = document.createElement('button')
  let imageButtonRed = document.createElement('img')
  imageButtonRed.setAttribute('src', '/assets/SVGs/close-black-48dp.svg')
  buttonRed.appendChild(imageButtonRed)

  let buttonGreen = document.createElement('button') 
  let imageButtonGreen = document.createElement('img')
  imageButtonGreen.setAttribute('src', '/assets/SVGs/done-black-48dp.svg')
  buttonGreen.appendChild(imageButtonGreen)

  buttonRed.classList.add('red-button')
  buttonGreen.classList.add('green-button')

  buttonSection.appendChild(buttonGreen)
  buttonSection.appendChild(buttonRed)

  taskTitle.innerHTML = 'Lorem, ipsum dolor.'
  description.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quam sit consectetur libero dolorem alias enim fugiat ex blanditiis dicta nisi exercitationem nostrum rerum soluta, numquam incidunt quaerat necessitatibus ducimus.'

  task.appendChild(taskTitle)
  task.appendChild(sectionLine1)
  task.appendChild(description)
  task.appendChild(sectionLine2)
  task.appendChild(buttonSection)

  task.classList.add('task')

  listTask.appendChild(task)
}

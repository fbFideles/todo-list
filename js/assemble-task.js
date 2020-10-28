const assembleTask = (elementTask) => {
  const { _id, title, description } = elementTask
  
  let task = document.createElement('div')

  let taskTitle = document.createElement('h1')
  let sectionLine1 = document.createElement('hr')
  let taskDescription = document.createElement('p')
  let sectionLine2 = document.createElement('hr')
  
  let buttonSection = document.createElement('section')
  
  let buttonRed = document.createElement('button')
  let imageButtonRed = document.createElement('img')
  imageButtonRed.setAttribute('src', 'assets/SVGs/close-black-48dp.svg')
  buttonRed.appendChild(imageButtonRed)

  let buttonGreen = document.createElement('button') 
  let imageButtonGreen = document.createElement('img')
  imageButtonGreen.setAttribute('src', 'assets/SVGs/done-black-48dp.svg')
  buttonGreen.appendChild(imageButtonGreen)

  buttonRed.classList.add('red-button')
  buttonGreen.classList.add('green-button')

  buttonSection.appendChild(buttonGreen)
  buttonSection.appendChild(buttonRed)

  taskTitle.innerHTML = title
  taskDescription.innerHTML = description

  task.appendChild(taskTitle)
  task.appendChild(sectionLine1)
  task.appendChild(taskDescription)
  task.appendChild(sectionLine2)
  task.appendChild(buttonSection)

  task.setAttribute('taskId', _id)
  task.classList.add('task')

  return task
}

const addTaskButton = document.getElementById('create-task')
const listTask = document.getElementById('list-task')

const modal = document.getElementById('create-task-modal')

addTaskButton.onclick = () => {
  modal.style.display = 'block'
}

apiData().then(data => {
  data.forEach(element => {
    const assembledTask = assembleTask(element.title, element.description)

    listTask.appendChild(assembledTask)
  })
})
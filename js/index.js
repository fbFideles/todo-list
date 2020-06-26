const addTaskButton = document.getElementById('create-task')
const listTask = document.getElementById('list-task')

addTaskButton.onclick = () => {
  console.log('adding')
}

apiData().then(data => {
  data.forEach(element => {
    const assembledTask = assembleTask(element.title, element.description)

    listTask.appendChild(assembledTask)
  })
})
const addTaskButton = document.getElementById('create-task')
const listTask = document.getElementById('list-task')

const modal = document.getElementById('create-task-modal')
const modalInput = document.getElementById('modalInput')
const modalTextarea = document.getElementById('modalTextArea')

const modalSubmitButton = document.getElementById('submitButton')
const modalCloseButton = document.getElementById('closeButton')

addTaskButton.onclick = () => {
  modal.style.display = 'block'
}

modalSubmitButton.onclick = () => {
  apiPostData(modalInput.value, modalTextarea.value)

  modalInput.value = ''
  modalTextarea.value = ''

  modal.style.display = 'none'
}

modalCloseButton.onclick = () => {
  modalInput.value = ''
  modalTextarea.value = ''

  modal.style.display = 'none'
}

apiGetData().then(response => {
  response.data.reverse()

  response.data.forEach(element => {
    const assembledTask = assembleTask(element.title, element.description)

    listTask.appendChild(assembledTask)
  })
})
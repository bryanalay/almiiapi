import './socketio.js'

const HOST_SOCKET = process.env.HOST_SOCKET

const socket = io(HOST_SOCKET)
console.log('este es host_socket de env ' + HOST_SOCKET)

const form = document.getElementById('form')
const input = document.getElementById('input')
const messages = document.getElementById('messages')

socket.on('message', (msg) => {
  if (typeof msg == 'object') {
    msg = msg.data
  }
  const item = `<li>${msg}</li>`
  messages.insertAdjacentHTML('beforeend', item)
})

socket.on('disconnect ', (msg) => {
  console.log(msg + ' desconectado del server')
})

form.addEventListener('submit', (e) => {
  e.preventDefault()

  if (input.value) {
    socket.emit('message', input.value)
    input.value = ''
  }
})

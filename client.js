const socket = io('http://localhost:5000')

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector('.container')

const name = propmt("enter your name to join")
socket.emit('new-user-joined',name)

socket.on('user-joined',name =>{
    append(`${name} joined the chat`,'right')
})

socket.on('receive',data =>{
    append(`${data.message} :${data.user}`,'left')
})

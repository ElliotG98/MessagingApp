(function connect(){
  let socket = io.connect('http://localhost:3000')

  //capture index.ejs page data
  let username = document.querySelector('#username')
  let usernameBtn = document.querySelector('#usernameBtn')
  let currentUsername = document.querySelector('.card-header')

  //When the usernameBtn is clicked emit to server with username value and reset
  usernameBtn.addEventListener('click', e => {
    console.log(username.value)
    socket.emit('change_username', {username: username.value})
    currentUsername.textContent = username.value
    username.value = ''
  })
})()

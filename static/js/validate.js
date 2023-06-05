//@charset "UTF-8";
const buttonLogin = document.querySelector('.btn-login')
const inputUser = document.querySelector('#user')
const inputPassword = document.querySelector('#password')

window.addEventListener('load', function() {
  const userLogin = this.localStorage.getItem('login')

  if(userLogin) {
   this.setTimeout(() => {
    window.location.pathname = '/home'
   }, 1000)
  }
});

buttonLogin.addEventListener('click', () => {
  if(inputUser.value && inputPassword.value) {
    console.log('enter')
    localStorage.setItem('login', inputUser.value)
    window.location.pathname = '/home'
    return
  }
  alert('ocorreu um erro, tente novamente')
})

function dofucntion(){
var username = document.getElementById("username");
var password = document.getElementById("password");
localStorage.setItem('name',`${username}`);
localStorage.setItem('password', password);
console.log(localStorage.getItem('password'));
}
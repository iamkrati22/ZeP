console.log("hello")
function doFunction(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
var email = document.getElementById("email").value;
var result = test(password);
console.log(username);
localStorage.setItem('name',username);
localStorage.setItem('password', password);
localStorage.setItem('result', result);
console.log(localStorage.getItem('password'));
}
function test(test_pass){
   var len = test_pass.length; var sum = 0;
   for(var i = 1; i < len; i++){
        sum+= test_pass.charCodeAt(i-1)^test_pass.charCodeAt(i);
   }
   return sum;
}
function runtest(){
    var enteredPass = document.getElementById("inputPass").value;
    var enteredEmail = document.getElementById("inputEmail").value;
    if(test(enteredPass) == localStorage.getItem('result'))
    alert("correct Pass");
    else
    alert("Incorrect email or password");

}
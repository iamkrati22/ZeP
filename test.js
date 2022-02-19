/*function acclocal(){if (typeof localStorage === "undefined" || localStorage === null) {

  }
  
  
}*/
import { LocalStorage } from 'node-localstorage';
localStorage = new LocalStorage('./scratch');
var stringOfArrays = localStorage.getItem("savedArray");  
document.getElementById("test").innerHTML = stringOfArrays.split(",").toString();

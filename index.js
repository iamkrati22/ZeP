
import { Web3Storage, getFilesFromPath } from 'web3.storage'
import { File } from 'web3.storage'
import request from 'request'
import { LocalStorage } from "node-localstorage";
global.localStorage = new LocalStorage('./scratch');
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGVFNkMxNjFENWUyRkZmMEIxQUM0QzY1OTdmZkQzRTE3Yjg4NGIyNTYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NDUwNTIzOTAzMzYsIm5hbWUiOiJUcmFpbC0yIn0.PFnsHED6kjlHaIVFSE7Yc6tFmW5ktqelkuSDM7DuIZw";
const client = new Web3Storage({ token });
var myArray = [];
localStorage.setItem('savedArray', myArray); 


//Express App Creation
import express from "express";
import path from "path";
import bodyParser from 'body-parser';
const __dirname = path.resolve();
const app = express();
const port = process.env.PORT || "8000";
app.set("views", path.join(__dirname, "views"));
app.use(express.static(`${__dirname}/public`));
//app.use(express.bodyParser());
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.sendFile('./views/login.html', { root: __dirname });
});
app.post('/home', function (req, res) {
  if(localStorage.getItem('logged') === "true")
  res.sendFile('./views/index.html', { root: __dirname });
  else
  res.send("Incorrect Password Entered");
});
app.post('/home/files', function (req, res) {
  console.log(req.body);
  var username = req.body.username;
  var password = req.body.password;
  var obj = [{
    "username ": `${username}`,
    "password": `${password}`
  }];
  console.log(obj);
  const files = makeFileObjects(obj);
  storeFiles(files);

});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
//JS-DOM extraction

import { JSDOM } from 'jsdom';
const dom = new JSDOM("./index.html", { runScripts: "dangerously" });

//Making the Object 
function makeFileObjects(obj) {

  const buffer = Buffer.from(JSON.stringify(obj));

  const files = [
    new File(['contents-of-file-1'], 'plain-utf8.txt'),
    new File([buffer], 'data.json')
  ]
  return files
}
//makeFileObjects({ hello: 'world' });




//Storing files from the object to the database
async function storeFiles(files) {

  const cid = await client.put(files);
  console.log('stored files with cid:', cid);
  const urlLink = `https://${cid}.ipfs.dweb.link/data.json`;
  console.log(urlLink);
  request(urlLink, function (error, response, body) {
    //console.error('error:', error); // Print the error if one occurred
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log(body);
    console.log(typeof body);


    if (localStorage.getItem("savedArray") != null)
    console.log("Lc" + typeof(localStorage.getItem("savedArray")));   
    myArray.push(urlLink);
    localStorage.setItem("savedArray",myArray);
    console.log(localStorage.getItem("savedArray"));
    console.log(localStorage.getItem('savedArray').length);
    console.log(localStorage.getItem('myObj'));
    app.get("/files", (req, res) => {
      res.send(body);
    });
    app.get("/ABCD", (req,res) =>{
      var arr=[]
      var display="";
      var i=0;
      arr = localStorage.getItem('savedArray');
      var len = arr.split(",").length;
      var newarr= [];
      newarr=  arr.split(",");
      for(i=0;i<len;i++){
        display+=`<a href= "${newarr[i]}">${i+1} Link </a><br>`;
      }
      // res.render("./views/files",{arr: arr} );
      res.send(display);
    })

  });

  
}

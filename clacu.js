var screen=document.querySelector('#screen');
var btn=document.querySelectorAll('.btn');

for(item of btn)
{
    item.addEventListener('click',(e)=>{
        btntext=e.target.innerText;
        screen.value+=btntext;
    });
}

function sin(){
    screen.value = Math.sin(screen.value)
}

function sin1(){
    screen.value = Math.asin(screen.value)
}

function cos(){
    screen.value = Math.cos(screen.value)
}

function cos1(){
    screen.value = Math.acos(screen.value)
}

function tan(){
    screen.value = Math.tan(screen.value)
}

function tan1(){
    screen.value = Math.atan(screen.value)
}


function pow(){
    screen.value = Math.pow(screen.value,2)
}

function csc(){
    screen.value = 1 / Math.sin(screen.value,2)
}

function sec(){
    screen.value = 1 / Math.cos(screen.value)
}

function cot(){
    screen.value = Math.cot(screen.value)
}

function sqrt(){
    screen.value = Math.sqrt(screen.value,2)
}

function log(){
    screen.value = Math.log(screen.value)
}

function log2(){
    screen.value = Math.log2(screen.value)
}

function tanh(){
    screen.value = Math.tanh(screen.value)
}

function in1(){
    screen.value = Math.log10(screen.value)
}

function pi(){
    screen.value *=3.14159265359
}

function e(){
    screen.value *=2.71828182846 
}

function fact(){

    var i,num,f;
    f=1;
    num=screen.value;
    for (i = 1; i <= num ; i++){
        f=f*i;     
    }
    i=i-1;
    screen.value =f;
}

function backspace(){
    screen.value =screen.value.substring(0,screen.value.length-1) 
}

function abs(){
    screen.value = Math.abs(screen.value)
}

function rand(){
    screen.value = Math.random(screen.value)
}

function round(){
    screen.value = Math.round(screen.value)
}

function cube(){
    screen.value = Math.cbrt(screen.value)
}

function ceil(){
    screen.value = Math.ceil(screen.value)
}

function floor(){
    screen.value = Math.floor(screen.value)
}

function exp(){
    screen.value = Math.exp(screen.value)
}

function signChange() {
    var plus = screen.value;
    var nem = plus * -1;
    screen.value = nem;
}

function x(){
    var i,num,f;
    f=1;
    num=screen.value;
    for (i = 1; i <= num ; i++){
        f=f*10;     
    }
    i=i-1;
    screen.value =f;
}

function abs1(){
    screen.value = Math.abs(screen.value,2)
}

function deg(degrees)
{
  screen.value = (degrees * Math.PI) / 180.0;
}

function fe()
{
  screen.value = (screen.value - 32) / 1.8;
}


const ms = [];
var index = 0;
function memory(x) {
  if (x == "m+") {
    ms.push(parseInt(screen.value));
    screen.value = "";
  } else if (x == "m-") {
    let temp = "-" + screen.value;
    ms.push(parseInt(temp));
    screen.value = "";
  } else if (x == "mc") {
    ms.splice(0, ms.length);
    screen.value = "";
  } else if (x == "mr") {
    var sum = ms.reduce(function (a, b) {
      return a + b;
    }, 0);
    screen.value = sum;
  } else if (x == "ms") {
    if (ms.length == 0) {
      alert("Nothing is stored in memory");
    } else {
      index %= ms.length;
      screen.value = ms[index];
      index++;
    }
  }
}



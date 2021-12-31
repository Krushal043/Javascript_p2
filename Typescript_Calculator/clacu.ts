export{}
let screen=(document.querySelector('#screen')as HTMLInputElement);
let btn=document.querySelectorAll('.btn');

function numTostr() {
    return parseInt(screen.value);
  };

//Dispaly Value
for( let item of btn as any)
{
    
    item.addEventListener('click',(e) => {
        let event = e.target as HTMLButtonElement
        let btntext:string= event.innerText;
        screen.value+=btntext;
    });
}

//sin
function sin(){
    screen.value = String(Math.sin(numTostr()))
}

//asin
function sin1(){
    screen.value = String(Math.asin(numTostr()))
}

//cos
function cos(){
    screen.value = String(Math.cos(numTostr()))
}

//acos
function cos1(){
    screen.value = String(Math.acos(numTostr()))
}

//tan
function tan(){
    screen.value = String(Math.tan(numTostr()))
}

//atan
function tan1(){
    screen.value = String(Math.atan(numTostr()))
}

//power
function pow(){
    screen.value = String(Math.pow(numTostr(),2))
}

//csc
function csc(){
    screen.value = String(1 / Math.sin(numTostr()))
}

//seccos
function sec(){
    screen.value = String(1 / Math.cos(numTostr()))
}

//squre root
function sqrt(){
    screen.value = String(Math.sqrt(numTostr()))
}

//logrithm
function log(){
    screen.value = String(Math.log(numTostr()))
}

//atan2
function tanh(){
    screen.value = String(Math.atan2(numTostr(),2))
}

//logrithm
function in1(){
    screen.value = String(Math.log(numTostr()))
}

//value of pi
function pi(){
    screen.value =String(3.14159265359)
}

//value of e
function e(){
    screen.value =String(2.71828182846) 
}

//Fact
function fact(i:number,num:number,f:number){
    f=1;
    num=numTostr();
    for (i = 1; i <= num ; i++){
        f=f*i;     
    }
    i=i-1;
    screen.value =String(f);
}

//clear[CE]
function backspace(){
    screen.value =screen.value.substring(0,screen.value.length-1) 
}

//abs
function abs(){
    screen.value = String(Math.abs(numTostr()))
}

//round
function round(){
    screen.value = String(Math.round(numTostr()))
}

//ceil
function ceil(){
    screen.value = String(Math.ceil(numTostr()))
}

//floor
function floor(){
    screen.value = String(Math.floor(numTostr()))
}

//exp
function exp(){
    screen.value = String(Math.exp(numTostr()))
}

//+-
function signChange(plus:number) {
    var plus = numTostr();
    var nem = plus * -1;
    screen.value = String(nem);
}

//fatorial
function x(fact:number,num:number,i:number){
    fact=1;
    num=numTostr();
    for (i = 1; i <= num ; i++){
        fact=fact*10;     
    }
    i=i-1;
    screen.value =String(fact);
}

//abs2
function abs1(){
    screen.value = String(Math.abs(numTostr()))
}

//degeer to radians
function deg(degrees:number)
{
    screen.value = String((degrees * Math.PI) / 180.0);
}

//fahrenheit to celsius
function fe()
{
    screen.value =String( (numTostr() - 32) / 1.8);
}

//Memory fuction
const ms = [];
let index = 0;
function memory(x:string) 
{
    //M+
    if (x == "m+") {
        ms.push(numTostr());
        screen.value = "";
    } 

    //M-
    else if (x == "m-") {
        let temp = "-" + screen.value;
        ms.push(parseInt(temp));
        screen.value = "";
    } 

    //MC Memory clear
    else if (x == "mc") {
        ms.splice(0, ms.length);
        screen.value = "";
    }
    
    //MR Memory Recall
    else if (x == "mr") {
        var sum = ms.reduce(function (a, b) {
        return a + b;
        }, 0);
        screen.value = sum;
    }
    
    //MS Memory Storage
    else if (x == "ms") {
        if (ms.length == 0) {
        alert("Nothing is stored in memory");
    } 
    else {
        index %= ms.length;
        screen.value = ms[index];
        index++;
    }
    }
}


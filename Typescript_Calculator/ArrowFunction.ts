export{}
let screen=(document.querySelector('#screen')as HTMLInputElement);
let btn=document.querySelectorAll('.btn');

let strTonum  = () => {
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
let sin = () => {
    screen.value = String(Math.sin(strTonum()))
}

//asin
let sin1 = () => {
    screen.value = String(Math.asin(strTonum()))
}

//cos
let cos = () => {
    screen.value = String(Math.cos(strTonum()))
}

//acos
let cos1 = () => {
    screen.value = String(Math.acos(strTonum()))
}

//tan
let tan = () => {
    screen.value = String(Math.tan(strTonum()))
}

//atan
let tan1 = () => {
    screen.value = String(Math.atan(strTonum()))
}

//power
let pow = () => {
    screen.value = String(Math.pow(strTonum(),2))
}

//csc
let csc = () => {
    screen.value = String(1 / Math.sin(strTonum()))
}

//seccos
let sec = () => {
    screen.value = String(1 / Math.cos(strTonum()))
}

//squre root
let sqrt = () => {
    screen.value = String(Math.sqrt(strTonum()))
}

//logrithm
let log = () => {
    screen.value = String(Math.log(strTonum()))
}

//atan2
let tanh = () => {
    screen.value = String(Math.atan2(strTonum(),2))
}

//logrithm
let in1 = () => {
    screen.value = String(Math.log(strTonum()))
}

//value of pi
let pi = () => {
    screen.value =String(3.14159265359)
}

//value of e
let e = () => {
    screen.value =String(2.71828182846) 
}

//Fact
let fact = (i:number,num:number,f:number) => {
    f=1;
    num=strTonum();
    for (i = 1; i <= num ; i++){
        f=f*i;     
    }
    i=i-1;
    screen.value =String(f);
}

//clear[CE]
let backspace = () => {
    screen.value =screen.value.substring(0,screen.value.length-1) 
}

//abs
let abs = () => {
    screen.value = String(Math.abs(strTonum()))
}

//round
let round = () => {
    screen.value = String(Math.round(strTonum()))
}

//ceil
let ceil = () => {
    screen.value = String(Math.ceil(strTonum()))
}

//floor
let floor = () => {
    screen.value = String(Math.floor(strTonum()))
}

//exp
let exp = () => {
    screen.value = String(Math.exp(strTonum()))
}

//+-
let signChange = (plus:number) => {
    var plus = strTonum();
    var nem = plus * -1;
    screen.value = String(nem);
}

//fatorial
let x = (fact:number,num:number,i:number) => {
    fact=1;
    num=strTonum();
    for (i = 1; i <= num ; i++){
        fact=fact*10;     
    }
    i=i-1;
    screen.value =String(fact);
}

//abs2
let abs1 = () => {
    screen.value = String(Math.abs(strTonum()))
}

//degeer to radians
let deg = (degrees:number) =>
{
    screen.value = String((degrees * Math.PI) / 180.0);
}

//fahrenheit to celsius
let fe = () =>
{
    screen.value =String( (strTonum() - 32) / 1.8);
}

//Memory fuction
const ms = [];
let index = 0;
let memory = (x:string) =>
{
    //M+
    if (x == "m+") {
        ms.push(strTonum());
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
        var sum = ms.reduce((a, b) => {
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


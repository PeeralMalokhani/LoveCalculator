var male=prompt("entr the your favourite name");
var female=prompt("enter the your name ");
function LoveCounter(male,female){
var n=Math.random();
n=n*100;
n=Math.floor(n)+1;
console.log(female+"!"+male+" loves you "+n+"%");    
}
LoveCounter(male,female);

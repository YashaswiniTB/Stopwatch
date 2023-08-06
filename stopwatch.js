const timedisplay=document.querySelector("#timeDisplay");
const startbtn=document.querySelector("#startbtn");
const pausebtn=document.querySelector("#pausebtn");
const resetbtn=document.querySelector("#resetbtn");

let starttime=0;
let elapsedtime=0;
let currentitme=0;
let paused=true;
let intervalid;
let hrs=00;
let min=00;
let sec=00;

startbtn.addEventListener("click", () => {
    if(paused){
        paused=false;
        starttime=Date.now() - elapsedtime;
        intervalid=setInterval(update, 75);
    }
});
pausebtn.addEventListener("click", () => {
    if(!paused){
        paused=true;
        elapsedtime=Date.now() -starttime;
        clearInterval(intervalid);
    }
});
resetbtn.addEventListener("click", () => {
    
    paused=true;
    clearInterval(intervalid);
     starttime=0;
 elapsedtime=0;
 currentitme=0;
 hrs=00;
 min=00;
 sec=00;
timedisplay.textContent="00 : 00 : 00";

});

function update(){
    elapsedtime=Date.now() - starttime;
    sec=Math.floor((elapsedtime/1000 )% 60);
    min=Math.floor((elapsedtime/(1000 * 60))%60);
    hrs=Math.floor((elapsedtime/(1000 * 60*60))%60);
   sec=pad(sec); 
   min=pad(min);
   hrs=pad(hrs);     
timedisplay.textContent = `${hrs}:${min}:${sec}` ;

function pad(unit){
    return(("0")+unit).length > 2? unit :"0"+unit};
}

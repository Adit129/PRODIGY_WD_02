let seconds=0;
let minutes=0;
let hours=0;
let t;
let lapcount=1;
let isTimerRunning=false;

function add(){
    seconds++;
    if(seconds>=60){
        seconds=0;
        minutes++;
    
    if(minutes>=60){
        minutes=0;
        hours++;
    }
}
document.getElementById('display').innerHTML=(hours?(hours>9?hours:"0"+hours): "00")+":"+(minutes?(minutes>9?minutes:"0"+minutes):"00")+":"+(seconds>9?seconds:"0"+seconds);
timer();
}
function timer(){
    t=setTimeout(add,1000);
}
function start(){
    if(!isTimerRunning){
    timer();
    isTimerRunning=true;
    }
}
function stop(){
    clearTimeout(t);
}
function reset(){
  document.getElementById('display').innerHTML='00:00:00';
  seconds=0;
  minutes=0;
  hours=0;
  lapcount=1;
  isTimerRunning=false;
  clearLaps();
  clearTimeout(t);

}
function lap(){
    const laps=document.getElementById('laps');
    const li=document.createElement('li');
    li.innerText=`Lap ${lapcount}: ${formatTime()}`;
    laps.appendChild(li);
    lapcount++;
}
function clearLaps(){
    const laps=document.getElementById('laps');
    laps.innerHTML='';
}
function formatTime(){
    return (hours?(hours>9?hours:"0"+hours): "00")+":"+(minutes?(minutes>9?minutes:"0"+minutes):"00")+":"+(seconds>9?seconds:"0"+seconds);

}
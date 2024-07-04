let hrs =document.getElementsByClassName("hours")[0];
let min =document.getElementsByClassName("minutes")[0];
let sec =document.getElementsByClassName("seconds")[0];



setInterval(()=>{

    let currentTime= new Date();
hrs.innerHTML = (currentTime.getHours()<10? "0" : "") + currentTime.getHours();
min.innerHTML = (currentTime.getMinutes()<10? "0" : "") + currentTime.getMinutes();
sec.innerHTML = (currentTime.getSeconds()<10? "0" : "") + currentTime.getSeconds();

},1000)

// analog clock

const hrsHand = document.getElementById("hr-hand");
const minHand = document.getElementById("min-hand");
const secHand = document.getElementById("sec-hand");

function clockTick(){
    let currentTime= new Date();
    const sh = (currentTime.getSeconds() / 60);
    const mh = ((sh + currentTime.getMinutes() ) / 60);
    const hh = ((mh + currentTime.getHours()%12) / 12);

   rotateClockHand(secHand ,sh )
   rotateClockHand(minHand ,mh )
   rotateClockHand(hrsHand ,hh )

}

function rotateClockHand(ele,rotation){
    ele.style.setProperty('--rotate' ,rotation * 360);


}

setInterval(clockTick,1000);
clockTick();


// stopwatch
// Existing code...

// stopwatch
let getsec = 0;
let getmin = 0;
let gethr = 0;
let interval;

function stopwatch() {
    this.start = function() {
        const sh = document.getElementById("sw-hrs");
        const sm = document.getElementById("sw-min");
        const ss = document.getElementById("sw-sec");

        interval = setInterval(function() {
            getsec++;
            if (getsec < 10) {
                ss.innerText = "0" + getsec;
            } else {
                ss.innerText = getsec;
            }
            if (getsec >= 60) {
                getsec = 0;
                getmin++;
                if (getmin < 10) {
                    sm.innerText = "0" + getmin;
                } else {
                    sm.innerText = getmin;
                }
            }
            if (getmin >= 60) {
                getmin = 0;
                gethr++;
                if (gethr < 10) {
                    sh.innerText = "0" + gethr;
                } else {
                    sh.innerText = gethr;
                }
            }
        }, 1000);
    }

    this.stop = function() {
        clearInterval(interval);
    }

    this.reset = function() {
        clearInterval(interval);
        getsec = 0;
        getmin = 0;
        gethr = 0;
        document.getElementById("sw-hrs").innerText = "00";
        document.getElementById("sw-min").innerText = "00";
        document.getElementById("sw-sec").innerText = "00";
        document.getElementById("laps").innerHTML = "";
    }

    this.lap = function() {
        const lapsContainer = document.getElementById("laps");
        const lapTime = `${document.getElementById("sw-hrs").innerText} : ${document.getElementById("sw-min").innerText} : ${document.getElementById("sw-sec").innerText}`;
        const lapElement = document.createElement("div");
        lapElement.className = "lap-time";
        lapElement.innerText = lapTime;
        lapsContainer.appendChild(lapElement);
    }
}

let obj = new stopwatch();

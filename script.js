window.onload = function () {

  var seconds = 00;
  var tens = 00;
  var appendTens = document.getElementById("tens")
  var appendSeconds = document.getElementById("seconds")
  var buttonStart = document.getElementById('start');
  var buttonStop = document.getElementById('stop');
  var buttonReset = document.getElementById('reset');
  var minu=00;
  var appendMinu=document.getElementById("min");
  var hour=00;
  var appendHour=document.getElementById("hour")
  var Interval ;

  buttonStart.onclick = function() {

     clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
  }

    buttonStop.onclick = function() {
       clearInterval(Interval);
  }


  buttonReset.onclick = function() {
     clearInterval(Interval);
    tens = "00";
    seconds = "00";
    minu="00";
    hour="00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
    appendMinu.innerHTML=minu;

  }



  function startTimer(){
    tens++;

    if(tens<9)
    {
      appendTens.innerHTML="0"+tens;
    }

    if(tens>9)
    {
      appendTens.innerHTML=tens;
    }

    if(tens>=60)
    {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML="0"+seconds;
      tens=0;
      appendTens.innerHTML="0"+0;
    }

    if(seconds<9)
    {
      appendSeconds.innerHTML=seconds;
    }
    if(seconds>9)
    {
      appendSeconds.innerHTML="0"+seconds;
    }

    if(seconds>=60)
    {
      minu++;
      appendMinu.innerHTML="0"+minu;
      seconds=0;
      appendSeconds.innerHTML="0"+seconds;
      tens=0;
      appendTens.innerHTML="0"+tens;
    }

    if(minu>=60){
      hour++;
      appendHour.innerHTML="0"+hour;
      minu=0;
      appendMinu="0"+minu;
      seconds=0;
      appendSeconds="0"+seconds;
      tens=0;
      appendTens="0"+tens;
    }
  }

  }

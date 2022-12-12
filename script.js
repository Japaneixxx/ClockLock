document.getElementById("rt").addEventListener("click", realtime());

function checks() {
  const multiplyActive = false;
  //checks if real time is active
  if (document.getElementById("rt").checked == false) {
    return;
  } else {
    setTimeout(realtime(), 1000);
  }
  //Checks if MultiplyBy is active
}

function realtime() {
  const today = new Date();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const hour = hours < 10 ? "0" + hours : hours;
  const minute = minutes < 10 ? "0" + minutes : minutes;
  const time = hour + ":" + minute;
  document.getElementById("clock").value = time;
  console.log(time);
  if (document.getElementById("rt").checked == false) {
    return;
  } else {
    setTimeout(realtime, 1000);
  }
}

function test() {
  //gets clock value
  clock = document.getElementById("clock").value;
  //removes ":" from the value
  sanClock = clock.replace(":", "");
  console.log(clock);
  //checks the password inputed
  inptPswd = document.getElementById("password").value;
  const multVal = document.getElementById("mult").value;
  //return the status code
  /*
  if (multiplyActive == false) {
    MultVal = 1;
  }
*/
  if (document.getElementById("multiply").checked == false) {
    multiplyActive = false;
  } else {
    multiplyActive = true;
  }

  //

  if (multiplyActive == false) {
    if (inptPswd == sanClock) {
      console.log("sucesso");
      document.getElementById("clock2").innerHTML = "Senha Correta";
    } else if (inptPswd != sanClock) {
      console.log("falha");
      document.getElementById("clock2").innerHTML = "Senha Incorreta";
    }
  } else {
    if (multVal != null) {
      if (inptPswd == sanClock * multVal) {
        console.log("sucesso");
        document.getElementById("clock2").innerHTML = "Senha Correta";
      } else if (inptPswd != sanClock * multVal) {
        console.log("falha");
        document.getElementById("clock2").innerHTML = "Senha Incorreta";
      }
    } else return;
  }
  /*
  
    if (multiplyActive && document.getElementById("mult").value != null) {
      if (inptPswd == sanClock * document.getElementById("mult").value) {
        console.log("sucesso");
        document.getElementById("clock2").innerHTML = "Senha Correta";
      } else if (inptPswd != sanClock * document.getElementById("mult").value) {
        console.log("falha");
        document.getElementById("clock2").innerHTML = "Senha Incorreta";
      }
    } else if (
      multiplyActive == false ||
      document.getElementById("mult").value == null
    ) {
      if (inptPswd == sanClock) {
        console.log("sucesso");
        document.getElementById("clock2").innerHTML = "Senha Correta";
      } else if (inptPswd != sanClock) {
        console.log("falha");
        document.getElementById("clock2").innerHTML = "Senha Incorreta";
      }
    }
    */
}

function delay() {
    window.onload = function() {
      setTimeout(function() {
        document.getElementById("loading-page").style.display = "none";
      }, 3000);

      setTimeout(function() {
        document.getElementById("main-page").style.display = "initial";
      }, 3100);
    }
  }
  delay();

  function settingsdisplay(){
    var x = document.getElementById("settings-display");
    if (x.style.display === "none") {
      x.style.display = "block";
      const element = document.querySelector("#appBody");
      element.classList.add("stop-scroll");
    } else {
      x.style.display = "none";
      const element = document.querySelector("#appBody");
      element.classList.remove("stop-scroll");
    }
  }

  function settingsbutton1() {

    var x = document.getElementById("button-s-1");
    var y = document.getElementById("button-settings-1");

    if (x.style.right === "60%") {
      x.style.right = "0%";
      x.style.backgroundColor = "#524e4d";
      y.style.background = "#008B69";
    } else {
      x.style.right = "60%";
      x.style.backgroundColor = "#444140";
      y.style.backgroundColor = "#A1A1A1";
    }
  }
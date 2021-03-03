move();
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

function move() {
    var elem = document.getElementById("myBar");   
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        width = slider.value;
      if (width >= 100) {
        width = 99;
      }
        width++; 
        elem.style.width = width + '%'; 
    }
  }

  var numb = [];

  function save() {
      numb.push(slider.value);
      console.log(numb);
    }

  function show() {
      document.getElementById("result").innerHTML = numb;
    }
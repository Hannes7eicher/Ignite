/*
References for these codes:
https://itp.nyu.edu/physcomp/labs/labs-serial-communication/lab-serial-input-to-the-p5-js-ide/
https://itp.nyu.edu/physcomp/labs/labs-serial-communication/lab-serial-input-to-the-p5-js-ide/
*/

var serial; // variable to hold an instance of the serialport library
var portName = 'COM6'; // fill in your serial port name here
var inData; // variable to hold the input data from Arduino
var newData;
let width = 1;
var anger;

var angerHistory = [];


function setup() {

  //set up communication port
  serial = new p5.SerialPort(); // make a new instance of the serialport library
  serial.on('list', printList); // set a callback function for the serialport list event
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen); // callback for the port opening
  serial.on('data', serialEvent); // callback for when new data arrives
  serial.on('error', serialError); // callback for errors
  serial.on('close', portClose); // callback for the port closing

  serial.list(); // list the serial ports
  serial.open(portName); // open a serial port
}




move();
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
}

function move() {
  var elem = document.getElementById("myBar");
  var id = setInterval(frame, 1);

  function frame() {
    width = slider.value;
    elem.style.width = width + "%";
  }
}

var slider = document.getElementById("myRange");
var output = document.getElementById("slide");
//output.innerHTML = a;

var x = document.getElementById("emotion").textContent;

var a;

var angerNumb;
var angerNumb;


function saveValue() {
  if (slider.value > 0 && slider.value < 20) {
    angerNumb = localStorage.setItem('angerNumb', 'slider.value');
    angerWord = localStorage.setItem('angerWord', 'Not angry at all');
    document.getElementById("anger1").style.color = "red";
    document.getElementById("anger2").style.color = "white";
    document.getElementById("anger3").style.color = "white";
    document.getElementById("anger4").style.color = "white";
    document.getElementById("anger5").style.color = "white";
    console.log(slider.value);
  }
  if (slider.value > 20 && slider.value < 40) {
    angerNumb = localStorage.setItem('angerNumb', 'slider.value');
    angerWord = localStorage.setItem('angerWord', 'Provoked');
    document.getElementById("anger2").style.color = "red";
    document.getElementById("anger1").style.color = "white";
    document.getElementById("anger3").style.color = "white";
    document.getElementById("anger4").style.color = "white";
    document.getElementById("anger5").style.color = "white";
    console.log(slider.value);
  }

  if (slider.value > 40 && slider.value < 60) {
    angerNumb = localStorage.setItem('angerNumb', 'slider.value');
    angerWord = localStorage.setItem('angerWord', 'Angry');
    document.getElementById("anger3").style.color = "red";
    document.getElementById("anger2").style.color = "white";
    document.getElementById("anger1").style.color = "white";
    document.getElementById("anger4").style.color = "white";
    document.getElementById("anger5").style.color = "white";
    console.log(slider.value);
  }

  if (slider.value > 60 && slider.value < 80) {
    angerNumb = localStorage.setItem('angerNumb', 'slider.value');
    angerWord = localStorage.setItem('angerWord', 'Very angry');
    document.getElementById("anger4").style.color = "red";
    document.getElementById("anger2").style.color = "white";
    document.getElementById("anger3").style.color = "white";
    document.getElementById("anger1").style.color = "white";
    document.getElementById("anger5").style.color = "white";
    console.log(slider.value);
  }

  if (slider.value > 80) {
    angerNumb = localStorage.setItem('angerNumb', 'slider.value');
    angerWord = localStorage.setItem('angerWord', 'Furious');
    document.getElementById("anger5").style.color = "red";
    document.getElementById("anger2").style.color = "white";
    document.getElementById("anger3").style.color = "white";
    document.getElementById("anger4").style.color = "white";
    document.getElementById("anger1").style.color = "white";
    console.log(slider.value);
  }
}

function inDataStore() {
  document.getElementById("emotion").innerHTML = emotion;
  if (anger > 0 && anger < 20) {
    emotion = "not so angry";
    angerHistory.push(x);
  }
  if (anger > 20 && anger < 40) {
    emotion = "Provoked";
  }
  if (anger > 40 && anger < 60) {
    emotion = "Angry";
  }
  if (anger > 60 && anger < 80) {
    emotion = "Very angry";
  }
  if (anger > 80) {
    emotion = "Furious";
  }
  localStorage.setItem("numberLS", anger);
}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

slider.oninput = function() {
  output.innerHTML = this.value;
}





// Following functions print the serial communication status to the console for debugging purposes

function printList(portList) {
  // portList is an array of serial port names
  for (var i = 0; i < portList.length; i++) {
    // Display the list the console:
    print(i + " " + portList[i]);
  }
}

function serverConnected() {
  print('connected to server.');
}

function portOpen() {
  print('the serial port opened.')
}

function serialEvent() {
  inData = Number(serial.read()) * 2.5;
}

function serialError(err) {
  print('Something went wrong with the serial port. ' + err);
}

function portClose() {
  print('The serial port closed.');
}
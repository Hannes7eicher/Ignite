/*
References for these codes:
https://itp.nyu.edu/physcomp/labs/labs-serial-communication/lab-serial-input-to-the-p5-js-ide/
https://itp.nyu.edu/physcomp/labs/labs-serial-communication/lab-serial-input-to-the-p5-js-ide/
*/

var serial;   // variable to hold an instance of the serialport library
var portName = 'COM6';    // fill in your serial port name here
var inData;   // variable to hold the input data from Arduino
var newData;
let width = 1;
var anger;

var angerHistory = [];


function setup() {

  //set up communication port
  serial = new p5.SerialPort();       // make a new instance of the serialport library
  serial.on('list', printList);  // set a callback function for the serialport list event
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen);        // callback for the port opening
  serial.on('data', serialEvent);     // callback for when new data arrives
  serial.on('error', serialError);    // callback for errors
  serial.on('close', portClose);      // callback for the port closing

  serial.list();                      // list the serial ports
  serial.open(portName);              // open a serial port
}




move();
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");


function move() {
  var elem = document.getElementById("myBar");   
  var id = setInterval(frame, 1);
  function frame() {
       width = inData;
      elem.style.width = width + "%"; 
  }
}

var slider = document.getElementById("myRange");
var output = document.getElementById("slide");
//output.innerHTML = a;

 var x = document.getElementById("emotion").textContent;

  var a;


var start;
var elapsed;

function startTime () {
  start = new Date().getTime();
}

function currentTime () {
   elapsed = new Date().getTime() - start;
}

function resetTime () {
  start = 0;
}

var seconds = 0;

function incrementSeconds() {
    seconds += 1;
}



  function inDataStore() {
    a = document.getElementById("result").innerHTML = inData;  
    document.getElementById("emotion").innerHTML = emotion;
    if (inData > 0 && inData < 20 ) {
        emotion = "not so angry";
        angerHistory.push(x);
     } if (inData > 20 && inData < 40) {
       emotion = "Provoked";
     } if (inData > 40 && inData < 60) {
       emotion = "Angry";
    }  if (inData > 60 && inData < 80) {
      emotion = "Very angry";
    }  if (inData > 80) {
      emotion = "Furious";
    }

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

// slider.oninput = function() {
//   output.innerHTML = this.value;
// }


    localStorage.setItem("numberLS", a);  
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

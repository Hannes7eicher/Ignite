/*
References for these codes:
https://itp.nyu.edu/physcomp/labs/labs-serial-communication/lab-serial-input-to-the-p5-js-ide/
https://itp.nyu.edu/physcomp/labs/labs-serial-communication/lab-serial-input-to-the-p5-js-ide/
*/

var serial;   // variable to hold an instance of the serialport library
var portName = 'COM4';    // fill in your serial port name here
var inData;   // variable to hold the input data from Arduino
var newData;
let width = 1;


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
output.innerHTML = a;

document.addEventListener('keydown', function (event) {
  if (event.key === 'd') {
    document.body.style = "color: white; background-color: #111111";
  }
  if (event.key === 'l') {
    document.body.style = '';
  }
});




document.addEventListener("keydown", function(event) {
	if (event.keycode == 76) {
		document.getElementById("button1").style.color = "green";
    document.getElementById("Buttons").style.color = "whitesmoke";
    document.getElementById("Buttons").style.textShadow = "0 12px 16px 0 #ff0000, 0 17px 50px 0 #ff0000";
    document.getElementById("Buttons").style.textdecoration = underline;

	} else {
		document.getElementById("button1").style.color = "white";
	}

	if (event.keycode == 77) {
		document.getElementById("button2").style.color = "black";
	} else {
		document.getElementById("button2").style.color = "white";
	}

	if (event.keycode == 78) {
		document.getElementById("button3").style.color = "black";
	} else {
		document.getElementById("button3").style.color = "white";
	}
  });

  var numb = [];
  var a;

//   function showParagraph() {
//     a = document.getElementById('result').innerHTML;
// }

  function inDataStore() {
    a = document.getElementById("result").innerHTML = inData;  
    console.log(a);
    
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
  inData = Number(serial.read()) * 0.5;
}

function serialError(err) {
  print('Something went wrong with the serial port. ' + err);
}

function portClose() {
  print('The serial port closed.');
}

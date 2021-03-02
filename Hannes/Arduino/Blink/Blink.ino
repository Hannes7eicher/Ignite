#include <Keyboard.h>

const int led1Pin =  9; // pin number for LED output 
const int led2Pin =  10; // pin number for LED output 
const int sensorPin = 0; // pin number for sensing potentiometer
int brightness = 0;    // variable for indicating how bright the LED is
const int buttonPin1 = 2;     // the number of the pushbutton pin
const int buttonPin2 = 3;     // the number of the pushbutton pin
const int buttonPin3 = 4;     // the number of the pushbutton pin

// variables will change:
int buttonState1 = 0;         // variable for reading the pushbutton status
int buttonState2 = 0;         // variable for reading the pushbutton status
int buttonState3 = 0;         // variable for reading the pushbutton status

void setup() {
  pinMode(led1Pin, OUTPUT);  // Set up the LED pin to be an output:  
  pinMode(led2Pin, OUTPUT);  // Set up the LED pin to be an output:  
  pinMode(buttonPin1, INPUT); // initialize the pushbutton pin as an input:
  pinMode(buttonPin2, INPUT); // initialize the pushbutton pin as an input:
  pinMode(buttonPin3, INPUT); // initialize the pushbutton pin as an input:
  Serial.begin(9600); // initialize the serial for communication
  Keyboard.begin();
}

void loop() {
  buttonState1 = digitalRead(buttonPin1);
  buttonState2 = digitalRead(buttonPin2);
  buttonState3 = digitalRead(buttonPin3);
  int sensorValue;
  sensorValue = analogRead(sensorPin); // read from the potentiometer 
  brightness = map(sensorValue, 0, 1023, 0, 255); // map the value from potentiometer (range from 0 to 1023) to the brightness (from 0 to 255)
  // control the brightenss based on the sensor value
  if (sensorValue >= 0) {
    analogWrite(led1Pin, brightness);  // turn the LED on with certain brightness 
  } else{
    digitalWrite(led1Pin, LOW);  // turn the LED off
  }
   Serial.write(brightness); // write the brightness to the serial port to let p5.js read this value 
     if (buttonState1 == HIGH) {
    // turn LED on:
    digitalWrite(led2Pin, HIGH);
Keyboard.press((char) 78);
  delay(100);
  Keyboard.releaseAll();
  } else {
    // turn LED off:
    digitalWrite(led2Pin, LOW);
  }
Serial.println(buttonState2);
       if (buttonState2 == HIGH) {
    // turn LED on:
    digitalWrite(led2Pin, HIGH);
Keyboard.press((char) 77);
  delay(100);
  Keyboard.releaseAll();
  } else {
    // turn LED off:
    digitalWrite(led2Pin, LOW);
  }
  
         if (buttonState3 == HIGH) {
    // turn LED on:
    digitalWrite(led2Pin, HIGH);
Keyboard.press((char) 76);
  delay(100);
  Keyboard.releaseAll();
  } else {
    // turn LED off:
    digitalWrite(led2Pin, LOW);
  }

}

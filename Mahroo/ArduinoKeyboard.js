//ARDUINO CODE
#include <Keyboard.h>    

void setup() {
pinMode(2,INPUT_PULLUP);  // sets pin 3 to input & pulls it high w/ internal resistor
pinMode(3,INPUT_PULLUP);  // sets pin 5 to input & pulls it high w/ internal resistor

Serial.begin(9600);       // for debugging
}

void loop() {
 Keyboard.begin();         //begins keyboard 
 if (digitalRead(2) == 0)  //if button 2 is pushed
{
    Keyboard.write(0xB0);  //send Hex value for Return key
    delay(200);           
  }
  else (digitalRead(3) == 0){  //if button 3 is pressed
    Keyboard.write(0xB3);         //send Hex value for TAB key
    delay(200);
  }
  Keyboard.end();                 //stops keyboard
}       
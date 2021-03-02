const int buttonPin1 = 4;
const int buttonPin2 = 5;
const int ledPin =  9;
int brightness = 0;
int buttonState1= 0;
int buttonState2=0;

void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(buttonPin1, INPUT);
  pinMode(buttonPin2, INPUT);
}

void loop() {
  buttonState1= digitalRead(buttonPin1);
  buttonState2= digitalRead(buttonPin2);

  if (buttonState1 == HIGH){
    analogWrite(ledPin, 255);
  } else {
    analogWrite(ledPin,0 );
  }
Serial.print(ledPin);
}

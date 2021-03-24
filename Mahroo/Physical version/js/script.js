var x = 1;
var buttonCount = 1;
var background;
var font;
var backgroundPic;
var frontPageTitle = "Title";

document.getElementById("myBtn1").style.textTransform = "uppercase";
document.getElementById("myBtn1").style.textDecoration = "underline";

//document.getElementById("myBtn2").style.textTransform = "uppercase";
//document.getElementById("myBtn2").style.textDecoration = "underline";

//document.getElementById("myBtn3").style.textTransform = "uppercase";
//document.getElementById("myBtn3").style.textDecoration = "underline";

var changeBackground1 = function () {
    document.body.style.backgroundColor = "#193f84";
    document.getElementById("text").style.color = "black";
    document.getElementById("myBtn1").style.color = "black";
    background = localStorage.setItem('color', '#193f84');
}

var changeBackground2 = function () {
    document.body.style.backgroundColor = "#84193f";
    document.getElementById("text").style.color = "black";
    document.getElementById("myBtn1").style.color = "black";
    background = localStorage.setItem('color', '#84193f');
}

var changeBackground3 = function () {
    document.body.style.backgroundColor = "#0ea091";
    document.getElementById("text").style.color = "black";
    document.getElementById("myBtn1").style.color = "black";
    background = localStorage.setItem('color', '#0ea091');
}

var changeBackground4 = function () {
    document.body.style.backgroundColor = "#d9aa2a";
    document.getElementById("text").style.color = "black";
    document.getElementById("myBtn1").style.color = "black";
    background = localStorage.setItem('color', '#d9aa2a');
}

var changeBackgroundPic1 = function () {
    document.body.style.backgroundImage = "url(../background1.jpg)";
    document.body.style.backgroundSize = "auto auto"

    backgroundPic = localStorage.setItem("back", "url(../background1.jpg)");
}

var changeBackgroundPic2 = function () {
    document.body.style.backgroundImage = "url(../background2.jpg)";
    document.body.style.backgroundSize = "auto auto"

    backgroundPic = localStorage.setItem("back","url(../background2.jpg)");
}

var changeBackgroundPic3 = function () {
    document.body.style.backgroundImage = "url(../background3.jpg)";
    document.body.style.backgroundSize = "auto auto"

    backgroundPic = localStorage.setItem("back","url(../background3.jpg)");
}

var changeBackgroundPic4 = function () {
    document.body.style.backgroundImage = "url(../background4.jpg)";
    document.body.style.backgroundSize = "auto auto"
    
    backgroundPic = localStorage.setItem("back","url(../background4.jpg)");
}

var changeFont1 = function () {
    document.getElementById("text").style.fontFamily = "'Courier New', monospace"; 
    document.getElementById("myBtn1").style.fontFamily = "'Courier New', monospace"; 
    font = localStorage.setItem('font', 'Courier New, monospace');
}

var changeFont2 = function () {
    document.getElementById("text").style.fontFamily = "Garamond, serif"; 
    document.getElementById("myBtn1").style.fontFamily = "Garamond, serif"; 
    font = localStorage.setItem('font', 'Garamond, serif');
}

var changeFont3 = function () {
    document.getElementById("text").style.fontFamily = "'Trebuchet MS', sans-serif"; 
    document.getElementById("myBtn1").style.fontFamily = "'Trebuchet MS', sans-serif"; 
    font = localStorage.setItem('font', "'Trebuchet MS', sans-serif");
}

var changeFont4 = function () {
    document.getElementById("text").style.fontFamily = "'Brush Script MT', cursive"; 
    document.getElementById("myBtn1").style.fontFamily = "'Brush Script MT', cursive"; 
    font = localStorage.setItem('font', "'Brush Script MT', cursive");
}

//strategy variables

function storeStrategy1() {
    
    frontPageTitle = localStorage.setItem('title', "Social Media Strategy");
}

function storeStrategy2() {
    frontPageTitle = localStorage.setItem('title', "Strategies for Social Media");
}





var changeX = function () {
    x = x + 1;
    if (x >= buttonCount) {
        x = 1;
    }
    //console.log(x);
    //console.log(buttonCount);
}

var oneButton = function () {
    buttonCount = 2;
}

var twoButton = function () {
    buttonCount = 3;
}

var threeButton = function () {
    buttonCount = 4;
}


document.addEventListener('keydown', function (event) {
    var element2 = document.getElementById("myBtn2");
    var element3 = document.getElementById("myBtn3");
    if (event.key === 'ArrowUp') {
        changeX();
    }
    if (x == 1) {
        document.getElementById("myBtn1").style.color = "#f4dddd";
        document.getElementById("myBtn1").style.textDecoration = "underline";
        document.getElementById("myBtn1").style.fontSize = "1.15vw";
        oneButton();
        if (typeof (element2) != 'undefined' && element2 != null) {
            twoButton();
            document.getElementById("myBtn2").style.color = "#c6c8c8";
            document.getElementById("myBtn2").style.textDecoration = "none";
            document.getElementById("myBtn2").style.fontSize = "1vw";
        } 
        if (typeof (element3) != 'undefined' && element3 != null) {
            threeButton();
            document.getElementById("myBtn3").style.color = "#c6c8c8";
            document.getElementById("myBtn3").style.textDecoration = "none";
            document.getElementById("myBtn3").style.fontSize = "1vw";
        } 
        //console.log("case one");
        //console.log(x);
    }

    if (x == 2) {
        document.getElementById("myBtn1").style.color = "#c6c8c8";
        document.getElementById("myBtn1").style.textDecoration = "none";
        document.getElementById("myBtn1").style.fontSize = "1vw";
        oneButton();
        if (typeof (element2) != 'undefined' && element2 != null) {
            twoButton();
            document.getElementById("myBtn2").style.color = "#f4dddd";
            document.getElementById("myBtn2").style.textDecoration = "underline";
            document.getElementById("myBtn2").style.fontSize = "1.15vw";
        } 
        if (typeof (element3) != 'undefined' && element3 != null) {
            threeButton();
            document.getElementById("myBtn3").style.color = "#c6c8c8";
            document.getElementById("myBtn3").style.textDecoration = "none";
            document.getElementById("myBtn3").style.fontSize = "1vw";

        } 
        //console.log("case two");
    }

    if (x == 3) {
        document.getElementById("myBtn1").style.color = "#c6c8c8";
        document.getElementById("myBtn1").style.textDecoration = "none";
        document.getElementById("myBtn1").style.fontSize = "1vw";
        oneButton();
        if (typeof (element2) != 'undefined' && element2 != null) {
            twoButton();
            document.getElementById("myBtn2").style.color = "#c6c8c8";
            document.getElementById("myBtn2").style.textDecoration = "none";
            document.getElementById("myBtn2").style.fontSize = "1vw";
        } 
        if (typeof (element3) != 'undefined' && element3 != null) {
            threeButton();
            document.getElementById("myBtn3").style.color = "#f4dddd";
            document.getElementById("myBtn3").style.textDecoration = "underline";
            document.getElementById("myBtn3").style.fontSize = "1.15vw";
        } 
        //console.log("case three");
    }

    if (event.key === 'ArrowRight' && x == 1) {
        document.getElementById("myBtn1").click();
    }

    if (event.key === 'ArrowRight' && x == 2) {
        document.getElementById("myBtn2").click();
    }

    if (event.key === 'ArrowRight' && x == 3) {
        document.getElementById("myBtn3").click();
    }

    if (event.key === 's') {
        document.getElementById("saveBtn").click();
    }
});

var value = localStorage.getItem("numberLS"); 
var result = Number(value); 
var emotion = "";


document.getElementById("anger").innerHTML = result;

/*
if (result < 50) {
    var myObj1 = document.getElementById("myBtn2");
    var myObj2 = document.getElementById("myBtn3");
    myObj1.remove();
    myObj2.remove();
}
else if (result > 50 && result < 70) {
    document.getElementById("myBtn2").style.visibility = "visible";
    var myObj = document.getElementById("myBtn3");
    myObj.remove();
} else if (result > 70) {
    document.getElementById("myBtn3").style.visibility = "visible";
}
*/


document.getElementById("emotion").innerHTML = emotion;





// Change pages with replace so player cannot use 'back'
function changePage(url) {
    location.replace(url);
}




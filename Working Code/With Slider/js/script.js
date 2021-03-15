var x = 1;
var buttonCount = 1;
var background;

document.getElementById("myBtn1").style.textTransform = "uppercase";
document.getElementById("myBtn1").style.textDecoration = "underline";

var changeBackground1 = function () {
    document.body.style.backgroundColor = "rgb(217, 182, 182)";
    document.getElementById("text").style.color = "black";
    document.getElementById("myBtn1").style.color = "black";
    background = localStorage.setItem('color', 'rgb(217, 182, 182)');
}

var changeBackground2 = function () {
    document.body.style.backgroundColor = "rgb(187, 179, 227)";
    document.getElementById("text").style.color = "black";
    document.getElementById("myBtn1").style.color = "black";
    background = localStorage.setItem('color', 'rgb(187, 179, 227)');
}

var changeBackground3 = function () {
    document.body.style.backgroundColor = "rgb(191, 234, 167)";
    document.getElementById("text").style.color = "black";
    document.getElementById("myBtn1").style.color = "black";
    background = localStorage.setItem('color', 'rgb(191, 234, 167)');
}

var changeBackground4 = function () {
    document.body.style.backgroundColor = "rgb(230, 232, 141)";
    document.getElementById("text").style.color = "black";
    document.getElementById("myBtn1").style.color = "black";
    background = localStorage.setItem('color', 'rgb(230, 232, 141)');
}

var changeFont1 = function () {
    document.getElementById("text").style.fontFamily = "'Courier New', monospace"; 
}

var changeFont2 = function () {
    document.getElementById("text").style.fontFamily = "Garamond, serif"; 
}

var changeFont3 = function () {
    document.getElementById("text").style.fontFamily = "'Trebuchet MS', sans-serif"; 
}

var changeFont4 = function () {
    document.getElementById("text").style.fontFamily = "'Brush Script MT', cursive"; 
}


if (background == 0) {
    document.body.style.backgroundColor = "rgb(0, 0, 0)";
} else if (background == 1) {
    document.body.style.backgroundColor = "rgb(217, 182, 182)";
} else if (background == 2) {
    document.body.style.backgroundColor = "rgb(187, 179, 227)";
} else if (background == 3) {
    document.body.style.backgroundColor = "rgb(191, 234, 167)";
} else if (background == 4) {
    document.body.style.backgroundColor = "rgb(230, 232, 141)";
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
        document.getElementById("myBtn1").style.textTransform = "uppercase";
        document.getElementById("myBtn1").style.textDecoration = "underline";
        oneButton();
        if (typeof (element2) != 'undefined' && element2 != null) {
            twoButton();
            document.getElementById("myBtn2").style.textTransform = "lowercase";
            document.getElementById("myBtn2").style.textDecoration = "none";
        } 
        if (typeof (element3) != 'undefined' && element3 != null) {
            threeButton();
            document.getElementById("myBtn3").style.textTransform = "lowercase";
            document.getElementById("myBtn3").style.textDecoration = "none";
        } 
        //console.log("case one");
        //console.log(x);
    }

    if (x == 2) {
        document.getElementById("myBtn1").style.textTransform = "lowercase";
        document.getElementById("myBtn1").style.textDecoration = "none";
        oneButton();
        if (typeof (element2) != 'undefined' && element2 != null) {
            twoButton();
            document.getElementById("myBtn2").style.textTransform = "uppercase";
            document.getElementById("myBtn2").style.textDecoration = "underline";
        } 
        if (typeof (element3) != 'undefined' && element3 != null) {
            threeButton();
            document.getElementById("myBtn3").style.textTransform = "lowercase";
            document.getElementById("myBtn3").style.textDecoration = "none";
        } 
        //console.log("case two");
    }

    if (x == 3) {
        document.getElementById("myBtn1").style.textTransform = "lowercase";
        document.getElementById("myBtn1").style.textDecoration = "none";
        oneButton();
        if (typeof (element2) != 'undefined' && element2 != null) {
            twoButton();
            document.getElementById("myBtn2").style.textTransform = "lowercase";
            document.getElementById("myBtn2").style.textDecoration = "none";
        } 
        if (typeof (element3) != 'undefined' && element3 != null) {
            threeButton();
            document.getElementById("myBtn3").style.textTransform = "uppercase";
            document.getElementById("myBtn3").style.textDecoration = "underline";
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


document.getElementById("emotion").innerHTML = emotion;





// Change pages with replace so player cannot use 'back'
function changePage(url) {
    location.replace(url);
}



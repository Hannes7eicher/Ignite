var x = 1;
var buttonCount = 1;

document.getElementById("myBtn1").style.textTransform = "uppercase";
document.getElementById("myBtn1").style.textDecoration = "underline";



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



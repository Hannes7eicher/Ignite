var x = 1;
var buttonCount = 1;

document.getElementById("myBtn1").style.textTransform = "uppercase";
document.getElementById("myBtn1").style.textDecoration = "underline";



var changeX = function () {
    x = x + 1;
    if (x >= buttonCount) {
        x = 1;
    }
    console.log(x);
    console.log(buttonCount);
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
        console.log("case one");
        console.log(x);
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
        console.log("case two");
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
        console.log("case three");
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



// document.addEventListener('keydown', function (event) {
//     if (event.key === 'd') {
//       // document.getElementById("myBtn1").style.textDecoration = "underline"; 
//       document.getElementById("myBtn1").style.textTransform = "uppercase";  
//     //   document.getElementById("myBtn1").click();
//       console.log("d1");
//     }
//   });


// Initialize game on start
function init() {
    var boolsDict = {
        'garage': false,
        'hedge': false,
        'window': false,
        'Belphegor': false,
        'janitor': false,
        'Asmodeus': false,
        'Sathanus': false,
        'Beelzebub': false,
        'Mammon': false,
        'Shaitan': false,
        'distillation': false,
        'glassCabinet': false,
        'bookshelves': false
    };

    var itemsList = [];
    localStorage.setItem("fearPoints", 0);
    localStorage.setItem("itemsList", JSON.stringify(itemsList));
    localStorage.setItem("boolsDict", JSON.stringify(boolsDict));
    localStorage.setItem("itemsTooltip", "Items collected in your adventure, some are necessary for survival while others could be red herrings or downright detrimental to your progress.");
    localStorage.setItem("fearTooltip", "The amount of Fear your character is experiencing. Fear increases when your character experiences horrific incidents, and decreases when you solve puzzles or feel safer. Manage your Fear carefully as when your Fear reaches 10 you will die by fright...");

    console.log("game initialized");
}


// Changes booleans in boolsDict
function updateDict(key) {
    var boolsDict = JSON.parse(localStorage.getItem("boolsDict"));
    boolsDict[key] = !boolsDict[key];
    localStorage.setItem("boolsDict", JSON.stringify(boolsDict));
    console.log(key + " changed to " + boolsDict[key]);
}

// Checks options if they are muted or not
function checkOptions(option) {
    var boolsDict = JSON.parse(localStorage.getItem("boolsDict"));
    if (boolsDict[option]) {    // If boolean is true; disable option
        document.getElementById(option).disabled = true;
    }
}

// Checks if player has certain items for certain choices
function checkItems(item) {
    var itemsList = JSON.parse(localStorage.getItem("itemsList"));
    if (!itemsList.includes(item)) {
        document.getElementById(item).disabled = true;
    }
}

// Adds item to your inventory
function addItem(item, bool) {
    var itemsList = JSON.parse(localStorage.getItem("itemsList"));
    if (bool) {  // if item is added to inventory
        itemsList.push(item);
    } else {  // else item is removed from inventory
        itemsList.pop(item);
    }
    localStorage.setItem("itemsList", JSON.stringify(itemsList));
    loadPage();
}

// Change pages with replace so player cannot use 'back'
function changePage(url) {
    location.replace(url);
}

// Add/reduce fearPoints
function changeFear(points) {
    var fearPoints = localStorage.getItem("fearPoints");
    var newfearPoints = parseInt(fearPoints) + parseInt(points);
    if (newfearPoints >= 10) {
        location.replace("fearDeath.html");
    }
    localStorage.setItem("fearPoints", newfearPoints);
    console.log("fearPoints changed to " + newfearPoints);
    loadPage();
}

// Simulate a die roll and see present options based on success/fail
function rollDice() {
    var res = getRandomIntInclusive(1, 6);
    console.log(res);
    if (res > 3) {
        document.getElementById('success').disabled = false;
    } else {
        document.getElementById('fail').disabled = false;
    }
    document.getElementById('rollDie').disabled = true;
    loadPage();
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

var inputBox = document.getElementById("inputs");



////////// Show & Hidd Password /////////

var passCkeck = document.getElementById("input-icon")
var showPass = document.getElementById("show-pass")
var hidePass = document.getElementById("hide-pass")
passCkeck.addEventListener("click",
    function checkPassword() {
        if (inputBox.type === "password") {
            inputBox.type = "text"
            showPass.style.display = "block"
            hidePass.style.display = "none"

        } else {
            inputBox.type = "password"
            showPass.style.display = "none"
            hidePass.style.display = "block"
        }
    }
)

////////// Controlling input range //////////

var inputRange = document.getElementById("slider");
var inputValue = document.getElementById("slider-span")
inputValue.textContent = inputRange.value;
inputRange.oninput = function () {
    inputValue.textContent = this.value
}

////////// Making Random Password //////////


// var randValue = "!@#$%^&*()_+1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
// var password = "";
// var result = "";


function check() {
    var capital = document.getElementById("capital");
    var small = document.getElementById("small");
    var number = document.getElementById("number");
    var symbol = document.getElementById("symbol");

    var capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var smalls = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "1234567890";
    var symbols = "!@#$%^&*()_+";
    var result = "";
    passw = "";

    var allChar = capitals + smalls + numbers + symbols

    for (var i = 0; i < inputValue.textContent; i++) {
        passw = Math.floor(Math.random() * allChar.length)
        result += allChar[passw]
    }
    inputBox.value = result;
    result = "";
}


// for (var i = 0; i < inputValue.textContent ; i++) {
//     password = Math.floor(Math.random() * randValue.length);
//     result += randValue[password]

// }

// inputBox.value = result;
// result = "";
// }


////////// Controlling Check Boxes //////////






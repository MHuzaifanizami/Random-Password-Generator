////////// Making Random Password //////////

var randValue= "!@#$%^&*()_+1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var password = "";

for (var i = 0; i < 10; i++) {
    var randNum = Math.floor(Math.random() * randValue.length); 
    password += randValue[randNum]
}

var inputBox = document.getElementById("input-box") ;
// inputBox = password; 
// console.log(inputBox)






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

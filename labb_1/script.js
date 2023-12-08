// hämta html element och lagra som variabler
let myCheckbox = document.getElementById("div-style");
let myTextFields = document.getElementsByClassName("textfield");
let myButton = document.querySelector("#clear-button");
let myDiv = document.querySelectorAll(".bottom-container");

// funktion som ska köras när användaren ändrar texten i textfälten
function textFunction(e) {
    // logga vilket text-element som ändrades
    console.log("input fältet som genererade eventet: " + e.target.name);
    if (e.target.id == "content")
    {
        myDiv[0].textContent = e.target.value;
    }
}

// Lägg till eventlyssnare för varje textfält 
for (let i = 0; i < myTextFields.length; i++) {
    myTextFields[i].addEventListener("input", textFunction);
}

// lägg till eventlyssnare för checkboxen
myCheckbox.addEventListener('change', function() {
    let colorTextField = document.getElementById("color");
    myDiv[0].style.backgroundColor = colorTextField.value;
    myButton.style.backgroundColor = colorTextField.value;
    console.log('checkbox ändrad!');
});

// lägg till eventlyssnare för knappen
myButton.addEventListener("click", function(){
    myDiv[0].remove();
    console.log('div är borttagen!');
});

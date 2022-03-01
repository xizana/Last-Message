let txt = document.getElementById("txt");
let submit  = document.getElementById("sub");
let display = document.getElementById("display");
let displayAlert = document.getElementById("displayAlert")

function text(){
    display.innerHTML = txt.value;

}

function alert(){
    if(txt.value === ""){
        displayAlert.innerHTML = "You have to fill input field";
    }
    if(txt.value){
        displayAlert.innerHTML = "";

    }
}

submit.addEventListener("click", text);
submit.addEventListener("click", alert);
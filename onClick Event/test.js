var content = document.getElementById("content");
var button = document.getElementById("show-more");

button.onclick = function(){

    if(content.className == "open") {
        //collapse box
        content.className = ""; 
        button.innerHTML = "show More";
    } else /*expand box*/ {
        content.className = "open";
        button.innerHTML = "show Less"; 
    }
};
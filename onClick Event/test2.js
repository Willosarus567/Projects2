var content = document.getElementsByClassName("content");
var toggleButton = document.getElementById("show-more");

toggleButton.addEventListener('click', function() {
    if (content.classList !== "open") {
        this.classList.add('open');
    } else {
        this.classList.remove('open');
    }
});
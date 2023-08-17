console.log("page loaded...");

function message() {
    alert("Ninja was Liked!");
}

function login(element) {
    if(element.innerText == "Login") {
        element.innerText = "logout";
    }else {
        element.innerText = "Login";
    }
}

function hide(e) {
    el.remove()
}
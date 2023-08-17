console.log("page loaded...");

var post = 1

function like() {
    post++;
    console.log(post) 
}

function likes(element) {
    if(element.innerText == "Login") {
        element.innerText = "logout";
    }else {
        element.innerText = "Login";
    }
}

function hide(e) {
    el.remove()
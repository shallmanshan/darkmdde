var round = document.querySelector(".round")
var button = document.querySelector(".button")
var mode = "light"
var body = document.querySelector("body")
var heading = document.querySelector("h1")

function move(){
    round.style.transform = "translateX(66px)"
    round.style.transition = "1s"
    body.style.backgroundColor="black"
    mode="dark"
    heading.style.color="white"
    button.style.backgroundColor="grey"

}
function back(){
    round.style.transform="translateX(1px)"
    round.style.transition="1s"
    body.style.backgroundColor="white"
    mode="light"
    heading.style.color="black"
    button.style.backgroundColor="black"
}
button.addEventListener("click", function(){
    if(mode === "light") move()
    else back()
})
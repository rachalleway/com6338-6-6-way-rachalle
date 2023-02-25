var btn = document.querySelector(".hamburger-btn")
var menu = document.querySelector(".hamburger-menu")

//open and close menu
btn.onclick = open
function open(e) {
    e.stopPropagation()
    menu.classList.toggle("show-menu")
    btn.focus()
    if (menu.classList.contains("show-menu")) {
        btn.setAttribute("aria-expanded", true)
    } else {
        btn.setAttribute("aria-expanded", false)
    }
  }

  function close(e) {
    e.stopPropagation()
    btn.focus()
    if (menu.classList.contains("show-menu")) {
        btn.setAttribute("aria-expanded", true)
        menu.classList.toggle("show-menu")
    } else {
        btn.setAttribute("aria-expanded", false)
    }
  }

//click outside function
document.body.onclick = function(e) {
    if (!menu.contains(e.target)){
        close(e)
    }
}

//escape button function
document.onkeyup = function(e){
    if (e.key === 'Escape'){
        close(e)
    }
}
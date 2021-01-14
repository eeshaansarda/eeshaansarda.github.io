const navbar = document.getElementsByClassName("navbar")[0];

window.onscroll = () => {
    if(window.scrollY < 50) {
        navbar.classList.remove("navbar-scroll")
    }
    else {
        navbar.classList.add("navbar-scroll")
    }
}

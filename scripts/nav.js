
fetch('../utils/nav.html')
.then(res => res.text())
.then(text => {
    let oldElem = document.querySelector("script#replace_with_navbar");
    let newElem = document.createElement("div");
    newElem.setAttribute("id", "nav")
    newElem.innerHTML = text;
    oldElem.parentNode.replaceChild(newElem,oldElem);
    let popUpNav = document.createElement("div");
    popUpNav.setAttribute("id", "menu-pop-up")
    document.body.appendChild(popUpNav)
    popUpNav.innerHTML = text;
})

let hamburgerMenu = document.createElement("div")
hamburgerMenu.setAttribute("id", "hamburger-menu")
document.body.appendChild(hamburgerMenu)

hamburgerMenu.innerHTML = `<img id="hamburger-icon" src="../icons/hamburger-icon.png">`
    
let popUpMenuOn = false

hamburgerMenu.addEventListener("click", ()=>{
    const popUpNavEl = document.getElementById("menu-pop-up")
    if (!popUpMenuOn){
        //popUpNavEl.style.display = "flex"
        popUpNavEl.style.visibility = "visible"
        popUpNavEl.style.transition = "all 0.5s"
        popUpNavEl.style.opacity = "1"
        
        popUpMenuOn = !popUpMenuOn
    }
    else{
        popUpNavEl.style.visibility = "hidden"
        popUpMenuOn = !popUpMenuOn
        popUpNavEl.style.opacity = "0"
        //popUpNavEl.style.display = "none"
    }
})
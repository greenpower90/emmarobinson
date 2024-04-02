
fetch('../utils/nav.html')
.then(res => res.text())
.then(text => {
    let oldElem = document.querySelector("script#replace_with_navbar");
    let newElem = document.createElement("div");
    newElem.setAttribute("id", "nav")
    newElem.innerHTML = text;
    oldElem.parentNode.replaceChild(newElem,oldElem);
    
})

let hamburgerMenu = document.createElement("div")
hamburgerMenu.setAttribute("id", "hamburger-menu")
document.body.appendChild(hamburgerMenu)

hamburgerMenu.innerHTML = `<img id="hamburger-icon" src="../icons/hamburger-icon.png">`
    

hamburgerMenu.addEventListener("click", ()=>{
    
    const navEl = document.getElementById("nav")
    navEl.scrollIntoView({
            behavior: 'smooth'
   })
    console.log("clicked")
})
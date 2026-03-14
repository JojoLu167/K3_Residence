async function loadNavbar(){
    const response = await fetch("components/navbar.html")
    const html = await response.text()

    document.getElementById("navbar-container").innerHTML = html

    setActiveLink()
    loadLanguages()

    // By reload -> used saved language
    const lang = localStorage.getItem("lang") || "en"
    setLanguage(lang)
}


/* ACTIVE PAGE */
function setActiveLink(){
    const currentPage = window.location.pathname.split("/").pop()
    document.querySelectorAll(".nav-links a").forEach(link=>{
        if(link.getAttribute("href") === currentPage){
            link.classList.add("active")
        }
    })
}


/* INFO POPUP */

function openInfo(){
    document.getElementById("infoPopup").style.display="flex"
}

function closeInfo(){
    document.getElementById("infoPopup").style.display="none"
}


/* LOAD LANGUAGE OPTIONS */

async function loadLanguages(){
    const select = document.getElementById("languageSelect")
    const languages = ["de","en"]

    languages.forEach(lang=>{
        const option = document.createElement("option")

        option.value = lang
        option.textContent = lang.toUpperCase()

        select.appendChild(option)
    })
    select.addEventListener("change", e=>{setLanguage(e.target.value)})

}
let currentLang = "en"
let translations = {}

async function loadLanguage(lang){
    const response = await fetch(`languages/${lang}.json`)

    if(!response.ok){
        console.error("Language file not found:", lang)
        return
    }

    translations = await response.json()
    applyTranslations()
    localStorage.setItem("lang", lang)
}

function applyTranslations(){

    document.querySelectorAll("[data-i18n]").forEach(el=>{

        const keys = el.dataset.i18n.split(".")
        let text = translations
        keys.forEach(k => text = text[k])
        
        if(text) el.textContent = text
    })

}

function setLanguage(lang){
    console.info("Switch language: ", lang)
    currentLang = lang
    loadLanguage(lang)
}
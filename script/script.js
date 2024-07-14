let pictures = [
    {
        url: "pictures/590cdbc4efd19b9.png"
    },
    {

        url: "pictures/a9b7de6cf1eb0ba.png"
    },
    ,
    {

        url: "pictures/ce3d8296f78ea76.png"
    },
    {

        url: "pictures/de9dfd288762147.png"
    },
    {

        url: "pictures/eaa93d44df76eb3.png"
    },
    {

        url: "pictures/sr2b683934a5e31.png"
    },
    {

        url: "pictures/sr2bddd005c62aws3.png"
    },
    {

        url: "pictures/sr20cfed9993daws3.png"
    },
    {

        url: "pictures/sr28991f9e3a2aws3.png"
    },
]

let pages = [
    {
        id: 0,
        name: "No pages yet"
    }
]

let pages_pictures = [
    {
        url: "pictures/5129130.jpg"
    }
]

let backi = document.getElementById("backi")

document.getElementById("close").addEventListener("click", () => {
    document.getElementById("welcome").style.opacity = "0"
    backi.style.backgroundBlendMode = "normal"
    document.getElementById("main").style.userSelect = "text"
})

document.getElementById("pixelshit").addEventListener("click", () => {
    if (document.getElementById("bar").style.opacity == 0) {
        document.getElementById("bar").style.opacity = 1
        document.getElementById("bar").style.animation = "none"
        document.getElementById("bar").offsetWidth
        document.getElementById("bar").style.animation = "slide-anisextion 0.5s"
    } else {
        document.getElementById("bar").style.animation = "none"
        document.getElementById("bar").offsetWidth
        document.getElementById("bar").style.animation = "slide-anisextion1 0.5s"
        setTimeout(() => {
            document.getElementById("bar").style.opacity = "0"
        }, 400)
    }
})

//unused
document.getElementById("pixelshit").addEventListener("pointerover", () => {

})

document.getElementById("backi").addEventListener("click", () => {
    document.getElementById("welcome").style.opacity = "0"
    backi.style.backgroundBlendMode = "normal"
    document.getElementById("main").style.userSelect = "text"
})

document.getElementById("main").addEventListener("click", () => {
    document.getElementById("welcome").style.opacity = "0"
    backi.style.backgroundBlendMode = "normal"
    document.getElementById("main").style.userSelect = "text"
})

document.getElementById("navi").addEventListener("click", () => {
    document.getElementById("welcome").style.opacity = "0"
    backi.style.backgroundBlendMode = "normal"
    document.getElementById("main").style.userSelect = "text"
})

document.addEventListener("keypress", (x) => {
    if (x.key === "Enter" && backi.style.backgroundBlendMode != "normal" || x.code === "Space" && backi.style.backgroundBlendMode != "normal") {
        document.getElementById("welcome").style.opacity = "0"
        backi.style.backgroundBlendMode = "normal"
        document.getElementById("main").style.userSelect = "text"
    }
})

let set = new Set()

const removeAll = (element) => {
    while (element.lastChild) {
        element.removeChild(element.lastChild)
    }
}

let resultList = document.getElementById("result-list")

document.getElementById("dirtinput").addEventListener("input", () => {
    var value = document.getElementById("dirtinput").value
    for (var i = 0; i < pages.length; i++) {
        if (pages[i].name.includes(value) && value != "") {
            const elm = document.createElement("li")
            elm.innerHTML = `
            <p>
                ${pages[i].name} 
            </p>
            <div>
                About:
            </div>`
            var random = Math.floor(Math.random * pages_pictures.length)
            elm.style.backgroundImage = "url('" + pages_pictures[random] + "')"
            elm.style.backgroundRepeat = "no-repeat"
            elm.style.backgroundClip = "cover"
            elm.style.backgroundPosition = "center"
            elm.style.backgroundAttachment = "fixed"
            resultList.appendChild(elm != null ? elm : null)
            set.add(elm)
        } else if (!value.includes(pages[i].name)) {
            removeAll(resultList)
        }
    }

})

window.onload = () => {
    setTimeout(() => {
        document.getElementById("welcome").style.animation = "anisextion1 1s"
        document.getElementById("welcome").style.display = "flex"
        document.getElementById("main").style.userSelect = "none"
        backi.style.backgroundBlendMode = "darken"
    }, 1000)

    var random = Math.floor(Math.random() * (pictures.length))
    if (random == 2)
        while (random == 2)
            random = Math.floor(Math.random() * (pictures.length))
    var saved_s = pictures[random].url
    backi.style.backgroundImage = "url('" + saved_s + "')";
    backi.style.backgroundRepeat = "no-repeat"
    backi.style.backgroundSize = "cover"
    backi.style.backgroundPosition = "center"
    backi.style.backgroundAttachment = "fixed"
    setInterval(function () {
        backi.classList.toggle("transi")
        random = Math.floor(Math.random() * (pictures.length))
        saved_s = pictures[random].url
        backi.style.backgroundImage = "url('" + saved_s + "')"
        backi.style.backgroundRepeat = "no-repeat"
        backi.style.backgroundSize = "cover"
        backi.style.backgroundPosition = "center"
        backi.style.backgroundAttachment = "fixed"
    }, 60000)
}


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
    {
        url: "pictures/sr243b0131f1faws3.png"
    }
]

let pages = [
    {
        id: 0,
        name: "no pages yet"
    }, {
        id: 1,
        name: "dwoadalx"
    }, {
        id: 2,
        name: "no zap"
    }, {
        id: 3,
        name: "no pages"
    },
]

let pages_pictures = [
    {
        url: "pictures/5129130.jpg"
    },
    {
        url: "pictures/1347872.jpg"
    }
]

let backi = document.getElementById("backi")
const welcomi = document.getElementById("welcome")

document.getElementById("close").addEventListener("click", () => {
    document.getElementById("welcome").style.opacity = "0"
    backi.style.backgroundBlendMode = "normal"
    document.getElementById("main").style.userSelect = "text"
    welcome_fucker()

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
            document.getElementById("bar").style.opacity = 0
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
    welcome_fucker()

})

document.getElementById("main").addEventListener("click", () => {
    document.getElementById("welcome").style.opacity = "0"
    backi.style.backgroundBlendMode = "normal"
    document.getElementById("main").style.userSelect = "text"
    welcome_fucker()

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
        welcome_fucker()
    }
})

function welcome_fucker() {
    setTimeout(() => {
        document.getElementById("welcome").remove()
        document.getElementById("welcome-msg").remove()
    }, 1000)
}

let set = new Set()

let resultList = document.getElementById("result-list")

const removeAll = (element) => { // i want anonymous be const :)
    while (element.lastChild) {
        element.removeChild(element.lastChild)
    }
}

document.getElementById("dirtinput").addEventListener("input", (x) => {
    if (resultList.getElementsByTagName("li") != 0) {
        removeAll(resultList)
    }
    var value = document.getElementById("dirtinput").value
    var doloop = true
    var checker = pages.filter((y) => {
        var bool = false
        for (var i = 0; i < pages.length; i++) {
            for (var j = 0; j < value.length; j++) {
                if (pages[i].name.includes(value.toLowerCase().charAt(j))) {
                    bool = true
                }
            }
            if (bool)
                return pages[i].name
            else
                break
        }
        return true
    }).filter((x) => {
        if (x.name.includes(value.toLowerCase())) {
            return x.name
        }
    })

    if (checker.length == 0 && value != "") {
        if (resultList.querySelectorAll("li").length == 0) {
            const elm = document.createElement("p")
            elm.innerHTML = `<p id="fuckduck">No pages found :(</p>`
            resultList.appendChild(elm)
            document.getElementById("news").style.display = "none"
            doloop = false
        }
    }
    if (doloop && value != "") {
        document.getElementById("news").style.display = "none"
        for (let name of checker.values()) {

            const elm = document.createElement("li")
            elm.innerHTML = `
                <p>
                    ${name.name} 
                </p>
                <div>
                    ID: ${name.id}
                </div>`
            var random = Math.floor(Math.random() * pages_pictures.length)

            elm.style.backgroundImage = "url('" + pages_pictures[random].url + "')"
            elm.style.backgroundRepeat = "no-repeat"
            elm.style.backgroundClip = "cover"
            elm.style.backgroundPosition = "center"
            if (resultList.querySelectorAll("li").length <= 0) {
                resultList.appendChild(elm != null ? elm : null)
            } else if (resultList.querySelectorAll("li").length > 0) {
                resultList.insertBefore(elm, elm.previousSibling)
            }
        }
    } else if (value == "") {
        document.getElementById("news").style.display = "flex"
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
    if (random == 9) {
        document.getElementById("msg").style.color = "white"
    }
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


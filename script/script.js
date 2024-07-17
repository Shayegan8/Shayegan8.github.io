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
    },
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
    }
]

let backi = document.getElementById("backi")
const welcomi = document.getElementById("welcome")

document.getElementById("close").addEventListener("click", () => {
    document.getElementById("welcome").style.opacity = "0"
    backi.style.backgroundBlendMode = "normal"
    document.getElementById("result").style.userSelect = "text"
    welcome_fucker()

})

document.getElementById("pixelshit").addEventListener("click", () => {
    if (!document.contains(document.getElementById("bar"))) {
        const divi = document.createElement("div")
        divi.id = "bar"
        divi.innerHTML = `<ul>
        <li>
            Pages:
        </li>
        <li>
            - Nothing found
        </li>
    </ul>`
        divi.style.opacity = 1
        divi.style.animation = "none"
        divi.offsetWidth
        divi.style.animation = "slide-anisextion 0.5s"
        document.body.appendChild(divi)
    }
})

document.body.addEventListener("click", (x) => {
    var str = new String(x.target.id)
    if (document.getElementById("bar").style.opacity == "1" && !str.includes("pixelshit")) {
        setTimeout(() => { }, 1)
        if (!str.includes("bar")) {
            document.getElementById("bar").style.animation = "none"
            document.getElementById("bar").offsetWidth
            document.getElementById("bar").style.animation = "slide-anisextion1 0.5s"
            setTimeout(() => {
                document.body.removeChild(document.getElementById("bar"))
            }, 400)
        }
    }
})

document.body.addEventListener("click", (x) => {
    var str = new String(x.target.id)
    if (!(str.includes("welcome") || str.includes("welcome-msg"))) {
        document.getElementById("welcome").style.opacity = "0"
        backi.style.backgroundBlendMode = "normal"
        document.getElementById("result").style.userSelect = "text"
        welcome_fucker()
    }
})

document.addEventListener("keypress", (x) => {
    if (x.key === "Enter" && backi.style.backgroundBlendMode != "normal" || x.code === "Space" && backi.style.backgroundBlendMode != "normal") {
        document.getElementById("welcome").style.opacity = "0"
        backi.style.backgroundBlendMode = "normal"
        document.getElementById("result").style.userSelect = "text"
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

document.getElementById("theme").addEventListener("click", () => {
    if (backi.style.backgroundColor.includes("black")) {
        document.getElementById("result").style.transition = "background-color 1s"
        document.getElementById("dirtinput").style.transition = "background-color 1s"
        document.getElementById("navi").style.transition = "background-color 1s"
        document.getElementById("news").style.transition = "background-image 1s"
        backi.style.transition = "background-color 1s"
        backi.style.backgroundColor = "rgb(185, 178, 206)"
        document.getElementById("result").style.backgroundColor = "rgb(185, 178, 206)"
        document.getElementById("navi").style.backgroundColor = "rgb(185, 245, 255)"
        document.getElementById("navi").style.boxShadow = "0 4px 2px -2px gray"
        document.getElementById("dirtinput").style.color = "black"
        document.getElementById("news").style.backgroundImage = "linear-gradient(to left, rgb(21, 83, 177), rgb(13, 76, 134), rgb(0, 47, 117))"
        document.getElementById("result-list").style.backgroundImage = "linear-gradient(to left, rgb(21, 83, 177), rgb(13, 76, 134), rgb(0, 47, 117))"
    } else {
        document.getElementById("result").style.transition = "background-color 1s"
        document.getElementById("dirtinput").style.transition = "background-color 1s"
        document.getElementById("navi").style.transition = "background-color 1s"
        document.getElementById("news").style.transition = "background-image 1s"
        backi.style.transition = "background-color 1s"
        backi.style.backgroundColor = "black"
        document.getElementById("result").style.backgroundColor = "black"
        document.getElementById("navi").style.backgroundColor = "rgb(10, 10, 10)"
        document.getElementById("navi").style.boxShadow = "none"
        document.getElementById("dirtinput").style.color = "white"
        document.getElementById("news").style.backgroundImage = "linear-gradient(to left, rgb(30, 14, 73), rgb(21, 0, 78), rgb(14, 0, 54))"
        document.getElementById("result-list").style.backgroundImage = "linear-gradient(to left, rgb(30, 14, 73), rgb(21, 0, 78), rgb(14, 0, 54))"
    }
})

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
                resultList.appendChild(elm)
            } else {
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
        document.getElementById("result").style.userSelect = "none"
    }, 1000)

    if (window.matchMedia) {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            document.getElementById("result").style.transition = "none"
            document.getElementById("dirtinput").style.transition = "none"
            document.getElementById("navi").style.transition = "none"
            document.getElementById("news").style.transition = "none"
            backi.style.transition = "none"
            backi.style.backgroundColor = "black"
            document.getElementById("result").style.backgroundColor = "black"
            document.getElementById("navi").style.backgroundColor = "rgb(10, 10, 10)"
            document.getElementById("navi").style.boxShadow = "none"
            document.getElementById("dirtinput").style.color = "white"
            document.getElementById("news").style.backgroundImage = "linear-gradient(to left, rgb(30, 14, 73), rgb(21, 0, 78), rgb(14, 0, 54))"
            document.getElementById("result-list").style.backgroundImage = "linear-gradient(to left, rgb(30, 14, 73), rgb(21, 0, 78), rgb(14, 0, 54))"
        } else {
            document.getElementById("result").style.transition = "none"
            document.getElementById("dirtinput").style.transition = "none"
            document.getElementById("navi").style.transition = "none"
            document.getElementById("news").style.transition = "none"
            backi.style.transition = "none"
            backi.style.backgroundColor = "rgb(185, 178, 206)"
            document.getElementById("result").style.backgroundColor = "rgb(185, 178, 206)"
            document.getElementById("navi").style.backgroundColor = "rgb(185, 245, 255)"
            document.getElementById("navi").style.boxShadow = "0 4px 2px -2px gray"
            document.getElementById("dirtinput").style.color = "black"
            document.getElementById("news").style.backgroundImage = "linear-gradient(to left, rgb(21, 83, 177), rgb(13, 76, 134), rgb(0, 47, 117))"
            document.getElementById("result-list").style.backgroundImage = "linear-gradient(to left, rgb(21, 83, 177), rgb(13, 76, 134), rgb(0, 47, 117))"
        }
    }
}


let pictures = [
    {
        id: 0,
        url: "pictures/590cdbc4efd19b9.png"
    },
    {

        id: 1,
        url: "pictures/a9b7de6cf1eb0ba.png"
    },
    ,
    {

        id: 2,
        url: "pictures/ce3d8296f78ea76.png"
    },
    {

        id: 3,
        url: "pictures/de9dfd288762147.png"
    },
    {

        id: 4,
        url: "pictures/eaa93d44df76eb3.png"
    },
    {

        id: 5,
        url: "pictures/sr2b683934a5e31.png"
    },
    {

        id: 6,
        url: "pictures/sr2bddd005c62aws3.png"
    },
    {

        id: 7,
        url: "pictures/sr20cfed9993daws3.png"
    },
    {

        id: 8,
        url: "pictures/sr28991f9e3a2aws3.png"
    },
]

let backi = document.getElementById("backi")

function intervalparm() {
    var random = Math.floor(Math.random() * (pictures.length - 1))
    var saved = pictures[random].url
    backi.style.backgroundImage = "url('" + saved + "')"
    backi.style.backgroundRepeat = "no-repeat"
    backi.style.backgroundSize = "cover"
    backi.style.backgroundPosition = "center"
    backi.style.backgroundAttachment = "fixed"
}

function anima() {
    var random = Math.floor(Math.random() * (pictures.length - 1))
    var saved = pictures[random].url
    backi.style.backgroundImage = "linear-gradient(to top, "
    backi.style.backgroundRepeat = "no-repeat"
    backi.style.backgroundSize = "cover"
    backi.style.backgroundPosition = "center"
    backi.style.backgroundAttachment = "fixed"

}

document.getElementById("close").addEventListener("click", () => {
    document.getElementById("welcome").style.opacity = "0"
    backi.style.backgroundBlendMode = "normal"
})

window.onload = () => {
    setTimeout(() => {
        document.getElementById("welcome").style.animation = "anisextion1 1s"
        document.getElementById("welcome").style.display = "flex"
        backi.style.backgroundBlendMode = "darken"
    }, 1000)

    var random = Math.floor(Math.random() * (pictures.length - 1))
    if (random == 2)
        while (random == 2)
            random = Math.floor(Math.random() * (pictures.length - 1))
    var saved_s = pictures[random].url
    backi.style.backgroundImage = "url('" + saved_s + "')";
    backi.style.backgroundRepeat = "no-repeat"
    backi.style.backgroundSize = "cover"
    backi.style.backgroundPosition = "center"
    backi.style.backgroundAttachment = "fixed"
    setInterval(function () {
        backi.classList.toggle("transi")
        random = Math.floor(Math.random() * (pictures.length - 1))
        saved_s = pictures[random].url
        backi.style.backgroundImage = "url('" + saved_s + "')"
        backi.style.backgroundRepeat = "no-repeat"
        backi.style.backgroundSize = "cover"
        backi.style.backgroundPosition = "center"
        backi.style.backgroundAttachment = "fixed"
    }, 60000)
}


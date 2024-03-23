// @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-v3-or-Later
let values = [
    {
        id: 1,
        name: "arenamanager",
        description: "About simple arenaManager",
        href: "kir"
    },
    {
        id: 2,
        name: "Papijoy",
        description: "papijoy",
        href: "kos"
    },
    {
        id: 3,
        name: "Sexistan Empire",
        description: "The truth you should know",
        href: "https://shayegan8.github.io/sexistan.html"
    }
];

filtered = document.getElementById("pages");   
const inputistan = document.getElementById("searchi");     
inputistan.addEventListener('keyup', (x) => {
    const inputString = x.target.value.toLowerCase();

    let filtereds = values.filter((x) => {
        return x.name.includes(inputString);
    });
    if(filtereds.length == 0) {
        document.getElementById("main").style.display = 'none';
        filtered.style.display = 'none';
        document.getElementById("notfound").style.display = 'block';
    } else {
        showPages(filtereds);
    }
});

function showPages(valuess) {
    const cards = valuess.map((x) => {
        return `
            <div class="card p-4 ps-4 pe-4 m-2 text-danger" style="width: 100%; background-color: black;">
                <div class="card-body" style="background-color: black;">
                    <h5 class="card-title">${x.name}</h5>
                    <p class="card-text">${x.description}</p>
                    <a href="${x.href}" class="btn btn-dark">Check this post</a>
            </div>
        </div>`;
    }).join('');
        if(inputistan.value != "") {
            document.getElementById("main").style.display = 'none';
            document.getElementById("notfound").style.display = 'none';
            filtered.style.display = 'block';
        } else {
            document.getElementById("main").style.display = 'block';
            filtered.style.display = 'none';
            document.getElementById("notfound").style.display = 'none';
        }
    filtered.innerHTML = cards;
}

function redirectT(red) {
    let current = location.href.split("/");
    String.prototype.format
    newStr = null;
    for(var i = 0; i < current.length; i++) {
        if(i == (current.length - 1)) {
            newStr += `${red}`;
        }
        newStr += `${current[i]}/`;
    }
    return newStr;
}

showPages(values);
// @license-end
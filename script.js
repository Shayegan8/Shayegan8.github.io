// @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-v3-or-Later
let values = [
    {
        id: 1,
        name: "arenamanager",
        description: "About simple arenaManager",
        href: "https://shayegan8.github.io/arenamanager.html"
    },
    {
        id: 2,
        name: "papijoy",
        description: "papijoy",
        href: "kos"
    },
    {
        id: 3,
        name: "sexistan empire",
        description: "The truth you should know",
        href: "https://shayegan8.github.io/sexistan.html"
    }
];

inputistan = document.getElementById("searchi");
inputistan.addEventListener('keyup', (x) => {

    filtered = document.getElementById("pages");
    const inputString = x.currentTarget.value.toLowerCase();

    /**
     * let filtereds = values.filter((y) => {
        return y.name.includes(inputString);
    })
     */

    let filtereds = values.filter((x) => {
        let i = 0;

        outshit: while (i <= values.length) {
            const str = values[i].name;
            let binded_inp = inputString;
            let j = 0;
            let add_it = false;
            while (j <= binded_inp.length) {
                if (str.includes(binded_inp.charAt(j))) {
                    add_it = true;
                } else {
                    add_it = false;
                }
                j++;
            }
            if (add_it) {
                return str;
            } else {
                break outshit;
            }
            i++;
        }
    }).filter((x) => x.name.includes(inputString));

    if (filtereds.length == 0) {
        document.getElementById("main").style.display = 'none';
        filtered.style.display = 'none';
        document.getElementById("notfound").style.display = 'block';
    } else {
        const cards = filtereds.map((x) => {
            return `
                <div class="card p-4 ps-4 pe-4 m-2 text-danger" style="width: 100%; background-color: black;">
                    <div class="card-body" style="background-color: black;">
                        <h5 class="card-title">${x.name}</h5>
                        <p class="card-text">${x.description}</p>
                        <a href="${x.href}" class="btn btn-dark">Check this post</a>
                </div>
            </div>`;
        }).join('');

        document.getElementById("main").style.display = 'none';
        document.getElementById("notfound").style.display = 'none';
        filtered.style.display = 'block';
        if (inputistan.value == "") {
            document.getElementById("main").style.display = 'block';
            filtered.style.display = 'none';
            document.getElementById("notfound").style.display = 'none';
        }
        filtered.innerHTML = cards;
    }
    if (inputistan.value == "") {
        document.getElementById("main").style.display = 'block';
        filtered.style.display = 'none';
        document.getElementById("notfound").style.display = 'none';
    }
});

function res() {
    if (document.getElementById("shitass").style.display == 'none') {
        document.getElementById("shitass").style.display = 'flex';
    } else {
        document.getElementById("shitass").style.display = 'none';
    }

}

function showp() {
    if (document.getElementById('bar').style.display != 'flex') {
        document.getElementById('bar').style.display = 'flex';
    } else {
        document.getElementById('bar').style.display = 'none';
    }
}

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

    document.getElementById("main").style.display = 'none';
    document.getElementById("notfound").style.display = 'none';
    filtered.style.display = 'block';
    if (inputistan.value == "") {
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
    for (var i = 0; i < current.length; i++) {
        if (i == (current.length - 1)) {
            newStr += `${red}`;
        }
        newStr += `${current[i]}/`;
    }
    return newStr;
}

showPages(values);
// @license-end
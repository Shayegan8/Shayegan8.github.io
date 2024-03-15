
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
        showPages(filtereds, true);
    }
});

function showPages(valuess, booli) {
    const cards = valuess.map((x) => {
        return `
            <div class="card p-4 ps-4 pe-4 m-2 bg-dark text-danger" style="width: 100%;">
                <div class="card-body">
                    <h5 class="card-title">${x.name}</h5>
                    <p class="card-text">${x.description}</p>
                    <a href="${x.href}" class="btn btn-dark">Check this post</a>
            </div>
        </div>`;
    }).join('');
        if(inputistan.value != "") {
            document.getElementById("main").style.display = 'none';
            filtered.style.display = 'block';
        } else {
            document.getElementById("main").style.display = 'block';
            filtered.style.display = 'none';
            document.getElementById("notfound").style.display = 'none';
        }
    filtered.innerHTML = cards;
}

showPages(values, true);
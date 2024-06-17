const cardContainer = document.querySelector('.card-container');

fetch('/icecreams')
.then(myData => myData.json())
.then(jsonData => showIcecreams(jsonData));

function showIcecreams(icecreams) {
    console.log(icecreams);
    for (let i = 0; i < icecreams.length; i++) {
        const icecream = icecreams[i];
        htmlCode += icecreamCard(icecream);
    }
}

function icecreamCard(icecream) {
    const card = `
            <div class="col-md-3">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">${icecream.icecream}</h4>
                    <p class="card-text">${icecream.description}</p>
                    <p class="card-text">€ ${icecream.price}</p>
                </div>
            </div>
        </div>`;
    return card;

}
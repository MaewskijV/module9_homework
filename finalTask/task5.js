let submitButton = document.querySelector("button");
let errorField = document.querySelector(".error-field");
let resultField = document.querySelector(".result-field");

if (isItemExist("last_photos")) {
    resultField.innerHTML = localStorage.getItem("last_photos");
}

submitButton.addEventListener('click', async () => {
    errorField.innerHTML = '';
    console.log(`start`)
    
    let firstInputValue = +document.getElementById("input-1").value;
    let secondInputValue = +document.getElementById("input-2").value;
    if ((firstInputValue < 1 || firstInputValue > 10) && (secondInputValue < 1 || secondInputValue > 10)) {
        errorField.innerHTML = `<p>Номер страницы и лимит вне диапазона от 1 до 10</p>`;
    } else if (secondInputValue < 1 || secondInputValue > 10) {
        errorField.innerHTML = `<p>Лимит вне диапазона от 1 до 10</p>`;
    } else if (firstInputValue < 1 || firstInputValue > 10 ) {
        errorField.innerHTML = `<p>Номер страницы вне диапазона от 1 до 10</p>`;
    }  else {
        await fetch(`https://picsum.photos/v2/list?page=${firstInputValue}&limit=${secondInputValue}`)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            displayResult(json);
            localStorage.setItem("last_photos", resultField.innerHTML);
            console.log(localStorage.getItem("last_photos"))
        })
    }
    console.log(`end`)
})

function displayResult (apiData) {
    let cards = '';

    apiData.forEach(element => {
        const cardBlock = `
        <div class="card" style="display: flex;">
            <img
            src=${element.download_url}
            style="width: 600px; margin-bottom: 30px"
            >
            <p>${element.author}</p>
        </div>
        `;
        cards+= cardBlock;
    });
    resultField.innerHTML = cards;
}

function isItemExist(name) {
    return (name in localStorage)
}
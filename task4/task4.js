let submitButton = document.querySelector("button");
let errorField = document.querySelector(".error-field");
let errorString = `<p>Одно из чисел вне диапазона от 100 до 300</p>`;

submitButton.addEventListener('click', async () => {
    errorField.innerHTML = '';
    console.log(`start`)
    let firstInputValue = +document.getElementById("input-1").value;
    let secondInputValue = +document.getElementById("input-2").value;
    document.querySelector(".result-img").src = ``;
    if (firstInputValue < 100 || firstInputValue > 300 || secondInputValue < 100 || secondInputValue > 300) {
        errorField.innerHTML = errorString;
    } else {
        await fetch(`https://picsum.photos/${firstInputValue}/${secondInputValue}`)
        .then((response) => {
            document.querySelector(".result-img").src = response.url;
            console.log(`async`)
        });
    }
    console.log(`end`)
})

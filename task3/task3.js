
const value = document.querySelector('input');
const btn = document.querySelector("button");
const errorField = document.querySelector(".error");
const errorString = `<p>Число вне диапазона от 1 до 10</p>`;
const resultNode = document.querySelector(".result-field")


btn.addEventListener ('click', () => {
    errorField.innerHTML = '';
  if (value.value < 1 || value.value > 10) {
    errorField.innerHTML = errorString;
  } else {
    useRequest (`https://picsum.photos/v2/list?limit=${value.value}`, displayResult)
  }

})

function useRequest(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = function () {
    const result = JSON.parse(xhr.response);
    if (callback) {
      callback(result);
    }
  }
  xhr.send();
}

function displayResult (apiData) {
  let cards = '';
  apiData.forEach(element => {
    const cardBlock = `
    <div class="card">
      <img
        src="${element.download_url}"
        class="card-image"
      />
      <p style="padding-left: 30px;">${element.author}</p>
    </div>
  `;
    cards += cardBlock;
  });
  resultNode.innerHTML = cards;
}
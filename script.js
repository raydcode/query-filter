import countryList from './data.js';

const search = document.querySelector('.search');

const list = document.getElementById('list');

let output = '';
countryList.forEach((country) => {
  output += `<li>${country}</li>`;
});

list.innerHTML = output;

search.addEventListener('input', () => {
  const inputValue = search.value;
  const li = document.getElementsByTagName('li');

  for (let i = 0; i < li.length; i++) {
    if (li[i].innerHTML.toLowerCase().includes(inputValue)) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
});

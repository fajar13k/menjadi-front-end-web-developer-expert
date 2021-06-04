import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

const api_url = "/DATA.json";

const toggle = document.querySelector('.toggle');
const listItem = document.querySelectorAll('.item');
const cardRestoran = document.querySelector('#card__restoran');

// Toggle untuk drawer

toggle.addEventListener('click', () => {
  for (let i = 0; i < listItem.length; i++) {
    if (listItem[i].classList.contains('active')) {
      listItem[i].classList.toggle('active');
    } else {
      listItem[i].classList.toggle('active');
    }
  }
})

// Definisi fungsi async

const getApi = async (url) => {
  // Simpan response
  const response = await fetch(url);

  // Simpan data dalam JSON
  const data = await response.json();
  console.log(data.restaurants);
  if (response) {
    console.log("Berhasil");
  }
  show(data);
}

// Panggil fungsi async

getApi(api_url);

// Fungsi untuk attach innerHTML ke dalam card

const show = data => {

  let card = '';

  for (let res of data.restaurants) {
    card += `
    <article class="post-item" tabindex="0">
      <div class="box">
        <img class="post-item__thumbnail"
          src="${res.pictureId}"
          alt="Gambar ${res.name} di ${res.city}">
        <div class="post-item__overlay">
          <h1>${res.city}</h1>
        </div>
      </div>
      <div class="post-item__content">
          <p class="post-item__rating">Rating: <span class="post-item__rating__score">${res.rating}/5</span>
          </p>
          <h1 class="post-item__title" tabindex="-1"><a href="#" tabindex="-1">${res.name}</a></h1>
          <p class="post-item__description">${res.description}</p>
      </div>
    </article>`;
  }

  // Tempel ke innerHTML card sebagai variabel
  cardRestoran.innerHTML = card;
}
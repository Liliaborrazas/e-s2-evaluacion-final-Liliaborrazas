'use strict';

//Recojo los campos con los que voy a trabajar
const api =`http://api.tvmaze.com/search/shows?q=`;
const input = document.querySelector('#search');
const films = document.querySelector('.films');
const btn = document.querySelector('.btn');
const title = document.querySelector('.title');

function search(){
  const userSearch = input.value;
  console.log(userSearch);
  fetch(api+userSearch)
    .then(response=> response.json())
    .then(data=>{

      let items='';
      for(let i=0; i<data.length; i++){
        const nameFilms= data[i].show.name;
        const imagesFilms= data[i].show.image;
        console.log(imagesFilms);

        items+=`<li class="films__list-name">
        <div class="films__list"></div>
        <h2>${nameFilms}</h2>
        <img src="${imagesFilms}" class="films__imag">

      </li>
      `

      }
    films.innerHTML = items;
    });
}
btn.addEventListener('click', search);


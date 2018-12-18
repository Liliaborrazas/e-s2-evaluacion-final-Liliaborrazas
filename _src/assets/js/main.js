'use strict';

const api =`http://api.tvmaze.com/search/shows?q=`;
const input = document.querySelector('#search');
const films = document.querySelector('.films');
const btn = document.querySelector('.btn');
let arrayFilms =[];


const search = ()=>{
  const userSearch = input.value;
  fetch(api+userSearch)
    .then(response=> response.json())
    .then(data=>{
      let items='';
      for(let i=0; i<data.length; i++){
        const nameFilms= data[i].show.name;
        const imagesFilms= data[i].show.image;
        const idFilms= data[i].show.id;
        if(imagesFilms === null ){
          items+=`<li class="films__list">
        <div class="container__films">
        <div class="films__list-id">${idFilms}</div>
        <img src="https://via.placeholder.com/210x295/cccccc/666666/?text=TV" class="films__list-img">
        <h2 class="films__list-name">${nameFilms}</h2>
        </div>
        </li>`;
        }else{
          items+=`<li class="films__list">
        <div class="container__films">
        <div class="films__list-id">${idFilms}</div>
        <img src="${imagesFilms.original}" class="films__list-img">
        <h2 class="films__list-name">${nameFilms}</h2>
        </div>
        </li>`;
        }



        films.innerHTML = items;

        const list= document.querySelectorAll('.films__list');
        for(let i=0; i<list.length; i++){
          list[i].addEventListener('click', favorite);
        }
      }
    });
};



function favorite(e){
  const author = e.currentTarget;
  const idFilm = author.querySelector('.films__list-id');
  const nameTitle = idFilm.innerHTML;
  author.classList.toggle('marFavorit');
  if(arrayFilms.includes(nameTitle)){
    const indexFav = arrayFilms.indexOf(nameTitle);
    arrayFilms.splice(indexFav, 1);
  }else{
    arrayFilms.push(nameTitle);
  }
  localStorage.setItem('favorit', arrayFilms);
}



btn.addEventListener('click', search);

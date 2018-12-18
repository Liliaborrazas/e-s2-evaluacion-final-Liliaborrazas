'use strict';

const api =`http://api.tvmaze.com/search/shows?q=`;
const input = document.querySelector('#search');
const films = document.querySelector('.films');
const btn = document.querySelector('.btn');

const search = ()=>{
  const userSearch = input.value;
  fetch(api+userSearch)
    .then(response=> response.json())
    .then(data=>{
      let items='';
      for(let i=0; i<data.length; i++){
        console.log(data[i]);
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
      }
      films.innerHTML = items;

      const list= document.querySelectorAll('.films__list');
      for(let i=0; i<list.length; i++){
        list[i].addEventListener('click', favorite);
      }

    });

};
let arrayFilms =[];

const favorite = (e)=>{
  const author = e.currentTarget;
  const idFilm = author.querySelector('.films__list-id');
  console.log(idFilm);
  const nameTitle = idFilm.innerHTML;
  console.log(nameTitle);
  author.classList.toggle('marFavorit');
  if(arrayFilms.includes(nameTitle)){
    //console.log(`${nameTitle} is in arrayFilms`);
    const indexFav = arrayFilms.indexOf(nameTitle);
    //console.log(indexFav);
    //console.log(arrayFilms);
    arrayFilms.splice(indexFav, 1);
    //console.log(arrayFilms);
  }else{
    //console.log(`${nameTitle} is not in arrayFilms`);
    arrayFilms.push(nameTitle);
    //console.log(arrayFilms);
  }
  localStorage.setItem('favorit', arrayFilms);
};



btn.addEventListener('click', search);

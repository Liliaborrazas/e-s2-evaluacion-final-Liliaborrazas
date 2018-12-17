'use strict';

//Recojo los campos con los que voy a trabajar
const api =`http://api.tvmaze.com/search/shows?q=`;
const input = document.querySelector('#search');
const films = document.querySelector('.films');
const btn = document.querySelector('.btn');
const title = document.querySelector('.title');

function search(){
  const userSearch = input.value;
  fetch(api+userSearch)
    .then(response=> response.json())
    .then(data=>{

      let items='';
      for(let i=0; i<data.length; i++){
        const nameFilms= data[i].show.name;
        const imagesFilms= data[i].show.image;
        if(imagesFilms === null ){
          items+=`<li class="films__list">
          <img src="https://via.placeholder.com/210x295/cccccc/666666/?text=TV" class="films__list-img">
          <h2 class"films__list-name">${nameFilms}</h2>
      </li>`
        }else{
          items+=`<li class="films__list">
          <div class="container__films">
          <img src="${imagesFilms.original}" class="films__list-img">
          <h2 class"films__list-name">${nameFilms}</h2>
          </div>
        </li>`
        }
      }
      films.innerHTML = items;
      const list= document.querySelectorAll('.films__list');
      for(let i=0; i<list.length; i++){
        list[i].addEventListener('click', favorite);
    }
    });


}
btn.addEventListener('click', search);

//Añadir como favorito

function favorite(e){
  const author = e.currentTarget;
  author.classList.toggle('marFavorit');
  console.log(author)
}





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
        if(imagesFilms === null ){
          items+=`<li class="films__list">
        <h2 class"films__list-name"></h2>
        <img src="https://via.placeholder.com/210x295/cccccc/666666/?text=TV" class="films__list-img">
      </li>
      `
        }else{
          items+=`<li class="films__list">
          <h2 class"films__list-name">${nameFilms}</h2>
          <img src="${imagesFilms.original}" class="films__list-img">
        </li>
        `

        }


      }
      films.innerHTML = items;
    });


}
btn.addEventListener('click', search);


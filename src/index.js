import { topTenURL } from "./js/api.js";
import "./js/components/song-details.js";

import "./js/components/song-item.js";

window.addEventListener("load", () => {
  fetchSongList();
});

async function fetchSongList() {
  try {
    const res = await fetch(topTenURL);
    const data = await res.json();

    console.log();
    const songList = data.feed.entry;
    const main = document.querySelector("main");
    const detail = document.querySelector("detail");

    const ulElment = document.createElement("ul");
    ulElment.classList.add('media-list', 'main-list');
    
    songList.forEach(item => {
      const liElment = document.createElement("li");
      console.log(item["im:image"][0]["label"]);
      const el = document.createElement("song-item");
      console.log(el);
      el.songItem = item;
      liElment.append(el) ;
      ulElment.appendChild(liElment) ;
      
    });
    main.appendChild(ulElment);


    const detailElemt = document.createElement("song-details");
    detail.appendChild(detailElemt);
  } catch (e) {
    console.log("Error in fetching data " + e);
  }
}

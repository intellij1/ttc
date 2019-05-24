import { topTenURL } from "./js/api.js";
import "./js/components/song-details.js";
import "./js/components/song-item.js";

// This will ensure the complete load and song List 
window.addEventListener("load", () => {
  fetchSongList();
});

async function fetchSongList() {
  try {
    const res = await fetch(topTenURL);
    const data = await res.json();

    const songList = data.feed.entry;
    const main = document.querySelector("main");
    const detail = document.querySelector("detail");

    const ulElment = document.createElement("ul");
    ulElment.classList.add("media-list", "main-list");

    // generating the items for il tag using custom Element
    songList.forEach(item => {
      const liElment = document.createElement("li");
      const el = document.createElement("song-item");
      el.songItem = item;
      liElment.append(el);
      ulElment.appendChild(liElment);
    });
    // appending UL list  in the main tag 
    main.appendChild(ulElment);

    const detailElemt = document.createElement("song-details");
    detail.appendChild(detailElemt);
    
  } catch (e) {
    console.log("Error in fetching data " + e);
  }
}

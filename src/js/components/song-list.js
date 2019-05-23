import BaseElement from "./base-element.js";

class SongList extends BaseElement {
  

  constructor() {
    super();
  }

  set itemList(dataList) {
  this._itemList = dataList ;
  this.render() ; 
  
  }

get itemList(){
  return this._itemList ; 
}

  render () {
    
    this.root.innerHTML = `
    <ul>
    
 
    ${this.itemList.forEach(item => {
        console.log(item["im:image"][0]["label"]);
        const el = document.createElement("song-item");
        console.log(el);
        el.songItem = item;
  

  }
);
}

</ul>`
}

customElements.define("song-item", SongItem);

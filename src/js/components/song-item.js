import BaseElement from "./base-element.js";

class SongItem extends BaseElement {
  

  constructor() {
    super();
  }

  set songItem(item) {
  console.log (item) ; 
  this.title = item.title.label || '' ;
  this.imageUrl = item['im:image'][2]['label'] || ''; 
  this.thumbnailImageUrl = item['im:image'][0]['label'] || ''; 
  this.audioUrl = item.link[1]['attributes'].href || ''; 
  this.artistName   = item['im:artist'].label 
  this.artistUrl   = item['im:artist'].attributes.href
  

  console.log (this.audioUrl) ; 
  this.render() ; 
  
  }
get songItem(){
  this .songItem
}


  connectedCallback() {
    // Seting  a click listener on component
    this.addEventListener("click", e => {

      // Custom Event generated with the required details
      let event = new CustomEvent("ItemClicked", {
        detail: {
          title: this.title ,
          imageUrl: this.imageUrl,
          audioUrl:this.audioUrl,
          artistName : this.artistName,
          artistUrl : this.artistUrl
        },
        bubbles: true
      });
      this.dispatchEvent(event);      
    });

   

  }
  render () {
    this.innerHTML = 
    `
      <style>
      .main-list .media {
        padding-bottom: 1.1em;
        border-bottom: 2px solid #e8e8e8;
        border-top: 2px solid #e8e8e8;
      }
      .song-title {
        line-height: 1.3;
        color: #aab6aa;
      }

      /* Style to Artist */
      .by-artist {
        font-style: italic;
        line-height: 1.3;
        color: #aab6aa;
      }

      </style>
    
    <div class="media song-item">
          <img class="media-object pull-left" src="${this.thumbnailImageUrl || ''}" alt="..."> 
          <div class="media-body">
            <h5 class="media-heading">${this.title}</h5>
            <p class="by-artist"> By ${this.artistName}</p>
          </div>
      </div>
  `
    ;


  }
  // Setter 
  // song property will also reflect as attribute
  set title(name) {
    this.setAttribute("title", name);
  }
  // Getter  
  // song property will also reflect as attribute

  get title() {
    return this.getAttribute("title");
  }


  // Setter 
  // song Url property will also reflect as attribute
  set songUrl(songUrl) {
    this.setAttribute("song-url", songUrl);
  }
  // Getter  
  // song Url property will also reflect as attribute

  get songUrl() {
    return this.getAttribute("song-url");
  }

  // Setter 
  // thumbnail-image-url  Url property will also reflect as attribute
  set thumbnailImageUrl(url) {
    this.setAttribute("thumbnail-image-url",url);
  }
  // Getter  
  // thumbnail-image-url Url property will also reflect as attribute

  get thumbnailImageUrl() {
    return this.getAttribute("thumbnail-image-url");
  }


  // Setter 
  // song Url property will also reflect as attribute
  set imageUrl(url) {
    this.setAttribute("image-url",url);
  }
  // Getter  
  // song Url property will also reflect as attribute

  get imageUrl() {
    return this.getAttribute("image-url");
  }

  

// Setter 
  // audioUrl property will also reflect as attribute
  set audioUrl(url) {
    this.setAttribute("audio-url",url);
  }
  // Getter  
  // audioUrl property will also reflect as attribute

  get audioUrl() {
    return this.getAttribute("audio-url");
  }



// Setter 
  // artistName property will also reflect as attribute
  set artistName(name) {
    this.setAttribute("artist-name",name);
  }
  // Getter  
  // artistName property will also reflect as attribute
  get artistName() {
    return this.getAttribute("artist-name");
  }

  
}

customElements.define("song-item", SongItem);

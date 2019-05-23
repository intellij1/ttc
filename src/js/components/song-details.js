import BaseElement from "./base-element.js";

export class SongDetails extends BaseElement {
  constructor() {
    super();
  }

  // Getter to let component know what attributes
  // to watch for mutation
  static get observedAttributes() {
    return ["title"];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this.render();

    // updateStyle(this);
  }
  set title(title) {
    this.setAttribute("title", title);
  }
  get title() {
    return this.getAttribute("title");
  }

  render() {
    
    this.innerHTML = `
          <div class="featured-detail">
            <div class="row" >
              <img src="${this.imageUrl}" alt="" class="image-detail">  
            </div> 
            <div class="row" >
              <div class="block-title">
                <h2>${this.title || "Please click on Song"}</h2>
                <p class="by-author"><small> 
                  <a href="${this.artistUrl}">${this.artistName || ''}</a></small>
                </p>
                
              </div>
            </div>
            <div class="row" >            
              <audio controls preload="metadata" title="${this.title}">
                <source src= ${this.audioUrl || ""} >
                <p>Unsuported Browser</p>
              </audio>
            </div>  
          </div>
        `;
  }


  connectedCallback() {
    window.addEventListener("ItemClicked", e => {
      // setting of Event Data 
      this.audioUrl = e.detail.audioUrl || "";
      this.imageUrl = e.detail.imageUrl || "";
      this.artistName = e.detail.artistName  || "";
      this.artistUrl = e.detail.artistUrl || "";
      // Title should be at the end because it is mentioned in observedAttributes
      this.title = e.detail.title || "";


    });
    // intial load 
    this.render();
  }
}
customElements.define("song-details", SongDetails);

import BaseElement from "./base-element.js";

/**
 * This class is implementation of Song Detail 
 * custom element.
 */

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
  }
  //  Setter: property  and attribute
  set title(title) {
    this.setAttribute("title", title);
  }

  // Getter : property and attribute
  get title() {
    return this.getAttribute("title");
  }

  // This function is reponsible for rendering the HTML content
  render() {
    this.innerHTML = `

      <style>
      /* Detail Song Div 
      -------------------------------------
      * Featured Song  Picture
      * have a image and a text title.
      */
      .featured-detail {
        width: 482px;
        height: 350px;
        position: relative;
        margin-bottom: 1em;
      }
      
      .featured-detail .block-title {
        /* Position & Box Model */
        position: relative;
        bottom: 0;
        left: 0;
        z-index: 1;
        /* background */
        background: rgba(0,0,0,0.7);
        /* Width/Height */
        padding: .5em;
        width: 100%;
        /* Text color */
        color: #fff;
      }
      
      .featured-detail .block-title h2 {
        margin: 0;
      }

      /* image  */
      .image-detail {
        display: block;
        width: 100%;
        margin: 0;
        border:1px solid #ccc;
      }
      audio {
        width: 100%
      }
      </style>

      <div class="featured-detail">
        <div class="row" >
          <img src="${this.imageUrl}" alt="" class="image-detail">  
        </div> 
        <div class="row" >
          <div class="block-title">
            <h2>${this.title || "Please click on Song"}</h2>
            <p class="by-author"><small> 
              <a href="${this.artistUrl}">${this.artistName || ""}</a></small>
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

  // LifeCycle method
  connectedCallback() {
    window.addEventListener("ItemClicked", e => {
      // setting of Event Data
      this.audioUrl = e.detail.audioUrl || "";
      this.imageUrl = e.detail.imageUrl || "";
      this.artistName = e.detail.artistName || "";
      this.artistUrl = e.detail.artistUrl || "";
      // Title should be at the end
      // because it is mentioned in observedAttributes
      this.title = e.detail.title || "";
    });
    // intial load
    this.render();
  }
}
customElements.define("song-details", SongDetails);

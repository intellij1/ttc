!function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([function(t,e,i){},function(t,e,i){"use strict";i.r(e);const n="https://itunes.apple.com/us/rss/topsongs/json";class r extends HTMLElement{constructor(){super()}}customElements.define("song-details",class extends r{constructor(){super()}static get observedAttributes(){return["title"]}attributeChangedCallback(t,e,i){this.render()}set title(t){this.setAttribute("title",t)}get title(){return this.getAttribute("title")}render(){this.innerHTML=`\n\n      <style>\n      /* Detail Song Div \n      -------------------------------------\n      * Featured Song  Picture\n      * have a image and a text title.\n      */\n      .featured-detail {\n        position: relative;\n        margin-bottom: 1em;\n      }\n      \n      .featured-detail .block-title {\n        /* Position & Box Model */\n        position: relative;\n        bottom: 0;\n        left: 0;\n        z-index: 1;\n        /* background */\n        background: rgba(0,0,0,0.7);\n        /* Width/Height */\n        padding: .5em;\n        width: 100%;\n        /* Text color */\n        color: #fff;\n      }\n      \n      .featured-detail .block-title h2 {\n        margin: 0;\n      }\n\n      /* image  */\n      .image-detail {\n        display: block;\n        width: 100%;\n        margin: 0;\n        border:1px solid #ccc;\n      }\n      audio {\n        width: 100%\n      }\n      </style>\n\n      <div class="featured-detail">\n        <div class="row" >\n          <img src="${this.imageUrl||""}" alt="" class="image-detail">  \n        </div> \n        <div class="row" >\n          <div class="block-title">\n            <h2>${this.title||"Please click on Song"}</h2>\n            <p class="by-author"><small> \n              <a href="${this.artistUrl}">${this.artistName||""}</a></small>\n            </p>\n            \n          </div>\n        </div>\n        <div class="row" >            \n          <audio controls preload="metadata" title="${this.title}">\n            <source src= ${this.audioUrl||""} >\n            <p>Unsuported Browser</p>\n          </audio>\n        </div>  \n      </div>\n        `}connectedCallback(){window.addEventListener("ItemClicked",t=>{this.audioUrl=t.detail.audioUrl||"",this.imageUrl=t.detail.imageUrl||"",this.artistName=t.detail.artistName||"",this.artistUrl=t.detail.artistUrl||"",this.title=t.detail.title||""}),this.render()}});customElements.define("song-item",class extends r{constructor(){super()}set songItem(t){this.title=t.title.label||"",this.imageUrl=t["im:image"][2].label||"",this.thumbnailImageUrl=t["im:image"][0].label||"",this.audioUrl=t.link[1].attributes.href||"",this.artistName=t["im:artist"].label,this.artistUrl=t["im:artist"].attributes.href,this.render()}get songItem(){this.songItem}handler(t){let e=new CustomEvent("ItemClicked",{detail:{title:this.title,imageUrl:this.imageUrl,audioUrl:this.audioUrl,artistName:this.artistName,artistUrl:this.artistUrl},bubbles:!0});this.dispatchEvent(e)}connectedCallback(){this.addEventListener("click",this.handler)}detachedCallback(){this.removeEventListener("click",this.handler)}render(){this.innerHTML=`\n      <style>\n      .main-list .media {\n        padding-bottom: 1.1em;\n        border-bottom: 2px solid #e8e8e8;\n        border-top: 2px solid #e8e8e8;\n      }\n      .song-title {\n        line-height: 1.3;\n        color: #aab6aa;\n      }\n\n      /* Style to Artist */\n      .by-artist {\n        font-style: italic;\n        line-height: 1.3;\n        color: #aab6aa;\n      }\n      \n      .song-item{\n        background : #efefef ;\n        padding: 10px ;\n        cursor: pointer;\n       }\n\n       .song-item img {\n         padding-right : 20px ; \n       } \n      \n\n      </style>\n    \n    <div class="media song-item">\n          <img class="media-object pull-left" src="${this.thumbnailImageUrl||""}" alt="..."> \n          <div class="media-body">\n            <h5 class="media-heading">${this.title}</h5>\n            <p class="by-artist"> By ${this.artistName}</p>\n          </div>\n      </div>\n  `}set title(t){this.setAttribute("title",t)}get title(){return this.getAttribute("title")}set songUrl(t){this.setAttribute("song-url",t)}get songUrl(){return this.getAttribute("song-url")}set thumbnailImageUrl(t){this.setAttribute("thumbnail-image-url",t)}get thumbnailImageUrl(){return this.getAttribute("thumbnail-image-url")}set imageUrl(t){this.setAttribute("image-url",t)}get imageUrl(){return this.getAttribute("image-url")}set audioUrl(t){this.setAttribute("audio-url",t)}get audioUrl(){return this.getAttribute("audio-url")}set artistName(t){this.setAttribute("artist-name",t)}get artistName(){return this.getAttribute("artist-name")}});i(0);window.addEventListener("load",()=>{!async function(){try{const t=await fetch(n),e=await t.json(),i=e.feed.entry,r=document.querySelector("main"),a=document.querySelector("detail"),s=document.createElement("ul");s.classList.add("media-list","main-list"),i.forEach(t=>{const e=document.createElement("li"),i=document.createElement("song-item");i.songItem=t,e.append(i),s.appendChild(e)}),r.appendChild(s);const l=document.createElement("song-details");a.appendChild(l)}catch(t){console.log("Error in fetching data "+t)}}()})}]);
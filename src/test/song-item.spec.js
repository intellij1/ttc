import { SongItem } from "../js/components/song-item.js";


describe("Song Item", () => {


    beforeEach(function(done) {
        let link = document.createElement("link");
        link.rel = "import";
        link.href = "components/echo-username/index.html";
        done() ; 
    
        
      });




    describe("title(title)", () => {
      it("returns title property and Attribute text", () => {
        const component = new SongItem();
        component.title = 'Test'
        expect(component.getAttribute("title")).toEqual('Test');
        
      });
    });

    describe("observedAttributes() and attributeChangedCallback()", () => {
        it("change value of  title attribute  in render using observedAttributes() and attributeChangedCallback()", () => {
          const component = new SongItem();
          component.title = 'Test'
          const value = component.innerHTML.includes("Test"); 
          expect(value).toBeTruthy();          
        });
      });


  });
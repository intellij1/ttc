import { SongDetails } from "../js/components/song-details.js";

describe("Song Detail", () => {
  describe("title(title)", () => {
    it("returns title property and Attribute text", () => {
      const component = new SongDetails();
      component.title = "Test";
      expect(component.getAttribute("title")).toEqual("Test");
    });
  });

  describe("observedAttributes() and attributeChangedCallback()", () => {
    it("change value of  title attribute  in render using observedAttributes() and attributeChangedCallback()", () => {
      const component = new SongDetails();
      component.title = "Test";
      const value = component.innerHTML.includes("Test");
      expect(value).toBeTruthy();
    });
  });
});

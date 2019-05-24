import { SongItem } from "../js/components/song-item.js";

describe("Song Item", () => {
  let component;

  describe("Title value ", () => {
    beforeEach(() => {
      component = new SongItem();

      // setting test Data
      component.title = "Test";
      component.imageUrl = "http://image.url.com";
      component.thumbnailImageUrl = "http://thubnailImage.url.com";
      component.audioUrl = "http://audio.url.com";
      component.artistName = "Test Artist";
      component.artistUrl = "http://artist.url.com";
    });

    it("returns title property and Attribute text", () => {
      expect(component.getAttribute("title")).toEqual("Test");
    });

    it("retuns correct image URL ", () => {
      expect(component.imageUrl).toEqual(
        "http://image.url.com" 
      );
    });
  });
});

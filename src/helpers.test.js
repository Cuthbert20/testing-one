import {
  basic
} from './helpers';


describe("helper.js", () => {
  describe("basic", () => {
    it('should return short for short strings', () => {
      expect(basic("444")).toEqual("short");
    });
  });
})

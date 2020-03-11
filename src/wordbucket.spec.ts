import Bucket from "./index";

describe("barrel file", () => {
  it("contains my defined functions with appropriate types", () => {
    const hex = Bucket.create("hex");
    hex.add("test1", 1);
    hex.add("test2", 1);
    hex.create("subtable");
    const subtable = Bucket.get("subtable");
    subtable.add("test3", 1);
    subtable.roll();
  })
})
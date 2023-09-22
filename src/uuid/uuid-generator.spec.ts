import { describe, expect, it } from "bun:test";
import { uuidGenerator } from "./uuid-generator";

describe("uuidGenerator", () => {
  it("returns a string", () => {
    expect(typeof uuidGenerator()).toBe("string");
  });

  it("returns a uuid", () => {
    expect(uuidGenerator()).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    );
  });
});

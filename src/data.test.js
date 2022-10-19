import { extractId } from "./utils/data.utils";

it("successfully extracts Id from swapi url", () => {
  const url = "https://swapi.dev/api/people/3/";

  expect(extractId(url)).toBe("3");
});

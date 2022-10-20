export const getData = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

export const extractId = (url) => {
  const removeSlash = url.split("/");
  return removeSlash[removeSlash.length - 2];
};

export const dontReturnZero = (pageNumber) =>
  pageNumber === 0 ? 1 : pageNumber;

export const fetchStarWarsInfo = async (pageNumber) => {
  const response = await getData(
    `https://swapi.dev/api/people/?page=${dontReturnZero(pageNumber)}`
  );
  return response;
};

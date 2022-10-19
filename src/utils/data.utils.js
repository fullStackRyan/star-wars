export const getData = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

export const extractId = (url) => {
  const removeSlash = url.split("/");
  return removeSlash[removeSlash.length - 2];
};

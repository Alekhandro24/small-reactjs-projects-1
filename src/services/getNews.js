const BASE_URL = "https://nwsapi.org/v2";
const API_KEY = "";

export const getNews = (searchText) => {
  fetch(`${BASE_URL}/everything?q=${searchText}`, {
    hesders: {
      "X-APY-KEY": API_KEY,
    },
  });
};

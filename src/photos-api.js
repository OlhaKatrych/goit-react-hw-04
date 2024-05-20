import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const API_KEY = "yYTKiTwTBZsHrVBAyhtsF6tI3qqEAAACcaH_IHNlMIM";

async function getRespAPI(topic) {
  const resp = await axios.get(
    `/search/photos?client_id=${API_KEY}&page=1&&query=${topic}`
  );
  const data = resp.data.results;
  console.log(data)
  return data;
}

export default getRespAPI;

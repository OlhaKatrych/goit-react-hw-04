import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const API_KEY = "yYTKiTwTBZsHrVBAyhtsF6tI3qqEAAACcaH_IHNlMIM";

async function getRespAPI(topic, currentPage) {
  const resp = await axios.get("/search/photos", {
    params: {
      client_id: API_KEY,
      query: topic,
      page: currentPage,
      per_page: 20,
    },
  });
  const data = resp.data;
  console.log(data);
  return data;
}

export default getRespAPI;

import axios from "axios";

const KEY = "AIzaSyBcZBLVUfLPOEOb80M7nIxic6zRSd2ReWQ"; // your api key here

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});

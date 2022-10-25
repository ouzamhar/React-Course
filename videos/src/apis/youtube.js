import axios from "axios";

const KEY = "AIzaSyA4hmMEhwIl3Bw7QT_VAxUdocvGpjd3teU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});

import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID pBx7kzImjxlgog_wDmKP4f1HWU5LaqttSK65lG32zc8",
  },
});

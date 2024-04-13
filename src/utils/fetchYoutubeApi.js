import axios from "axios";

class YoutubeApi {
  constructor() {
    this.baseUrl = "https://www.googleapis.com/youtube/v3";
    this.key = import.meta.env.VITE_YOUTUBE_API_KEY || "";
  }

  async setSearch(querySearch, maxResults = 4) {
    const URL = `${this.baseUrl}/search`;
    const options = {
      params: {
        key: this.key,
        q: querySearch,
        type: "video",
        maxResults: maxResults,
        regionCode: "co",
        part: "snippet",
      },
    };
    try {
      const response = await axios.get(URL, options);
      const data = await response.data;
      return data;
    } catch (error) {
      const response = {
        code: error.response.data.error.code || 500,
        message: error.response.data.error.message || "internal error server",
      };
      console.log(response);
      return response;
    }
  }
}

export default YoutubeApi;

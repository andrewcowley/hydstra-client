const fetch = require("node-fetch");

class HydstraClient {
  constructor(options) {
    this.baseURL = options.baseURL;
  }

  buildURL(queryParams) {
    return `${this.baseURL}${queryParams}`;
  }

  async makeRequest(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
}

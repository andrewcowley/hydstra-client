const fetch = require("node-fetch");

class HydstraClient {
  constructor(options) {
    this.baseURL = options.baseURL;
  }

    async getSiteList (queryParams) {
      const requestURL = this.buildURL(queryParams);
      const response = await this.makeRequest(requestURL);
      return response;
  }

  buildURL(queryParams) {
    const requestURL =  `${this.baseURL}${JSON.stringify(queryParams)}&ver=2`;
    return requestURL;
  }

  async makeRequest(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
}


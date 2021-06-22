const fetch = require("node-fetch");

class HydstraClient {
  constructor(options) {
    this.baseURL = options.baseURL;
  }

  async getDatasourcesBySite (queryParams) {
    return await this.callMethod(queryParams)
  }

  async getLatestTSValues (queryParams) {
    return await this.callMethod(queryParams)
  }

  async getSitesByDataSource (queryParams) {
    return await this.callMethod(queryParams)
  }

  async getSiteGeojson (queryParams) {
    return await this.callMethod(queryParams)
  }

  async getSiteList(queryParams) {
    return await this.callMethod(queryParams)
  }

  async callMethod (queryParams) {
    const requestURL = this.buildURL(queryParams);
    const response = await this.makeRequest(requestURL);
    return response;
  }

  buildURL(queryParams) {
    const requestURL = `${this.baseURL}${JSON.stringify(queryParams)}&ver=2`;
    return requestURL;
  }

  async makeRequest(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

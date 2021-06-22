const fetch = require("node-fetch");

const methodNames = {
  getSiteList: {
    function: "get_site_list",
    version: 1,
  }
}

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
    const params = {params: queryParams, ...methodNames.getSiteList}
    console.log(params)
    return await this.callMethod(params)
  }

  async getVariableList (queryParams) {
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

const a = new HydstraClient({baseURL: 'https://realtimedata.waternsw.com.au/cgi/webservice.pl?'})
const b = async () => {
  const data = await a.getSiteList({site_list: "MATCH(20100*)"});
  console.log(data);
};

b();
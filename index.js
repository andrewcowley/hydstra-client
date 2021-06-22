const fetch = require("node-fetch");

class HydstraClient {
  constructor(options) {
    this.baseURL = options.baseURL;
  }

  async getLatestTSValues (queryParams) {
    return await this.callMethod(queryParams)
  }

  async getSitesByDataSource (queryParams) {
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

const a = new HydstraClient({baseURL: 'https://realtimedata.waternsw.com.au/cgi/webservice.pl?'})
const b = async () => {
  const data = await a.getSiteList({
    function: "get_site_list",
    version: 1,
    params: {
      site_list: "MATCH(20100*)"
    }
  });
  console.log(data);
};

b();
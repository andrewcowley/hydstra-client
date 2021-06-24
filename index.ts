import fetch from "node-fetch";

const methodNames = {
  getDatasourcesBySite: {
    function: "get_datasources_by_site",
    version: 1,
  },
  getLatestTSValues: {
    function: "get_latest_ts_values",
    version: 2,
  },
  getSitesByDataSource: {
    function: "get_sites_by_datasource",
    version: 1,
  },
  getSiteGeojson: {
    function: "get_site_geojson",
    version: 2,
  },
  getSiteList: {
    function: "get_site_list",
    version: 1,
  },
  getVariableList: {
    function: "get_variable_list",
    version: 1,
  },
};

type HydstraClientOptions = {
  baseURL: string
}

type getDatasourcesBySiteOptions = {
  site_list: string
  ts_classes?: string[]
}

type getLatestTSValuesOptions = {
  site_list: string
  datasource: string | string[]
  tracelist: Tracelist
}

type Tracelist = {
  varfrom: number
  varto: number
  accum_period?: number
  accum_partial?: number
  daystart?: number
  lookback?: number
  anyqual?: number
  now?: boolean
}

class HydstraClient {
  baseURL: string;

  constructor(options: HydstraClientOptions) {
    this.baseURL = options.baseURL;
  }

  async getDatasourcesBySite(queryParams: getDatasourcesBySiteOptions) {
    const params = { params: queryParams, ...methodNames.getDatasourcesBySite };
    return await this.callMethod(params);
  }

  async getLatestTSValues(queryParams: getLatestTSValuesOptions) {
    const params = { params: queryParams, ...methodNames.getLatestTSValues };
    return await this.callMethod(params);
  }

  async getSitesByDataSource(queryParams) {
    const params = { params: queryParams, ...methodNames.getSitesByDataSource };
    return await this.callMethod(params);
  }

  async getSiteGeojson(queryParams) {
    const params = { params: queryParams, ...methodNames.getSiteGeojson };
    return await this.callMethod(params);
  }

  async getSiteList(queryParams) {
    const params = { params: queryParams, ...methodNames.getSiteList };
    return await this.callMethod(params);
  }

  async getVariableList(queryParams) {
    const params = { params: queryParams, ...methodNames.getVariableList };
    return await this.callMethod(params);
  }

  async callMethod(queryParams) {
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
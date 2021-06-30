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

type getSitesByDataSourceOptions = {
  datasources: string[]
}

type getSiteGeojsonOptions = {
  site_list: string | string[]
  fields: string[]
  get_elev?: boolean
}

type getSiteListOptions = {
  site_list: string | string[]
}

type getVariableListOptions = {
  site_list: string | string[]
  datasource: string
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

type RequestObj = {
  function: string
  version: number
  params: any
}

class HydstraClient {
  baseURL: string;

  constructor(options: HydstraClientOptions) {
    this.baseURL = options.baseURL;
  }

  async getDatasourcesBySite(queryParams: getDatasourcesBySiteOptions) {
    const params = { params: queryParams, ...methodNames.getDatasourcesBySite };
    return await this.makeRequest(params);
  }

  async getLatestTSValues(queryParams: getLatestTSValuesOptions) {
    const params = { params: queryParams, ...methodNames.getLatestTSValues };
    return await this.makeRequest(params);
  }

  async getSitesByDataSource(queryParams: getSitesByDataSourceOptions) {
    const params = { params: queryParams, ...methodNames.getSitesByDataSource };
    return await this.makeRequest(params);
  }

  async getSiteGeojson(queryParams: getSiteGeojsonOptions) {
    const params = { params: queryParams, ...methodNames.getSiteGeojson };
    return await this.makeRequest(params);
  }

  async getSiteList(queryParams: getSiteListOptions) {
    const params = { params: queryParams, ...methodNames.getSiteList };
    return await this.makeRequest(params);
  }

  async getVariableList(queryParams: getVariableListOptions) {
    const params = { params: queryParams, ...methodNames.getVariableList };
    return await this.makeRequest(params);
  }

  buildURL(requestObject: RequestObj) {
    const requestURL = `${this.baseURL}${JSON.stringify(requestObject)}&ver=2`;
    return requestURL;
  }

  async makeRequest(requestObject: RequestObj) {
    const requestURL = this.buildURL(requestObject);
    try {
      const response = await fetch(requestURL);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

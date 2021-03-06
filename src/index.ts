import fetch from "node-fetch";
import availableMethods from "./lib/availableMethods.js";

interface HydstraClientOptions {
  baseURL: string;
  apiVersion: number;
};

interface getDatasourcesBySiteOptions {
  site_list: string;
  ts_classes?: string[];
};

interface getLatestTSValuesOptions {
  site_list: string;
  datasource: string | string[];
  trace_list: Tracelist;
};

interface getSitesByDataSourceOptions {
  datasources: string[];
};

interface getSiteGeojsonOptions {
  site_list: string | string[];
  fields: string[];
  get_elev?: boolean;
};

interface getSiteListOptions {
  site_list: string | string[];
};

interface getVariableListOptions {
  site_list: string | string[];
  datasource: string;
};

interface Tracelist {
  varfrom: string;
  varto: string;
  accum_period?: number;
  accum_partial?: number;
  daystart?: number;
  lookback?: number;
  anyqual?: number;
  now?: boolean;
}[];

interface RequestObj {
  function: string;
  version: number;
  params: any;
};

export class HydstraClient {
  baseURL: string;
  apiVersion: number;

  constructor(options: HydstraClientOptions) {
    this.baseURL = options.baseURL;
    this.apiVersion = options.apiVersion;
  }

  async getDatasourcesBySite(queryParams: getDatasourcesBySiteOptions) {
    const params = {
      params: queryParams,
      ...availableMethods.getDatasourcesBySite,
    };
    return await this.makeRequest(params);
  }

  async getLatestTSValues(queryParams: getLatestTSValuesOptions) {
    const params = {
      params: queryParams,
      ...availableMethods.getLatestTSValues,
    };
    return await this.makeRequest(params);
  }

  async getSitesByDataSource(queryParams: getSitesByDataSourceOptions) {
    const params = {
      params: queryParams,
      ...availableMethods.getSitesByDataSource,
    };
    return await this.makeRequest(params);
  }

  async getSiteGeojson(queryParams: getSiteGeojsonOptions) {
    const params = { params: queryParams, ...availableMethods.getSiteGeojson };
    return await this.makeRequest(params);
  }

  async getSiteList(queryParams: getSiteListOptions) {
    const params = { params: queryParams, ...availableMethods.getSiteList };
    return await this.makeRequest(params);
  }

  async getVariableList(queryParams: getVariableListOptions) {
    const params = { params: queryParams, ...availableMethods.getVariableList };
    return await this.makeRequest(params);
  }

  buildURL(requestObject: RequestObj) {
    const requestURL = `${this.baseURL}?${JSON.stringify(requestObject)}&ver=${this.apiVersion}`;
    console.log(requestURL)
    return requestURL;
  }

  async makeRequest(requestObject: RequestObj) {
    const requestURL = this.buildURL(requestObject);
    try {
      const response = await fetch(requestURL);
      const data = await response.json();
      if(data.error_num > 0) {
        return Promise.reject(`API Error: ${data.error_num}: ${data.error_msg}`)
      } else {
        return data;
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}

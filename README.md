# hydstra-client

A thin promise based wrapper around the hydstra http service created by Kisters and provided by various states and regions.

**This project is a community effort and has no direct association with Kisters or the states/regions providing the Hydstra http endpoints.**

## Install

`npm install hydstra-client`

## Usage 

```
const HydstraClient = require('hydstra-client);
const data = new HydstraClient({
    baseURL: 'https://realtimedata.waternsw.com.au/cgi/webservice.pl?'
});
```

## API

**Please note that this package does not have a stable API yet!**

- `getDatasourcesBySite`
- `getLatestTSValues`
- `getSitesByDataSource`
- `getSiteGeojson`
- `getSiteList`
- `getVariableList`
- `makeRequest`


Known hydstra web services:

| State       | URL                                                               |
| ----------- | ----------------------------------------------------------------- |
| NSW         | https://realtimedata.waternsw.com.au/cgi/webservice.pl            |
| QLD         | https://data.water.vic.gov.au/cgi/webservice.exe                  |
| VIC         | https://water-monitoring.information.qld.gov.au/cgi/webservice.pl |
const { HydstraClient } = require('../src/index.js')

const hc = new HydstraClient({
  baseURL: "https://realtimedata.waternsw.com.au/cgi/webservice.exe",
});

hc.getSitesByDataSource({ datasources: ["CP"] }).then((response) => {
  console.log(response);
});

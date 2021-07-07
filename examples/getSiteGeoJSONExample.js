const { HydstraClient } = require('../src/index.js')

const hc = new HydstraClient({
  baseURL: "https://realtimedata.waternsw.com.au/cgi/webservice.exe",
});

hc.getSiteGeojson({
  site_list: "204006",
  fields: ["zone"],
}).then((response) => {
  console.log(response);
});

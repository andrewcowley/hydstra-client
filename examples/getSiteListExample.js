const { HydstraClient } = require('../src/index.js')

const hc = new HydstraClient({
  baseURL: "https://realtimedata.waternsw.com.au/cgi/webservice.exe",
});

// hc.getSiteList({ site_list: "201001" }).then((resp) => {
//   console.log(resp);
// });

// Response with error
hc.getSiteList({ site_list: "" }).then((resp) => {
  console.log(resp);
}).catch((err)=> {console.log(err)});
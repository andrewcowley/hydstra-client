import { HydstraClient } from "../src";

const hc = new HydstraClient({
  baseURL: "https://realtimedata.waternsw.com.au/cgi/webservice.exe",
});

hc.getDatasourcesBySite({
  site_list: "MATCH(203010)",
}).then((response) => {
  console.log(response);
});

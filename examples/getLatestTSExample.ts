import { HydstraClient } from "../src";

const hc = new HydstraClient({ baseURL: 'https://realtimedata.waternsw.com.au/cgi/webservice.exe' })

hc.getLatestTSValues({
    site_list: "203014",
    datasource: "CP",
    trace_list: [
        {
            varfrom: "100",
            varto: "100"
        },
        {
            varfrom: "141",
            varto: "141"
        }
    ]
}).then((response) => {console.log(response)})
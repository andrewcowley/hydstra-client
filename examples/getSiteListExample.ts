import { HydstraClient } from "../src";

const hc = new HydstraClient({baseURL: 'https://realtimedata.waternsw.com.au/cgi/webservice.exe'})

hc.getSiteList({site_list: '201001'}).then((resp)=> {console.log(resp)});
import axios from "axios";

const REST_API_BASEURL1 ='http://localhost:8090/api/customer/getcustomer'

export const listcostomers =()=>axios.get(REST_API_BASEURL1);

const REST_API_BASEURL2 ='http://localhost:8090/api/event/getevents'

export const listevents =()=>axios.get(REST_API_BASEURL2);
const REST_API_BASEURL3 ='http://localhost:8090/api/venue/getVenues'

export const listvenues =()=>axios.get(REST_API_BASEURL3);

const REST_API_BASEURL4 ='http://localhost:8090/api/vendor/getvendor'

export const listvendors =()=>axios.get(REST_API_BASEURL4);
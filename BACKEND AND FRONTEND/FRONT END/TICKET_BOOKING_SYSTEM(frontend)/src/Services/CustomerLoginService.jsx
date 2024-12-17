import  axios  from "axios";

const REST_API_BASEURLL ='http://localhost:8090/api/customer/addcustomer'

export const adduser =(user)=> axios.post(REST_API_BASEURLL,user);

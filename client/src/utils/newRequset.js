import axios from "axios";

const newRequest = axios.create({
  baseURL: "http://localhost:8800/api/",
  credentials:true,            
  optionSuccessStatus:200
});

export default newRequest;
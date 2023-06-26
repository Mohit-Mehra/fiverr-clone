// import axios from "axios";

// const newRequest = axios.create({
//   baseURL: "http://localhost:8800/api/",
//   credentials:true,            
//   optionSuccessStatus:200
// });

// export default newRequest;
import axios from "axios";

const newRequest = axios.create({
  baseURL: "http://localhost:8800/api/",
  withCredentials: true,
});

// Add an interceptor to include the token in the request headers
newRequest.interceptors.request.use((config) => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (currentUser && currentUser.token) {
    config.headers.Authorization = `Bearer ${currentUser.token}`;
  }
  return config;
});

export default newRequest;

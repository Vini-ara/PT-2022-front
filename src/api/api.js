import axios from "axios";
import { store } from "./localStorage";

export const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
  credentials: true
})

api.interceptors.response.use(
  function (response) {
		const { status, data, config } = response;
			console.log(`Response from ${config.url}:`, {
				code: status,
				...data,
			});
		return response;
	},
  async function (error) {
    if(error.response) {
      const { status, data } = error.response;

      switch(status) {
        case 401: 
          if(data.error == "Unauthorized") {
            try {
              await store.refresh();

              const config = error.config;

              return await api({method: config.method, url: config.url, data: config.data})
            } catch(e) {
              return window.location.pathname = "/";
            }
          } else {
            store.clear();
            if(window.location.pathname != "/") {
              return window.location.pathname = "/";
            }
            return Promise.reject(error)
          }
        default: 
          store.clear();
          return Promise.reject(error);
      }
    } else if(error.request) {
      return Promise.reject(error);
    } else {
      return Promise.reject(error)
    }
  }
)

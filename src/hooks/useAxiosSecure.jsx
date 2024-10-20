import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
})


const useAxiosSecure = () => {
  const [secureLoading, setSecureLoading] = useState(false);

  useEffect(() => {
    ;

    const requestInterceptor = axiosSecure.interceptors.request.use(
      (req) => {
        setSecureLoading(true);

        return req;
      },
      (error) => {
        console.log("axiosSecure request faild");
        return Promise.reject(error);
      }
    );

    const responseInterceptor = axiosSecure.interceptors.response.use(
      (res) => {
        setSecureLoading(false);

        return res;
      },
      (error) => {
        if(error.response.status === 401 || error.response.status === 403) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `Something went wrong! Error ${error.response.status}`,
            footer: "Unauthorized access"
          });
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  return { axiosSecure, secureLoading };
};

export default useAxiosSecure;
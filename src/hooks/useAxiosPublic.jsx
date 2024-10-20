import axios from "axios";
import { useEffect, useState } from "react";

const axiosPublic = axios.create({
  baseURL: "https://innspot-bdserver.vercel.app",
});

const useAxiosPublic = () => {
  const [publicLoading, setPublicLoading] = useState(false);

  useEffect(() => {
    const requestInterceptor = axiosPublic.interceptors.request.use(
      (req) => {
        setPublicLoading(true);

        return req;
      },
      (error) => {
        console.log("axiosPublic request faild");
        return Promise.reject(error);
      }
    );

    const responseInterceptor = axiosPublic.interceptors.response.use(
      (res) => {
        setPublicLoading(false);

        return res;
      },
      (error) => {
        console.log("axiosPublic response faild");
        return Promise.reject(error);
      }
    );

    return () => {
      axiosPublic.interceptors.request.eject(requestInterceptor);
      axiosPublic.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  return { axiosPublic, publicLoading };
};

export default useAxiosPublic;

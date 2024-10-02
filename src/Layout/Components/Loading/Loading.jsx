import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";
import useAxiosSecure from "@/Hooks/useAxiosSecure/useAxiosSecure";

const Loading = () => {
  const [loadign, setLoading] = useState(false);
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  // Fatching data with public api__
  useEffect(() => {
    // Request interceptors__
    axiosPublic.interceptors.request.use(
      function (config) {
        setLoading(true);
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    // Response interceptors__
    axiosPublic.interceptors.response.use(
      function (response) {
        setLoading(false);
        return response;
      },
      function (error) {
        return Promise.reject(error);
      }
    );
  }, [axiosPublic]);

    // Fatching data with secure api__
  useEffect(() => {
    // Request interceptors__
    axiosSecure.interceptors.request.use(
      function (config) {
        setLoading(true);
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    // Response interceptors__
    axiosSecure.interceptors.response.use(
      function (response) {
        setLoading(false);
        return response;
      },
      function (error) {
        return Promise.reject(error);
      }
    );
  }, [axiosSecure]);

  return (
    loadign && (
      <>
        <div className="w-full mt-80 mb-20 gap-5 flex justify-center flex-col items-center">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-[#7c6a46]"></div>
          <h1 className="text-3xl text-center font-bold text-[#7c6a46]">
            loading...
            <br />
            <span className="text-lg font-semibold"> Please wait!</span>
          </h1>
        </div>
      </>
    )
  );
};

export default Loading;

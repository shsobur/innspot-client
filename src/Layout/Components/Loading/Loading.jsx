import useAxiosPublic from "@/hooks/useAxiosPublic";

const Loading = () => {
  const { publicLoading } = useAxiosPublic();

  return (
    publicLoading && (
      <>
        <div className="w-full mt-5 mb-5 gap-5 flex justify-center flex-col items-center">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-[#7c6a46]"></div>
          <h1 className="text-3xl text-center font-bold text-[#7c6a46]">
            loading...
            <br />
            <span className="text-base font-semibold"> Please wait!</span>
          </h1>
        </div>
      </>
    )
  );
};

export default Loading;

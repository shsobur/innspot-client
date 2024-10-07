import ScrollToTop from "@/Layout/Components/ScrollToTop/ScrollToTop";
import AboutInfo from "../AboutInfo/AboutInfo";
import AboutUsBaner from "../AboutUsBaner/AboutUsBaner";

const AboutUsPageLayout = () => {
  return (
    <>
    <ScrollToTop></ScrollToTop>

      <div>
        <AboutUsBaner></AboutUsBaner>
        <AboutInfo></AboutInfo> 
      </div>
    </>
  );
};

export default AboutUsPageLayout;
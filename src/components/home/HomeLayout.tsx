import { Divider } from "@mui/material";
import AboutUs from "./aboutus/AboutUs";
import Banner from "./banner/Banner";
import Services from "./services/Services";

function HomeLayout() {
  return (
    <>
      <Banner />
      <AboutUs />
      <Services />
    </>
  );
}

export default HomeLayout;

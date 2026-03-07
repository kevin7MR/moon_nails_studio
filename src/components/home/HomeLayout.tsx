import { Divider } from "@mui/material";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Services from "./services/Services";
import Gallery from "./Gallery";

function HomeLayout() {
  return (
    <>
      <Banner />
      <AboutUs />
      <Divider />
      <Services />
    </>
  );
}

export default HomeLayout;

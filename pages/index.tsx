import TrendProperties from "@/libs/components/homepage/TrendProperties";
import Advertisement from "@/libs/components/homepage/Advertisement";
import PopularProperties from "@/libs/components/homepage/PopularProperty";
import TopProperties from "@/libs/components/homepage/TopProperties";
import TopAgents from "@/libs/components/homepage/TopAgents";
import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Container, Stack } from "@mui/material"
import { NextPage } from "next";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home: NextPage = () => {
  return ( 
    
    <Stack>
      <Stack className={"home-page"}>
          <TrendProperties />
          <PopularProperties />
          <Advertisement />
          <TopProperties />
          <TopAgents />
        </Stack>
    </Stack>

  );
}

export default withLayoutMain(Home);
 
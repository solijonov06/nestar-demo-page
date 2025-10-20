import TrendProperties from "@/libs/components/homepage/TrendProperties";
import Advertisement from "@/libs/components/homepage/Advertisement";
import PopularProperties from "@/libs/components/homepage/PopularProperty";
import TopProperties from "@/libs/components/homepage/TopProperties";
import TopAgents from "@/libs/components/homepage/TopAgents";
import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Container, Stack } from "@mui/material"
import { NextPage } from "next";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { GET_PROPERTIES } from "@/apollo/user/query";
import { useQuery } from "@apollo/client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const Home: NextPage = () => {
const device = useDeviceDetect();

const{
  loading: getPropertiesLoading,
  error: getPropertiesError,
  data: getPropertiesData,
  refetch: getPropertiesRefetch
}=useQuery(GET_PROPERTIES, {
  fetchPolicy: "network-only",
  variables: {
  
    input:{
        page: 1,
        limit: 5,
        sort: "propertyRank",
        direction : "DESC",
        search: {}
    }

  }
});
console.log(" getPropertiesData ", getPropertiesData); 

if(device === 'mobile'){
return <Stack>homepage mobile</Stack>
}else{
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
}

 

export default withLayoutMain(Home);
 
import withLayoutBasic from "../../libs/components/layout/LayoutBasic";
import { Box, Button, Pagination, Stack, Typography } from "@mui/material";
import { NextPage } from "next";
import KeyBoardArrowDownRoundedIcon from "@mui/icons-material/KeyBoardArrowDownRounded";
import { useState } from "react";
import PropertyCard from "@/libs/components/property/PropertyCard";
import Filter from "@/libs/components/property/Filter";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
 
const PropertyList: NextPage = function() {
   const [properties, setProperties ] = useState<number[]>([1, 2, 3, 4, 5, 6]);
   const device = useDeviceDetect();
   
   if(device === 'mobile'){
return <Stack>PropertyList mobile</Stack>
}else{
      return (
      <div id={"property-list-page"} style={{position: "relative"}}>
         <Stack className="container">
            <Box className={"right"}>
               <span>Sort by</span>
               <div>
                  <Button endIcon={<KeyBoardArrowDownRoundedIcon />}>New</Button>
               </div>
            </Box>
            
            <Stack className={"property-page"}>
               <Stack className={"filter-config"}>
                     <Filter />
               </Stack>
               <Stack className={"main-config"} mb={"76px"}>
                  <Stack className={"list-config"}>
                     {properties.map((property, index) => {
                        return <PropertyCard key={index} />;
                     })}
                  </Stack>
                 
                  <Stack className={"pagination-config"}>
                     <Stack className="pagination-box">
                        <Pagination
                           page={1}
                           count={5}
                           shape="circular"
                           color="primary"
                           />
                     </Stack>
                     <Stack className="total-result">
                        <Typography>Total 5 properties available</Typography>
                     </Stack>
                  </Stack>
               </Stack>
            </Stack>  
         </Stack>
      </div>
   )
}

}

export default withLayoutBasic(PropertyList);
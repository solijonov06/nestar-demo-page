import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Container, Stack } from "@mui/material";
import { brown, green } from "@mui/material/colors";
import { NextPage } from "next";

const  PropertyList: NextPage  = () => {
  return (<>
    <Container>Property List</Container>
 
   </>
  );
}

export default withLayoutBasic(PropertyList);
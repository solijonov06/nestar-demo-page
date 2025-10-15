import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";


const Home: NextPage = () => {
  return (
   <Container>
      <Stack flexDirection={"column"}>
          <Box>Popular Properties</Box>
          <Box>Top Agents</Box>
          <Box>Events</Box>
          <Box>Top Properties</Box>
      </Stack>
   </Container>    
  );
}

export default withLayoutMain(Home);

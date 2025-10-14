import { Box, Container, Stack } from "@mui/material";
import { brown, green } from "@mui/material/colors";


export default function Home() {
  return (
   <>
   <Stack sx={{background:green[300]}}>Header</Stack>
   <Container>
      <Stack flexDirection={"column"}>
          <Box>Popular Properties</Box>
          <Box>Top Agents</Box>
          <Box>Events</Box>
          <Box>Top Properties</Box>


      </Stack>
   </Container>
   <Stack sx={{background:brown[300]}}>Footer</Stack>
   </>
    
  );
}

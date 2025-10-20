import { Stack } from "@mui/material"
import Head from "next/head"
import Top from "../Top";
import Footer from "../Footer";
import HeaderFilter from "../homepage/HeaderFilter";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";


const withLayoutMain = (Component: any) => {
   return (props: any) => {
      const device = useDeviceDetect();

      if(device == 'mobile'){
         return (<>  <Head>
         <title>Nestar</title>
       </Head>
              <Stack id="mobile-wrap">
            <Stack id={"top"}>
                  <Top  />
            </Stack>



            <Stack id={"main"}>
                  <Component {...props} />
            </Stack>



            <Stack id={"footer"}>
                  <Footer />
            </Stack>
       </Stack>
         </>)

      }else{
      return (
        <>
       <Head>
         <title>Nestar</title>
       </Head>
       <Stack id="pc-wrap">
            <Stack id={"top"}>
                  <Top  />
            </Stack>
            <Stack className={"header-main"}
            style={{
               backgroundImage: "url(/img/banner/header1.svg)",
               backgroundSize: "cover",
               boxShadow: "inset 10px 40px 150px 40px rgb(24 22 36)",
            }}>
               <Stack className={"container"}>
                  <HeaderFilter />
               </Stack>
            </Stack>



            <Stack id={"main"}>
                  <Component {...props} />
            </Stack>



            <Stack id={"footer"}>
                  <Footer />
            </Stack>
       </Stack>
       </>
      ); 
      }
  
   }
}

export default withLayoutMain;
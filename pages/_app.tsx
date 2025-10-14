import type { AppProps } from "next/app";
import {ThemeProvider, createTheme} from "@mui/material/styles"
import { CssBaseline } from "@mui/material";
import {light} from "../scss/MaterialTheme/index"

export default function App({ Component, pageProps }: AppProps) {
  //@ts-ignore
  const [theme,setTheme] = useState(createTheme(light))
  /**socket.io, Redux , mui*/

  return
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Component {...pageProps} />;
  </ThemeProvider>

}

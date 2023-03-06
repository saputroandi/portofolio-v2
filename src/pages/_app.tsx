import "../../styles/globals.css";
import type { AppProps } from "next/app";
import MainLayouts from "../components/layouts";

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <MainLayouts>
      <Component {...pageProps} />
    </MainLayouts>
  )
}

import Footer from "@/components/footer";
import "@/styles/globals.css";
import RootLayout from "./layout";

export default function App({ Component, pageProps }) {
  return(
  
  <>
  <RootLayout>  <Component {...pageProps} /></RootLayout>


  </>

  )
}

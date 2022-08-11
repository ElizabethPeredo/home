import Navbar from '../src/components/Header/Navbar/Navbar'
import '../styles/globals.css'
import 'bootstrap/dist/css/theme/lumen/bootstrap.min.css';


function MyApp({ Component, pageProps }) {

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )

}

export default MyApp

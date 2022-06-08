import Controller from '../Components/Controller'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Controller>
    <Component {...pageProps} />
  </Controller>
}

export default MyApp

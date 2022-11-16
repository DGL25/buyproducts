import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Header/>
        <Component {...pageProps} />
      </>
    )
}

export default MyApp

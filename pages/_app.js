import '../styles/globals.css';
import { useState, useEffect } from 'react';
import React from 'react';
import img from '../public/preloader.gif';
import Image from 'next/image'
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {    
    setLoading(true);
    setTimeout(()=> {
      setLoading(false)
    }, 4000)
  }, [])


  return (
    <>
      {
        loading? (<div className="preloader">
          <Image src="/preloader.gif" alt="me" width="90" height="90" />
          </div>
        ):
        <React.Fragment>
          <Component {...pageProps} />
        </React.Fragment>
      }
      
    </>    
    )
}

export default MyApp

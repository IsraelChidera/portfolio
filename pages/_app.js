import '../styles/globals.css';
import { useState, useEffect } from 'react';
import React from 'react';

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
        loading? (<div className="preloader">Laodinggg</div>):
        <React.Fragment>
          <Component {...pageProps} />
        </React.Fragment>
      }
      
    </>    
    )
}

export default MyApp

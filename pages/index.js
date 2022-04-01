import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
// import "../fonts/axiforma-regular.ttf";

export default function Home() {
  
  
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Israel Chidera</title>        
        </Head>

        <Navbar/>

        <div>
          <div className={styles.headerContainer} >
            <h1 className={styles.headerTag}>I am a</h1>
            <h1 className={styles.headerContent}>
              Front end developer
            </h1>
            <h1 className={styles.headerTag}>
              with a strong passion for elegant designs, {" "}
              <span className={styles.heroSpan}>creating usable user interfaces</span> and building with intent.
            </h1>
          </div>
        </div>

        < Sidebar />


      </div>
    </>
    
  )
}

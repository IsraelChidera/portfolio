import styles from '../styles/Home.module.css';
import {AiFillHome} from 'react-icons/ai';
import {FaUserAlt,FaMailBulk} from 'react-icons/fa';
import {GiSoapExperiment} from 'react-icons/gi';
import Link from 'next/link';
import {useState} from 'react';

const Sidebar = () => {
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    
  }

  const handleClicke = () => {

  }
    
  return (
    <main className={styles.main}>
        <ul>
   
          <li onClick={handleClicke}>
            <Link href="/">
              <a>
                < AiFillHome className={styles.icon}/>
              </a>
            </Link>
          </li>

          <li onClick={handleClick}>
            <Link href="/about">
              <a>
                < FaUserAlt className={styles.icon}/>
              </a>
            </Link>
          </li>

          <li onClick={handleClick}>
            <Link href="/works">
              <a>
                < GiSoapExperiment className={styles.icon} />
              </a>
            </Link>
          </li>            
        
          <li onClick={handleClick}>
            <Link href="/contact">
              <a>
                < FaMailBulk className={styles.icon}/>
              </a>
            </Link>
          </li>
              
        </ul>
    </main>
  )
}

export default Sidebar
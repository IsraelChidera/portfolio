import styles from '../styles/Home.module.css';
import {AiFillGithub, AiFillLinkedin, AiFillTwitterCircle} from 'react-icons/ai';
import {SiHashnode} from 'react-icons/si';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
        <Link href="/">
          <h2>            
            Israel<span>Chidera</span>            
          </h2>
        </Link>

        <ul>
          <li className={styles.navList}>
            <a>
              < AiFillGithub />
            </a>             
          </li>

          <li className={styles.navList}>
            <a>
              < AiFillLinkedin />
            </a>             
          </li>

          <li className={styles.navList}>
            <a>
              < AiFillTwitterCircle />
            </a>
          </li>

          <li className={styles.navList}>
            <a>
              < SiHashnode />
            </a> 
          </li>
        </ul>
    </nav>
  )
}

export default Navbar
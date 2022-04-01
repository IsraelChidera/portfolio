import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import styles from '../styles/Contact.module.css';
import {AiFillGithub, AiFillLinkedin, AiFillTwitterCircle} from 'react-icons/ai';
import Link from 'next/link';

const contact = () => {
  return (
    <section className={styles.contact}>
        <Navbar/>
        
        <div className={styles.contactHeaderGrid}>
          <div className={styles.contactHeader}>
            <p>
              GET IN TOUCH
            </p>

            <h1>
              CONTACT ME
            </h1>

            <p className={styles.contactLine}></p>
          </div> 

          <div className={styles.contactDetails}>
            <div>
              <p>
                Would you love to work with me, 
                or just want to say hi?, please 
                feel free to reach out to me. I am 
                also currently open to freelance 
                opportunities.
              </p> 
                          
              <a href="mailto:israelchidera54@gmail.com">
                <button>
                  Hire me
                </button>
              </a>              
            </div>

            
          </div>
        </div>

        <Sidebar/>
    </section>
  )
}

export default contact
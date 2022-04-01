import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import styles from '../styles/About.module.css';

const about = () => {
  return (
    <section className={styles.about}>
      <Navbar/>

      <div className={styles.aboutDetails}>
        <div className={styles.aboutFigure}>
          <h1 className={styles.aboutFigureHeader}>
            01
          </h1>

          <p>
            Coding + Piano + Music
          </p>
        </div>

        <div className={styles.aboutFigureDetails}>
          <div className={styles.aboutHead}>
            <p>
              About me
            </p>

            <h3 className={styles.aboutLink}>My Biography</h3>

            <p className={styles.aboutLine}>
            </p>
          </div>

          

          <p className={styles.para}>
            <span className={styles.aboutSpan}> Hi! </span>I am Israel Chidera. I have a strong passion 
            for elegant designs, creating usable user 
            interfaces and building with intent. I love 
            writing for beginners. Before all these, I am 
            first a human, an everday learner, an 
            inquisitive geek and an everyday student.
            I live in Lagos, Nigeria. 
          </p>

          <p className={styles.para}>
            I am a recent 
            Microbiology/Biochemistry graduate, from 
            the University of Nigeria, Nsukka. I was 
            fascinated by the wonders of the web and was 
            introduced to web design by a tutor in my 
            sophomore year. I got really interested in 
            designing websites and interfaces in my 
            final year. Since then, 
            I have been learning and growing with so 
            many tools and languages.
          </p>

          <p className={styles.para}>
            My goal is to become a top notch front end 
            engineer and a UI/UX designer who is able 
            to consistently build and design usable user 
            interfaces, web. applications and websites. 
            In this ever changing world of tech., I 
            accept the challengeof learning and growing. 
            The goal is to be better than yesterday.
          </p>

          <p className={styles.para}>
            I use a number of tools and technologies 
            for my designs and development. I mainly use 
            Figma for prototyping, wireframing and visual 
            designs. I also use adobe illustrator for logo 
            and brand identity designs. Listed below are 
            the tools and technologies that I use and 
            I'm knowledgeable with.
          </p>
        </div>
      </div>

      <Sidebar/>
    </section>
  )
}

export default about
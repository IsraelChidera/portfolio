import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Link from 'next/link';
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

        <section className={styles.about}>  
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
                I am knowledgeable with.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.works}> 
          <div>
              <div className={styles.worksHeader}>
                <div className={styles.worksHeaderDetails}>
                  <p>
                    Latest Works
                  </p>
                  <h3>
                    My Projects
                  </h3>
                  <h6 className={styles.worksLine}></h6>
                </div>

                <div className={styles.worksHeaderFigure}>
                  <h1 className={styles.imageText}>
                    02
                  </h1>
                </div>
              </div>

              <div className={styles.worksShowRoom}>
                <div className={styles.workProject}>
                  <div className={styles.projectImage}>
                    <div className={styles.projectImageFlexed}>
                      SB
                    </div>
                  </div>

                  <div className={styles.projectDetails}>
                    <h3>
                      StudentBook
                    </h3>
                    <p>
                      React Js, Redux, Firebase v9
                    </p>

                    <h4>
                      StudentBook is a web based student management 
                      system that allows users to organize tasks,
                      results and media in a place
                    </h4>

                    <p className={styles.projectLink}>
                      <Link href="https://studentbook.netlify.app">
                        <a target="_blank">
                          Live Preview
                        </a>
                      </Link>
                    </p>
                  </div>
                </div>

                <div className={styles.workProject}>
                  <div className={styles.projectImage}>
                    <div className={styles.projectImageFlexed}>
                      NS
                    </div>
                  </div>

                  <div className={styles.projectDetails}>
                    <h3>
                      NextStore
                    </h3>
                    <p>
                      Next Js, Redux Toolkit, Fake store API
                    </p>

                    <h4>
                      NextStore is a ecommerce website. It 
                      utilizes the fakestore API 
                    </h4>

                    <p className={styles.projectLink}>
                      <Link href="https://next-store-swart.vercel.app/">
                        <a target="_blank">
                          Live Preview
                        </a>
                      </Link>
                    </p>
                  </div>
                </div>

                <div className={styles.workProject}>
                  <div className={styles.projectImage}>
                    <div className={styles.projectImageFlexed}>
                      RE
                    </div>
                  </div>

                  <div className={styles.projectDetails}>
                    <h3>
                      Resource Edge
                    </h3>
                    <p>
                      React Js, Frontend development
                    </p>

                    <h4>
                      Resource edge is a human resource 
                      management website
                    </h4>

                    <p className={styles.projectLink}>
                      <Link href="https://izzyresourcedge.netlify.app/">
                        <a target="_blank">
                          Live Preview
                        </a>
                      </Link>
                    </p>                  
                  </div>
                </div>

                <div className={styles.workProject}>
                  <div className={styles.projectImage}>
                    <div className={styles.projectImageFlexed}>
                      PIS
                    </div>
                  </div>

                  <div className={styles.projectDetails}>
                    <h3>
                      Platinum International School
                    </h3>
                    <p>
                      HTML, CSS, Javascript
                    </p>

                    <h4>
                      A modern website for Platinum International School
                    </h4>

                    <p className={styles.projectLink}>
                      <Link href="https://platinuminternationalschool.netlify.app/">
                        <a target="_blank">
                          Live Preview
                        </a>
                      </Link>
                    </p>
                  </div>
                </div>

                <div className={styles.workProject}>
                  <div className={styles.projectImage}>
                    <div className={styles.projectImageFlexed}>
                      MT
                    </div>
                  </div>

                  <div className={styles.projectDetails}>
                    <h3>
                      Mykroft Tech
                    </h3>
                    <p>
                      Front end development (REACT Js)
                    </p>

                    <h4>
                      A landing page for Mykroft Tech
                    </h4>

                    <p className={styles.projectLink}>
                      <Link href="https://mykroft.tech/">
                        <a target="_blank">
                          Live Preview
                        </a>
                      </Link>
                    </p>
                  </div>
                </div>

                <div className={styles.workProject}>
                  <div className={styles.projectImage}>
                    <div className={styles.projectImageFlexed}>
                      v1
                    </div>
                  </div>

                  <div className={styles.projectDetails}>
                    <h3>
                      Portfolio v1
                    </h3>
                    <p>
                      HTML, CSS, Javascript
                    </p>

                    <h4>
                      My Portfolio website version 1.
                    </h4>

                    <p className={styles.projectLink}>
                      <Link href="https://israelchidera.github.io/izzy/">
                        <a target="_blank">
                          Live Preview
                        </a>
                      </Link>
                    </p>
                  </div>
                </div>

              </div>
          </div>
        </section>

        <section className={styles.contact}>               
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
        </section>

        < Sidebar />


      </div>
    </>
    
  )
}

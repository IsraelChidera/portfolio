import workStyles from '../styles/Works.module.css';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Link from 'next/link';

const works = () => {
  return (
    <section className={workStyles.works}>
        < Navbar />

        <div>
            <div className={workStyles.worksHeader}>
              <div className={workStyles.worksHeaderDetails}>
                <p>
                  Latest Works
                </p>
                <h3>
                  My Projects
                </h3>
                <h6 className={workStyles.worksLine}></h6>
              </div>

              <div className={workStyles.worksHeaderFigure}>
                <h1 className={workStyles.imageText}>
                  02
                </h1>
              </div>
            </div>

            <div className={workStyles.worksShowRoom}>
              <div className={workStyles.workProject}>
                <div className={workStyles.projectImage}>
                  <div className={workStyles.projectImageFlexed}>
                    SB
                  </div>
                </div>

                <div className={workStyles.projectDetails}>
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

                  <p className={workStyles.projectLink}>
                    <Link href="https://studentbook.netlify.app">
                      <a target="_blank">
                        Live Preview
                      </a>
                    </Link>
                  </p>
                </div>
              </div>

              <div className={workStyles.workProject}>
                <div className={workStyles.projectImage}>
                  <div className={workStyles.projectImageFlexed}>
                    NS
                  </div>
                </div>

                <div className={workStyles.projectDetails}>
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

                  <p className={workStyles.projectLink}>
                    <Link href="https://next-store-swart.vercel.app/">
                      <a target="_blank">
                        Live Preview
                      </a>
                    </Link>
                  </p>
                </div>
              </div>

              <div className={workStyles.workProject}>
                <div className={workStyles.projectImage}>
                  <div className={workStyles.projectImageFlexed}>
                    RE
                  </div>
                </div>

                <div className={workStyles.projectDetails}>
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

                  <p className={workStyles.projectLink}>
                    <Link href="https://izzyresourcedge.netlify.app/">
                      <a target="_blank">
                        Live Preview
                      </a>
                    </Link>
                  </p>                  
                </div>
              </div>

              <div className={workStyles.workProject}>
                <div className={workStyles.projectImage}>
                  <div className={workStyles.projectImageFlexed}>
                    PIS
                  </div>
                </div>

                <div className={workStyles.projectDetails}>
                  <h3>
                    Platinum International School
                  </h3>
                  <p>
                    HTML, CSS, Javascript
                  </p>

                  <h4>
                    A modern website for Platinum International School
                  </h4>

                  <p className={workStyles.projectLink}>
                    <Link href="https://platinuminternationalschool.netlify.app/">
                      <a target="_blank">
                        Live Preview
                      </a>
                    </Link>
                  </p>
                </div>
              </div>

              <div className={workStyles.workProject}>
                <div className={workStyles.projectImage}>
                  <div className={workStyles.projectImageFlexed}>
                    MT
                  </div>
                </div>

                <div className={workStyles.projectDetails}>
                  <h3>
                    Mykroft Tech
                  </h3>
                  <p>
                    Front end development (REACT Js)
                  </p>

                  <h4>
                    A modern website for Platinum 
                    International School
                  </h4>

                  <p className={workStyles.projectLink}>
                    <Link href="https://mykroft.tech/">
                      <a target="_blank">
                        Live Preview
                      </a>
                    </Link>
                  </p>
                </div>
              </div>

              <div className={workStyles.workProject}>
                <div className={workStyles.projectImage}>
                  <div className={workStyles.projectImageFlexed}>
                    v1
                  </div>
                </div>

                <div className={workStyles.projectDetails}>
                  <h3>
                    Portfolio v1
                  </h3>
                  <p>
                    HTML, CSS, Javascript
                  </p>

                  <h4>
                    My Portfolio website version 1.
                  </h4>

                  <p className={workStyles.projectLink}>
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

        < Sidebar />
    </section>
  )
}

export default works
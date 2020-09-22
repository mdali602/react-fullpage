/* import React, { useEffect } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Head from "next/head";
import AOS from "aos";
// import logo from "./logo.svg";
import styles from "../styles/Home.module.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
    // AOS.refresh();
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ReactFullpage
          //fullpage options
          licenseKey={"YOUR_KEY_HERE"}
          scrollingSpeed={1000}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section">
                  <h1 className={styles.title}>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                  </h1>

                  <p className={styles.description}>
                    Get started by editing{" "}
                    <code className={styles.code}>pages/index.js</code>
                  </p>
                </div>
                <div className="section">
                  <p>Section 1 (welcome to fullpage.js)</p>
                  <button onClick={() => fullpageApi.moveSectionDown()}>
                    Click me to move down
                  </button>
                </div>
                <div className="section">
                  <div className={styles.grid}>
                    <a
                      data-aos="fade-up"
                      data-aos-offset="200"
                      data-aos-delay="50"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                      data-aos-mirror="true"
                      data-aos-once="false"
                      href="https://nextjs.org/docs"
                      className={styles.card}
                    >
                      <h3>Documentation &rarr;</h3>
                      <p>
                        Find in-depth information about Next.js features and
                        API.
                      </p>
                    </a>
                    <a
                      data-aos="fade-up"
                      data-aos-offset="200"
                      data-aos-delay="500"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                      data-aos-mirror="true"
                      data-aos-once="false"
                      href="https://nextjs.org/learn"
                      className={styles.card}
                    >
                      <h3>Learn &rarr;</h3>
                      <p>
                        Learn about Next.js in an interactive course with
                        quizzes!
                      </p>
                    </a>
                    <a
                      data-aos="fade-up"
                      data-aos-offset="200"
                      data-aos-delay="1000"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                      data-aos-mirror="true"
                      data-aos-once="false"
                      href="https://github.com/vercel/next.js/tree/master/examples"
                      className={styles.card}
                    >
                      <h3>Examples &rarr;</h3>
                      <p>
                        Discover and deploy boilerplate example Next.js
                        projects.
                      </p>
                    </a>
                    <a
                      data-aos="fade-up"
                      data-aos-offset="200"
                      data-aos-delay="1500"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                      data-aos-mirror="true"
                      data-aos-once="false"
                      href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                      className={styles.card}
                    >
                      <h3>Deploy &rarr;</h3>
                      <p>
                        Instantly deploy your Next.js site to a public URL with
                        Vercel.
                      </p>
                    </a>
                  </div>
                </div>
                <div className="section">
                  <p>Section 2</p>
                </div>
                <div className="section">
                  <div>
                    <h1>Hello</h1>

                    <video controls loop autoplay>
                      <source
                        src="videos/oh_welcome.mp4"
                        // src={require("../../videos/oh_welcome.mp4")}
                        type="video/mp4"
                      />
                      oh welcome
                    </video>

                    <p>Video courtesy of burj khalifa.</p>

                    <div>
                      <iframe
                        // width="420"
                        // height="315"
                        // src="https://www.youtube.com/embed/tgbNymZ7vqY"
                        src="https://www.youtube.com/embed/x1MEDti3Vbg"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
 */

import React, { Component } from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";

export default class App extends Component {
  render() {
    return (
      <Fullpage>
        <FullPageSections>
          <FullpageSection
            style={{
              backgroundColor: "lime",
              height: "80vh",
              padding: "1em",
            }}
          >
            1
          </FullpageSection>
          <FullpageSection
            style={{
              backgroundColor: "coral",
              padding: "1em",
            }}
          >
            2
          </FullpageSection>
          <FullpageSection
            style={{
              backgroundColor: "firebrick",
              padding: "1em",
            }}
          >
            3
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    );
  }
}

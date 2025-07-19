import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
// Use a public URL for the video source instead of importing the mp4 file
// import introBg from "./assets/introBg.mp4"; 



// this is where the about page frontend goes
const AboutPage = () => {
  return (
    <div>
      <div>
        <nav className="navbar">
          <a href="" className="logo-name">
            <img src={/images/trace.svg} />
            <h3>TXUML</h3>
          </a>
          <div className="nav-links">
            <ul>
              <li>
                <a href="">Log in</a>
              </li>
              <li>
                <a href="">Sign up</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div>
        <video src="/videos/introBg.mp4" controls autoPlay muted loop />
        {/* <video src={introBg}controls autoPlay muted loop /> */}
      
        <h1>Unearth the Data. Build with Confidence.</h1>
        <p>
         Every Mine Has a Story. We Map Them All, from Depths to Data.
        </p>
      </div>
    </div>

    // <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',  alignItems: 'center', gap: '3rem' }}>
    //   <h1 className={styles.headerBox}>About TXUML</h1>
    //   <div style={{ display: 'flex', gap: '2rem' }}>
    //     <Image
    //       src={"/images/tunnel1.png"}
    //       alt="Underground Mine Tunnel"
    //       width={240}
    //       height={320}
    //       style={{ borderRadius: '4px' }}
    //     />
    //     <Image
    //       src={"/images/minemap.png"}
    //       alt="Texas Underground Mine Map"
    //       width={320}
    //       height={320}
    //       style={{ borderRadius: '4px' }}
    //     />
    //   </div>
    //   <div>
    //     <p className={styles.textBox}>
    //       TXUML is an interactive map that highlights the
    //       locations of all underground abandoned or active
    //       coal mines in the state of Texas since the late 1800s.
    //     </p>
    //   </div>
    // </div>
  );
};

export default AboutPage;

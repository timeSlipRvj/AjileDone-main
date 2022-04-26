import React from "react";
import styles from "./Contact.module.css";
const Contact = () => {
  return (
    <div className={styles.sectionMain}>
      <div className={styles.sectionMainInner}>
        <div className={styles.sectionMain1Inner1}>
          <div className={styles.sectionMain1}>
            <div className={styles.sectionMain1Left}>
              <img
                className={styles.sectionMain1LeftImg}
                src="./Rectangle 16.png"
                alt="rectangle16"
              />
            </div>
          </div>
        </div>
        <div className={styles.sectionMain1RightOuter}>
          <div className={styles.sectionMain1Right}>
            <div className={styles.sectionMain1RightHeading}>
              <div className={styles.sectionMain1RightHeading1}>
                <span>SAP AND ERP</span>
              </div>
              <div className={styles.sectionMain1RightLogo}>
                <img
                  className={styles.sectionMain1RightLogoImg}
                  src="./AJILEDONE LOGO 3 2.png"
                  alt="logo1"
                />
              </div>
            </div>
            <div className={styles.sectionMain1RightPara}>
              <span className={styles.sectionMain1RightPara1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque nunc felis justo, quis. Ultrices sit eget tellus
                porttitor. Neque egestas elementum viverra mauris arcu morbi.
                Diam sed sit feugiat amet. Urna ultricies tincidunt eget tortor
                augue egestas nullam nulla ipsum.\
              </span>
            </div>
            <div className={styles.sectionMain1Right2}>
              <input
                className={styles.sectionMain1Right21}
                placeholder="Company Name"
              ></input>
            </div>
            <div className={styles.sectionMain1Right3}>
              <input
                className={styles.sectionMain1Right31}
                placeholder="Company Name"
              ></input>
            </div>
            <div className={styles.sectionMain1Right4}>
              <input
                className={styles.sectionMain1Right41}
                placeholder="Company Name"
              ></input>
            </div>
            <div className={styles.sectionMain1Right5}>
              <input
                className={styles.sectionMain1Right51}
                placeholder="Company Name"
              ></input>
            </div>
          </div>
          <div className={styles.sectionMain1RightBtn}>
            <button className={styles.sectionMain1RightBtn1}>
              GET A QOUTE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

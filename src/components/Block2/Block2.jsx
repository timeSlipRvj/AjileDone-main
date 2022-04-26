import React from "react";
import styles from "./Block2.module.css";
const Block2 = () => {
  return (
    <div className={styles.sectionMain}>
      <div className={styles.sectionMain1}>
        <img
          className={styles.sectionMain1Img}
          src="./Rectangle 82.png"
          alt="rectangle"
        />
      </div>
      <div className={styles.sectionMain2}>
        <div className={styles.sectionMainHeading}>
          <span>CLOUD SERVICES</span>
        </div>
        <div className={styles.sectionMainPara}>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque nunc felis justo, quis. Ultrices sit eget tellus
            porttitor. Neque egestas elementum viverra mauris arcu morbi. Diam
            sed sit feugiat amet. Urna ultricies tincidunt eget tortor augue
            egestas nullam nulla ipsum. Blandit libero, ullamcorper fringilla
            amet. Ut odio at praesent parturient vitae amet dolor nisi, nulla.
            Id lorem non, volutpat, lacinia venenatis, cras proin elementum.
            Bibendum commodo sollicitudin enim lorem tortor faucibus.
          </span>
        </div>
        <div className={styles.sectionMainBtn}>
          <button className={styles.sectionMainBtn1}>
            <span className={styles.sectionMainBtnTxt}>GET A QOUTE</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Block2;

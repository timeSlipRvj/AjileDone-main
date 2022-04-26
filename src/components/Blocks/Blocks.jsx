import React from "react";
import styles from "./Blocks.module.css";
const Blocks = () => {
  return (
    <div className={styles.sectionBlock}>
      <div className={styles.sectionBlockImg}>
        <img
          className={styles.sectionBlockImg1}
          src="./Rectangle 82.png"
          alt="reactangle82"
        />
      </div>
      <div className={styles.sectionBlock2}>
        <div className={styles.sectionMain3Text}>
          <span>Design, Developer</span>
          <span className={styles.sectionMain3Text2}>10 min</span>
        </div>
        <div className={styles.sectionBlock3Heading}>
          <div className={styles.sectionBlock3Heading1}>
            <span>BLOG HEADING ONE, we will write maximum two lines here</span>
          </div>
          <div className={styles.sectionBlock3Heading2}>
            <span>by MOHIT GOPAL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blocks;

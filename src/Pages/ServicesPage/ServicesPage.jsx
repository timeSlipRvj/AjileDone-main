import React from "react";
import Block2 from "../../components/Block2/Block2";
import styles from "./ServicesPage.module.css";
const ServicesPage = () => {
  return (
    <div className={styles.sectionMain}>
      <div className={styles.sectionMain1}>
        <div className={styles.sectionMain1Heading}>
          <span>SERVICES</span>
        </div>
        <div className={styles.sectionMain1Line}>
          <span>---------------</span>
        </div>
        <div className={styles.sectionMain1Text}>
          <span>
            These are the services which our company provides. Select one
            service and send a query!
          </span>
        </div>
      </div>
      <div className={styles.sectionMain2}>
        <div className={styles.sectionMain2Inner}>
          <Block2 />
        </div>
        <div className={styles.sectionMain2Inner}>
          <Block2 />
        </div>
        <div className={styles.sectionMain2Inner}>
          <Block2 />
        </div>
        <div className={styles.sectionMain2Inner}>
          <Block2 />
        </div>
        <div className={styles.sectionMain2Inner}>
          <Block2 />
        </div>
        <div className={styles.sectionMain2Inner}>
          <Block2 />
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;

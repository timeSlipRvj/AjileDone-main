import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.about1}>
          <div className={styles.aboutImg}>
            <img className={styles.aboutImg1} src="./adon.png" alt="adon" />
          </div>
          <div className={styles.aboutInfo}>
            We Ajiledone, work to provide the best SAP Consulting Services with
            the experience to improve the IT landscape for uninterrupted
            business operations by 24*7 support.
          </div>
        </div>
        <div className={styles.links}>
          <span>LINKS</span>
          <div>
            <img src="./arrow.png" alt="arrow" /> <span>ABOUT</span>
          </div>
          <div>
            <img src="./arrow.png" alt="arrow" /> <span>BLOGS</span>
          </div>
          <Link to="/contact">
            <div>
              <img src="./arrow.png" alt="arrow" />
              <span>CONTACT US</span>
            </div>
          </Link>
          <div>
            <img src="./arrow.png" alt="arrow" /> <span>SERVICES</span>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={styles.contacts}>
          <span>CONTACT INFO</span>
          <span className={styles.contactsAddress}>
            Co-Offiz 8th Floor, Magnum Tower 1 Sector 58, Gurgaon Haryana
            -122011
          </span>
          <span>+91-9315473097</span>
          <span>info@ajiledone.com</span>
        </div>
        <div className={styles.subscribe}>
          <span>SUBSCRIBE</span>
          <input
            className={styles.input1}
            type="email"
            placeholder="Enter your email"
          />
          <hr className={styles.line} />
          <button className={styles.subscribeBtn} type="button">
            SUBSCRIBE
          </button>
        </div>
      </div>
      <div className={styles.rights}>
        2022 All right reserved by Ajiledone | Designed By Mohit Gopal
      </div>
    </div>
  );
};

export default Footer;

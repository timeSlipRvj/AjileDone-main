import React from "react";
import styles from "./Header.module.css";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerImg1}>
        <Link to="/">
          <div className={styles.headerImg2}>
            <img
              className={styles.headerImg}
              src="./logo1.png"
              alt="header-logo"
            />
          </div>
        </Link>
      </div>
      <div className={styles.headerComponents}>
        <ul className={styles.headerList}>
          <li className={styles.headerListHome}>
            <Link to="/">
              <span className={styles.headerListHome1}>Home</span>
            </Link>
          </li>
          <li className={styles.headerListAbout}>
            <Link to="/about">
              <span className={styles.headerListAbout1}>About</span>
            </Link>
          </li>
          <li className={styles.headerListBlog}>
            <Link to="/singleBlog">
              <span className={styles.headerListBlog1}>Blog</span>
            </Link>
          </li>
          <li className={styles.headerListService}>
            <Link to="services">
              <span className={styles.headerListServices1}>Service</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.headerBtn1}>
        <button className={styles.headerBtn2} type="button">
          GET IN TOUCH
        </button>
      </div>
    </div>
  );
};

export default Header;

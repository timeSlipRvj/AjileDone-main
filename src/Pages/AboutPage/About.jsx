import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

import styles from "./About.module.css";
import { loadScript } from "./loadScript";
const About = () => {
  const containerStyle = {
    width: "400px",
    height: "400px",
  };
  const center = {
    lat: -3.745,
    lng: -38.523,
  };
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(true);
  function hide(obj) {
    if (active) {
      var el = document.getElementById(obj);
      el.style.transition = "opacity 10s ease-out";
      el.style.display = "none";
      setActive(false);
    } else {
      var p = document.getElementById(obj);
      p.style.padding = "2%";
      p.style.display = "block";
      p.style.transition = " ease-in 0.5s";
      setActive(true);
    }
  }
  const handleClick = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
    console.log(active);
  };

  //   this.setState({
  //     loading: false,
  //   });
  //   this.getLocation();
  const api = "AIzaSyBa0AclEH0 - BaAxlQ05JZu_Hhoo2x6lWak";
  useEffect(() => {
    const load = async () => {
      await loadScript(
        `https://maps.googleapis.com/maps/api/js?key=${api}&libraries=places`
      );

      setLoading(false);
    };
    load();
  }, []);

  return (
    <div className={styles.sectionAbout}>
      <img
        className={styles.sectionAboutImg}
        src="./Rectangle 55.png"
        alt="rectangle 55"
        height="40%"
        width="100%"
      />
      <div className={styles.sectionAboutInner}>
        <div className={styles.sectionAboutText1}>
          <span>
            Powering Your Path to Success with Swift and Smart Solutions
          </span>
        </div>
        <div className={styles.sectionAboutText2}>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque sit
            congue nisl quis dis mattis sed facilisis orci. Sed egestas morbi
            odio vulputate eget adipiscing sed. Morbi leo, nunc lorem
            suspendisse. Quam faucibus lectus pulvinar sit arcu. Aenean nisl
            tincidunt elit, euismod purus. Faucibus gravida tincidunt
            condimentum nulla tristique tincidunt malesuada.{" "}
          </span>
        </div>
      </div>
      {/* <div className={styles.sectionAboutInner2}>
        <div className={styles.sectionAboutInner2Text}>
          <span>OUR TEAM</span>
          <span>-------------------</span>
        </div>
      </div> */}
      <img
        className={styles.sectionAboutImg2}
        src="./Group 520.png"
        alt="sectionAboutImg2"
        width="100%"
      />
      <div className={styles.sectionAboutInner2}>
        <div className={styles.sectionAboutInner2Text}>
          <span>FAQs</span>
          <span>-------------------</span>
        </div>
      </div>

      <div className={styles.sectionAboutInner3}>
        <div className={styles.sectionAboutBlock1}>
          <div className={styles.sectionAboutOuter}>
            <span className={styles.sectionAboutOuterHeading}>
              With AjileDone you can
            </span>
            <div className={styles.sectionAboutBlock1textOuter}>
              <div className={styles.sectionAboutBlock1Text}>
                <div className={styles.sectionAboutBlock1Icon}>
                  {/* <span>1</span> */}
                  <img src="./Rectangle 59.png" alt="rectangle 59" />
                </div>
                <div className={styles.sectionAboutBlock1TextInner}>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Neque sit congue nisl quis dis mattis sed facilisis orci.
                  </span>
                </div>
              </div>
              <div className={styles.sectionAboutBlock1Text}>
                <div className={styles.sectionAboutBlock1Icon}>
                  {/* <span>1</span> */}
                  <img src="./Rectangle 59.png" alt="rectangle 59" />
                </div>
                <div className={styles.sectionAboutBlock1TextInner}>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Neque sit congue nisl quis dis mattis sed facilisis orci.
                  </span>
                </div>
              </div>
              <div className={styles.sectionAboutBlock1Text}>
                <div className={styles.sectionAboutBlock1Icon}>
                  {/* <span>1</span> */}
                  <img src="./Rectangle 59.png" alt="rectangle 59" />
                </div>
                <div className={styles.sectionAboutBlock1TextInner}>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Neque sit congue nisl quis dis mattis sed facilisis orci.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.sectionAboutBlock2Text}></div>
        </div>

        <div className={styles.sectionAboutBlock2}>
          <div className={styles.sectionAboutBlock2TextInner}>
            <div
              className={styles.sectionAboutBlock2TextInner1}
              onClick={() => hide("hideme")}
            >
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
                sit congue nisl quis dis mattis sed facilisis orci.
              </span>
            </div>
            <div id="hideme" className={styles.sectionAboutBlock2TextInner12}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
                sit congue nisl quis dis mattis sed facilisis orci. Sed egestas
                morbi odio vulputate eget adipiscing sed. Morbi leo, nunc lorem
                suspendisse. Quam faucibus lectus pulvinar sit arcu. Aenean nisl
                tincidunt elit, euismod purus. Faucibus gravida tincidunt
                condimentum nulla tristique tincidunt malesuada.{" "}
              </span>
            </div>
            <div
              className={styles.sectionAboutBlock2TextInner1}
              onClick={() => hide("hideme1")}
            >
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.?
              </span>
            </div>
            <div id="hideme1" className={styles.sectionAboutBlock2TextInner12}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
                sit congue nisl quis dis mattis sed facilisis orci. Sed egestas
                morbi odio vulputate eget adipiscing sed. Morbi leo, nunc lorem
                suspendisse. Quam faucibus lectus pulvinar sit arcu. Aenean nisl
                tincidunt elit, euismod purus. Faucibus gravida tincidunt
                condimentum nulla tristique tincidunt malesuada.{" "}
              </span>
            </div>
            <div
              className={styles.sectionAboutBlock2TextInner1}
              onClick={() => hide("hideme2")}
            >
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.?
              </span>
            </div>
            <div id="hideme2" className={styles.sectionAboutBlock2TextInner12}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
                sit congue nisl quis dis mattis sed facilisis orci. Sed egestas
                morbi odio vulputate eget adipiscing sed. Morbi leo, nunc lorem
                suspendisse. Quam faucibus lectus pulvinar sit arcu. Aenean nisl
                tincidunt elit, euismod purus. Faucibus gravida tincidunt
                condimentum nulla tristique tincidunt malesuada.{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        Map
        {loading && <div>LOADING</div>}
        {!loading && (
          <>
            <GoogleMap
              mapContainerClassName={containerStyle}
              center={center}
              zoom={10}
            ></GoogleMap>
            <h1>This is worki</h1>
          </>
        )}
      </div> */}
      {/* <div className={styles.googleMp}>
        {!loading && <div> GoogleMap</div>}
      </div> */}
      <div className={styles.sectionAboutEndHeading}>
        <div className={styles.sectionAboutEndHeading1}>
          <span>OFFICE LOCATION</span>
          <span>------------------------</span>
        </div>
      </div>
      <div className={styles.sectionAboutEnd}>
        <div className={styles.sectionAboutMapOuter}>
          <div className={styles.sectionAboutMapSide}>
            <div className={styles.sectionAboutMapHeading}>
              <span>MAP LOCATION</span>
            </div>
            <div className={styles.sectionAboutMapInnerArea}>
              <div className={styles.sectionAboutMap1}>
                <img
                  className={styles.sectionAboutMap1Inner}
                  src="./Rectangle 63.png"
                  alt="rectangle63"
                />
                <img
                  className={styles.sectionAboutMap2Inner}
                  src="./Rectangle 65.png"
                  alt="rectangle65"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sectionAboutAddressSide}>
          <div className={styles.sectionAboutAddText}>
            <div>
              <span>
                <strong>HQ - GURUGRAM, INDIA</strong>
              </span>
            </div>
            <div>
              <span>Co-offiz, Sector 58 Gurugram</span>
            </div>
            <div>
              <span>+91-9012345678</span>
            </div>
            <div>
              <span>mohit.gopal@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sectionEnd}>
        <img src="./Rectangle 54.png" alt="rectangle" width="100%" />
      </div>
    </div>
  );
};

export default About;

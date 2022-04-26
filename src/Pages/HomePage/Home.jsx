import React from "react";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <div className={styles.homemain}>
      <div className={styles.homePage}>
        <div className={styles.section1}>
          <div className={styles.section1Img}>
            <div className={styles.section1inner}>
              <img
                className={styles.img1}
                src="./Rectangle 26.png"
                alt="rectangle26"
              />
            </div>
          </div>
        </div>
        <div className={styles.section2}>
          <div className={styles.section2inner1}>
            <div className={styles.section2Img}>
              <div className={styles.section2inner}>
                <img className={styles.img2} src="./adon.png" alt="adon" />
              </div>
            </div>
            <div>
              <span className={styles.section2text}>
                Powering Your Path to Success with Swift and Smart Solutions
              </span>
              <span className={styles.section2text}>
                Our superior digital intelligence and sound expertise will help
                you stay agile and ahead of the curve.
              </span>
            </div>
          </div>
        </div>
        <div className={styles.section3}>
          <div className={styles.section3Img}>
            <div className={styles.section3inner}>
              <img
                className={styles.img3}
                src="./Rectangle 27.png"
                alt="rectangle27"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sectionMid}>
        <img src="./Group 516.png" alt="group" width="100%" />
      </div>

      <div className={styles.sectionServices}>
        <div className={styles.sectionService0}>
          <div className={styles.sectionServiceInner1}>
            <div className={styles.ourServices}>OUR SERVICES</div>
            <div className={styles.ourServices}>---------</div>
            <div className={styles.ourServices}>
              We accompany you in building your company with our services.
            </div>
          </div>
        </div>
      </div>

      {/* <div className={styles.sectionService2}> */}
      {/* <div className={styles.sectionServices2}>
            <div className={styles.sectionBlocks}>SAP</div>
            <div className={styles.sectionBlocks}></div>
            <div className={styles.sectionBlocks}>CLOUD SERVICES</div>
            <div className={styles.sectionBlocks}>BLOCKCHAIN & METAVERSE</div>
            <div className={styles.sectionBlocks}>BI & DATA ANALYSIS</div>
            <div className={styles.sectionBlocks}>AI & MACHINE LEARNING</div>
          </div> */}
      {/* </div> */}
      <div className={styles.sectionQuestion}>
        <div className={styles.sectionQuestion1}>
          <div className={styles.sectionQuestionText}>
            <span>IS YOUR COMPANY FEELING LOST?</span>
            <span>Do you have such questions in your mind?</span>
          </div>
          <div className={styles.sectionQuestionImg}>
            <img
              className={styles.sectionQuestionImg1}
              src="./Rectangle 28.png"
              alt="rectangle"
              height="100px"
              width="100px"
            />
            <img
              className={styles.sectionQuestionImg2}
              src="./question_mark.png"
              alt="question_mark"
              height="100px"
              width="100px"
            />
          </div>
        </div>
        <div className={styles.sectionQuestion2}>
          <div className={styles.sectionQuestionInner}>
            <img
              className={styles.sectionQuestionImg3}
              src="./QUESTION.png"
              alt="question"
              height="30%"
              width="80%"
            />
          </div>
        </div>
        <div className={styles.sectionQuestion3}>
          <div className={styles.sectionQuestionInner}>
            <img
              className={styles.sectionQuestionImg3}
              src="./QUESTION.png"
              alt="question"
              height="30%"
              width="80%"
            />
          </div>
        </div>
      </div>
      <div className={styles.sectionMid2}>
        <img className={styles.sectionMid2Img} src="./if_yes.png" alt="if" />
        <span>it’s time to give your business a power-packed Ajile boost!</span>
        <button>GET IN TOUCH</button>
      </div>
      <div className={styles.sectionMid3}>
        <div className={styles.sectionMid3text}>
          <span>HOW WE WORK FOR YOU?</span>
          <span>---------</span>
        </div>
      </div>
      <div className={styles.sectionMid31Img}>
        <img
          className={styles.sectionMid3Img}
          src="./Rectangle 49.png"
          alt="rectangle49"
          height="150px"
          width="150px"
        />
      </div>
      {/* <div className={styles.sectionMid4}>
        <div className={styles.sectionMid4Inner}>
          <span>All you need to do is...</span>
          <div className={styles.sectionMid4Circle}>1</div>
          <span>Choose Your Industry</span>
        </div>
        <div className={styles.sectionMid4Inner}>
          <span>then....</span>
          <div className={styles.sectionMid4Circle}>2</div>
          <span>Select Service</span>
        </div>
        <div className={styles.sectionMid4Inner}>
          <span>then...</span>
          <div className={styles.sectionMid4Circle}>3</div>
          <span>Ask For Expert</span>
        </div>
        <div className={styles.sectionMid4Inner}>
          <span>then...</span>
          <div className={styles.sectionMid4Circle}>4</div>
          <span>Give Requirements</span>
        </div>
        <div className={styles.sectionMid4Inner}>
          <span>& finally...</span>
          <div className={styles.sectionMid4Circle}>5</div>
          <span>Take Services</span>
        </div>
      </div> */}
      <div className={styles.sectionMid5}>
        <button className={styles.sectionMid5Button}>LET'S Go</button>
        <span className={styles.sectionMid5Text}>
          A few steps can help you give your company a good shape, what’s day?
        </span>
      </div>
      <div className={styles.sectionMid6}>
        <div className={styles.sectionMid6Inner}>
          <span className={styles.sectionMid6Text}>SEND QUOTE FOR FREE!</span>
          <span className={styles.sectionMid6Text}>-------------</span>
          <span className={styles.sectionMid6Text}>
            Choose the service you want to ask query about?
          </span>
          <div className={styles.setionMid6Box}></div>
        </div>
      </div>
      <div className={styles.section3Upper}>
        <img
          className={styles.section3UpperImg}
          src="./Group 521.png"
          alt="group521"
        />
      </div>
      <div className={styles.sectionEnd}>
        <img src="./Rectangle 54.png" alt="rectangle" width="100%" />
      </div>
    </div>
  );
};

export default Home;

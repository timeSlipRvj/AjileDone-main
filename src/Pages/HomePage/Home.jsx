import React from "react";
import ServiceBox from "./ServiceBox";
import styles from "./Home.module.css";
import QuestionBox from "./QuestionBox";
import WorkBox from "./WorkBox";

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

      {/* Services */}
      <div className="flex flex-col bg-bg-[#03203d]">
        <div className="flex flex-col text-center">
          <div className="font-bold text-2xl uppercase">OUr services</div>
          <div className="grid justify-items-center mt-2">
            <hr className="w-1/5 h-0.5 border-0 bg-[#0B30E9]" />
          </div>
          <div className="m-2 font-medium text-base">
            We accompany you in building your company with our services.
          </div>
        </div>

        <div className="flex justify-center flex-wrap gap-4 xl:px-40 xl:gap-10">
          <ServiceBox content={"SAP"} />

          <div className="flex flex-col justify-center h-52 w-64 bg-[#7387C3] items-center align-middle m-4 rounded-xl">
            <div className="flex flex-col text-center">
              <h1 className="text-3xl font-bold text-[#45537C] m-1">ERP</h1>
              <div className="text-medium m-1 p-2 text-white">
                ERP software can include capabilities for procurement, supply
                chain management, inventory, manufacturing, & many more.
              </div>
            </div>
          </div>

          <ServiceBox content={"CLOUD SERVICES"} />
          <ServiceBox content={"BLOCKCHAIN & METAVERSE"} />
          <ServiceBox content={"BI & DATA ANALYSIS"} />
          <ServiceBox content={"AI & MACHINE LEARNING"} />
        </div>
      </div>

      {/* is ur company lost */}
      <div className="h-full relative flex mt-8 ">
        <div className="absolute justify-center mx-12 mt-8">
          <img className="z-20 h-60" src="./Rectangle 28.png" alt="" />
          <div className="absolute bottom-[-160px] right-[-60px] z-10 font-black text-[16rem] text-[#E5E5E5]">
            ?
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-col justify-content text-center mx-auto">
            <div className="font-bold text-2xl uppercase">
              IS YOUR COMPANY FEELING LOST?
            </div>
            <div className="grid justify-items-center mt-2">
              <hr className="w-1/5 h-0.5 border-0 bg-[#0B30E9]" />
            </div>
            <div className="m-2 font-medium text-base">
              Do you have such questions in your mind?
            </div>
          </div>

          <div className="ml-auto mr-40">
            <QuestionBox
              content={
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate aspernatur temporibus nam quisquam  "
              }
            />
          </div>
          <div className="mr-auto ml-60">
            <QuestionBox
              content={
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate aspernatur"
              }
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center align-middle items-center m-8">
        <div className="text-7xl font-black text-[#E5E5E5] text-center">
          If YES, then
        </div>

        <div className="mt-6 font-medium text-base text-center">
          it’s time to give your business a power-packed Ajile boost!
        </div>
        <div className="flex w-40 py-2 mt-4 bg-[#45537C] justify-center rounded-lg text-center text-white text-md">
          GET IN TOUCH
        </div>
      </div>

      {/* how we work for you */}
      <div className="flex relative flex-col p-8 m-2">
        <div className="absolute justify-center right-20">
          <img className="h-72" src="./Rectangle 49.png" alt="" />
        </div>

        <div className="flex flex-col text-center">
          <div className="font-bold text-2xl uppercase">
            how we work for you
          </div>
          <div className="grid justify-items-center mt-2">
            <hr className="w-1/5 h-0.5 border-0 bg-[#0B30E9]" />
          </div>
        </div>
        <div className="flex mt-64 justify-center flex-wrap gap-4 xl:px-24">
          <WorkBox
            num={"1"}
            head={"All you need to do is..."}
            foot={"Choose Your Industry"}
          />
          <WorkBox num={"2"} head={"then..."} foot={"Select Service"} />
          <WorkBox num={"3"} head={"then..."} foot={"Give Requirements"} />
          <WorkBox num={"4"} head={"then..."} foot={"Give Requirements"} />
          <WorkBox num={"5"} head={"& finally..."} foot={"Take Services"} />
        </div>
        <div className="flex w-40 py-2 mt-4 mx-auto bg-[#45537C] justify-center rounded-lg text-center text-white text-md">
          LET'S GO
        </div>
      </div>

      {/* SEND QUERY */}
      <div className="flex relative flex-col mt-12 mb-4">
        <div className="absolute justify-center left-12">
          <img className="h-72" src="./Rectangle 50.png" alt="" />
        </div>
        <div className="flex flex-col text-center">
          <div className="font-bold text-2xl uppercase">
            SEND QUOTE FOR FREE!
          </div>
          <div className="grid justify-items-center mt-2">
            <hr className="w-1/5 h-0.5 border-0 bg-[#0B30E9]" />
          </div>
          <div className="m-2 font-base text-base">
            Choose the service you want to ask query about?
          </div>
        </div>

        <div className="flex flex-col w-96 m-8 p-4 mx-auto border-dashed border-2 border-[#0B30E9] rounded-xl justify-center items-center">
          <input
            className="w-full my-2 outline-0 border-b-2 border-[#878787]"
            type="text"
            placeholder="Name of the Company*"
          />
          <input
            className="w-full my-2 outline-0 border-b-2 border-[#878787]"
            type="email"
            placeholder="Email address*"
          />
          <input
            className="w-full my-2 outline-0 border-b-2 border-[#878787]"
            type="text"
            placeholder="Your Query*"
          />

          <div className="flex w-32 py-2 mt-4 mx-auto bg-[#45537C] justify-center uppercase rounded-lg text-center text-white text-sm">
            send query
          </div>
          <div className="flex mx-auto m-2 text-xs text-center text-[#878787]">
            Our team will get back to you within 24 hours of receiving the quote
            and will arrange a meeting, make sure to enter details correctly"
          </div>
        </div>

        <img className="w-full" src="./Rectangle 54.png" alt="" />
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import Banner from "../assets/Images/banner.mp4";
import HighlightText from "../components/core/HomePage/HighlightText";
import CTButton from "../components/core/HomePage/CTButton";
import CodeBlock from "../components/core/HomePage/CodeBlock";
import TimeLineSection from "../components/core/HomePage/TimeLineSection";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import Footer from "../components/common/Footer";
import ExploreMore from "../components/core/HomePage/ExploreMore";

export default function Home() {
  return (
    <div className="w-[100%] m-auto">
      {/* section0 */}
      <div className="w-[80%] mx-auto">
        <div className="relative flex flex-col w-11/12 mx-auto item-center text-white justify-between max-w-maxContent">
          <Link to={"/sighup"}>
            <div className=" group p-1 mt-16 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit">
              <div className="flex justify-center border-black-solid gap-2 rounded-full px-10 py-[5px] transition-all duration-200  items-center group-hover:bg-richblack-900">
                <p>Become an Instructor</p>
                <AiOutlineArrowRight />
              </div>
            </div>
          </Link>

          <div className="text-center text-4xl font-semibold mt-7">
            Empower Your Future with
            <HighlightText text={"Coding Skill"} />
          </div>

          <div className="w-[100%] mt-4 text-lg font-bold m-auto text-richblack-300 text-center">
            {" "}
            With our online coding courses, you can learn at your own pace, from
            anywhere in the world, and get acces to a wealth of resources,
            including hands-on projects, quizzes, and personalised feedback from
            instructor.
          </div>

          <div className="flex flex-row gap-7 mt-8 m-auto">
            <CTButton active={true} linkto={"/signup"}>
              Learn More
            </CTButton>
            <CTButton active={false} linkto={"/login"}>
              Book a Demo
            </CTButton>
          </div>

          <video
            className="shadow-blue-200 mx-3 my-12 w-[100%] m-auto shadow-[10px_10px] shadow-white"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4"></source>
          </video>
        </div>

        {/* Section 1 */}
        <div className="flex flex-col w-[90%] m-auto">
          <CodeBlock
            position={"lg:flex-row"}
            heading={
              <div className="text-3xl font-semibold text-white">
                Unlock Your
                <HighlightText text={"coding potential"} /> with our online
                courses
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctbutton1={{
              btnText: "Try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctbutton2={{
              btnText: "Learn more",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>\n<html>\n<head>\n<title>Example</title>\n<linkrel="stylesheet"href="styles.css">\n</head>\n</html>\n`}
            codeColor={"text-yellow-25"}
          />

          <CodeBlock
            position={"lg:flex-row-reverse"}
            heading={
              <div className="text-3xl font-semibold text-white">
                Unlock Your
                <HighlightText text={"coding potential"} /> with our online
                courses
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctbutton1={{
              btnText: "Try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctbutton2={{
              btnText: "Learn more",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>\n<html>\n<head>\n<title>Example</title>\n<linkrel="stylesheet"href="styles.css">\n</head>\n</html>\n`}
            codeColor={"text-yellow-25"}
          />
        </div>
        <ExploreMore/>
      </div>

      {/* Section 2--------- */}

      <div className="bg-pure-greys-5 text-richblack-700 w-[100%] m-auto">
        <div className="homepage_bg h-[333px]">
          <div className="w-11/12 max-w-maxContent flex item-centerngap-5 mx-auto">
            <div className="flex flex-row gap-7 text-white mx-auto p-[10rem] ">
              <CTButton active={true} linkto={"./signup"}>
                <div className="flex items-center gap-3">
                  Explore Full Catloge
                  <AiOutlineArrowRight />
                </div>
              </CTButton>

              <CTButton active={false} linkto={"./login"}>
                Learn More
              </CTButton>
            </div>
          </div>
        </div>

        <div className="mx-auto w-11/12 max-w-maxContent flex flex-col item-center justify-between gap-7">
          <div className="flex fle-row gap-5 p-8">
            <div className="text-3xl font-semibold">
              Get the Skills you need for a
              <HighlightText text={"job that is in demand"} />
            </div>
            <div className="flex flex-col gap-10 w-[70%] items-start">
              <div className="text-[16px]">
                The modern StudyNotion is the dictates its own terms. today, to
                be a competitivve specialist requires more than professional
                skills.
              </div>
              <CTButton active={true} linkto={"./signup"}>
                Learn More
              </CTButton>
            </div>
          </div>
        </div>

        <div className="m-10">
          {" "}
          <TimeLineSection />
        </div>

        <div className="m-10">
          <LearningLanguageSection />
        </div>
      </div>

      {/* ssection 3 */}

      <div className="w-[80%] mx-auto max-w-maxContent flex flex-col item-center justify-between gap-8 bg-richblack-900 text-white">
        <InstructorSection/>

        <h2 className="text-center text-4xl font-semibold mt-10 ">Review from other Learners</h2>

      </div>

      {/* Footer------------- */}
      

      <Footer/>

    </div>
  );
}

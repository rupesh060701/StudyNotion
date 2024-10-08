import React from "react";
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timelineimage from '../../../assets/Images/TimelineImage.png'


const timeline = [
  {
    Logo: Logo1,
    heading: "Leadership",
    Descriprion: "Fully Commmitted to the success company",
  },
  {
    Logo: Logo2,
    heading: "Responsibility",
    Descriprion: "Students will always be our top priority",
  },
  {
    Logo: Logo3,
    heading: "Flexbility",
    Descriprion: "The ability to switch is an important skills",
  },
  {
    Logo: Logo4,
    heading: "Solve the problem",
    Descriprion: "Code your way to a solution",
  },
];

export default function TimeLineSection() {
  return (
    <div>
      <div className="flex flex-row gap-15 items-center">
        <div className="w-[45%] flex flex-col gap-5 p-6 mx-10">
          {
            timeline.map((element, index) => {
              return <div className="flex flex-row gap-6 " key={index}>
                <div className="w-[50px] h-[50px]  bg-white flex items-centre rounded-full">
                  <img className="m-4" src={element.Logo} alt="logo1"/>
                </div>
                <div>
                  <h2 className="font-semibold text-[18px]">{element.heading}</h2>
                  <p className="text-base">{element.Descriprion}</p>
                </div>
              </div>;
            })
          }
        </div>
        <div className="relative shadow-blue-200 mx-10">
            <img src={timelineimage} alt="timelineimage" className="shadow-white object-cover h-fit"></img>
            <div className="absolute bg-caribbeangreen-700 flex flex-row text-white uppercase py-3 left-[50%] translate-x-[-50%]  translate-y-[-50%]">

              <div className="flex flex-row items-center gap-5 border-r border-caribbeangreen-300 px-5">
                <p className="text-3xl font-bold">10</p>
                <p className="text-caribbeangreen-300 text-sm">Year of Experience</p>
              </div>

              <div className="flex flex-row items-center gap-5 border-r border-caribbeangreen-300 px-5">
                <p className="text-3xl font-bold">250</p>
                <p className="text-caribbeangreen-300 text-sm">Type of Course</p>
              </div>

            </div>
        </div>
      </div>
    </div>
  );
}

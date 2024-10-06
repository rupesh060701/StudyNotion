import React from "react";
import HighlightText from "./HighlightText";
import Know_Your_Progress from "../../../assets/Images/Know_your_progress.png"
import Compare_with_Progress from "../../../assets/Images/Compare_with_others.png"
import Plan_your_Lesson from "../../../assets/Images/Plan_your_lessons.png"
import CTButton from "./CTButton";

export default function LearningLanguageSection() {
  return (
    <div className="mt-[125px] p-10">
      <div className="flex flex-col gap-5 m-auto w-[80%] text-center ">
        <div className="text-4xl">
          Your Swiss Knife for
          <HighlightText text={"learning any language"} />
        </div>

        <div className="w-[80%] m-auto">
          Using spin making learning multiple languages easy. with 20+ languages
          realistic voice-over, progress tracking, custom schedule and more.
        </div>
      </div>

      <div className="flex flex-row item-center justify-center mt-5 m-auto w-[60%] p-[2rem]" relative>
        <img src={Know_Your_Progress} alt="Know_Your_Progress" className="object-contain -mr-32"/>
        <img src={Compare_with_Progress} alt="Compare_with_Progress" className="object-contain " />
        <img src={Plan_your_Lesson} alt="Plan_your_Lesson" className="object-contain -ml-32 "/>
      </div>

      <div className="w-fit m-auto">
        <CTButton active={true} linkto={"./signup"} > Learn More</CTButton>
      </div>
    </div>
  );
}

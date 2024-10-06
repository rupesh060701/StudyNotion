import React from "react";
import CTButton from "./CTButton";
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export default function CodeBlock({
  position,
  heading,
  subheading,
  ctbutton1,
  ctbutton2,
  codeblock,
  backgroundgradient,
  codeColor,
}) {
  return (
    <div className={`flex ${position} my-10 justify-between gap-10`}>
      <div className="w-[50%] flex flex-col gap-5 ">
        {heading}
        <div className="text-richblack-300 font-bold">{subheading}</div>
        <div className="flex gap-10">
          <CTButton active={ctbutton1.active} linkto={ctbutton1.linkto}>
            <div className="flex gap-2 item-center">
              {ctbutton1.btnText}
              <FaArrowRight />
            </div>
          </CTButton>

          <CTButton active={ctbutton2.active} linkto={ctbutton2.linkto}>
            {ctbutton2.btnText}
          </CTButton>
        </div>
      </div>

      <div className=" h-fit  flex flex-row text-10[px] w-[100%] py-4 lg:w-[500px] ">
        {/*HW -> BG gradient*/}

        <div className="text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold  ">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
         
        </div>

        <div
          className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-2`}
        >
          <TypeAnimation
            sequence={[codeblock, 2000,""]}
            repeat={Infinity}
            cursor={true}
            style={{
              whiteSpace: "pre-line",
              display: "block",
            }}
            omitDeletionAnimation={true}
          />
        </div>
      </div>
    </div>
  );
}

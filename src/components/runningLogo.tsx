import Image from "next/image";
import React from "react";
// import { SVG as svgs } from "../../constant/index";
import { SVGComp as SVGComps } from "../constant";
import { isEven } from "../utils";

type Props = {};

export const RunningLogo = (props: Props) => {
  const rowsIcons = [];
  for (let i = 0, len = 10; i < len; i++) {
    rowsIcons.push({ Comp: RowIcon });
  }
  return (
    <>
      <div className="mx-auto w-full overflow-hidden bg-gradient-radial from-transparent to-black mix-blend-overlay">
        <div
          style={{ transform: "perspective(90rem) rotateX(45deg)" }}
          className="relative h-screen w-screen origin-top mix-blend-overlay"
        >
          <div className="absolute top-0 left-0 flex h-full w-full flex-col justify-between overflow-hidden bg-gray-700">
            {rowsIcons.map((el, idx) => {
              return <el.Comp key={idx} isEven={isEven(idx)} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

type RowProps = {
  isEven?: boolean;
};

const RowIcon = (props: RowProps) => {
  const animate = props.isEven ? "animate-running" : "animate-running-reverse";
  const animateExtend = props.isEven
    ? "animate-running-extend"
    : "animate-running-extend-reverse";

  return (
    <>
      <div className="flex w-full text-gray-500">
        <div className={"custom-delay flex gap-5 " + animate}>
          {SVGComps.map((SvgComp, idx) => {
            return (
              <div
                key={idx}
                className="opacity-70 duration-1000 hover:text-fuchsia-400 hover:opacity-100 hover:duration-[0ms]"
              >
                <SvgComp className="h-16 w-16" />
              </div>
            );
          })}
        </div>
        <div className={"custom-delay-extend flex gap-5 " + animateExtend}>
          {SVGComps.map((SvgComp, idx) => {
            return (
              <div
                key={idx}
                className="opacity-70 duration-1000 hover:text-fuchsia-400 hover:opacity-100 hover:duration-[0ms]"
              >
                <SvgComp className="h-16 w-16" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

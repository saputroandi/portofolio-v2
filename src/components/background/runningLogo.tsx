import Image from "next/image";
import React from "react";
// import { SVG as svgs } from "../../constant/index";
import { SVGComp as SVGComps } from "../../constant";
import { isEven } from "../../utils";

type Props = {};

export const RunningLogo = (props: Props) => {
  const rowsIcons = [];
  for (let i = 0, len = 9; i < len; i++) {
    rowsIcons.push({ Comp: RowIcon });
  }
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-between overflow-hidden bg-gray-700">
        {rowsIcons.map((el, idx) => {
          return <el.Comp key={idx} isEven={isEven(idx)} />;
        })}
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
        <div className={"flex gap-5 custom-delay " + animate}>
          {SVGComps.map((SvgComp, idx) => {
            return (
              <div
                key={idx}
                className="opacity-70 duration-1000 hover:opacity-100 hover:duration-[0ms] hover:text-fuchsia-400"
              >
                <SvgComp className="w-16 h-16" />
              </div>
            );
          })}
        </div>
        <div className={"flex gap-5 custom-delay-extend " + animateExtend}>
          {SVGComps.map((SvgComp, idx) => {
            return (
              <div
                key={idx}
                className="opacity-70 duration-1000 hover:opacity-100 hover:duration-[0ms] hover:text-fuchsia-400"
              >
                <SvgComp className="w-16 h-16" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

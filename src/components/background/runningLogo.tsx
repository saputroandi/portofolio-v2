import Image from "next/image";
import React from "react";
// import { SVG as svgs } from "../../constant/index";
import { SVGComp as SVGComps } from "../../constant";

type Props = {};

export const RunningLogo = (props: Props) => {
  return (
    <>
      <div className="flex w-full gap-5 animate-running">
        {SVGComps.map((SvgComp, idx) => {
          return (
            <div key={idx}>
              <SvgComp className="w-32 h-32 fill-slate-200 opacity-70 hover:opacity-100" />
            </div>
          );
        })}
      </div>
    </>
  );
};

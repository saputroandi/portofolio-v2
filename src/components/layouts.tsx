import React from "react";
import { RunningLogo } from "./runningLogo";

type Props = {
  children?: React.ReactElement | React.ReactElement[];
};

const MainLayouts = (props: Props) => {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center">
      <RunningLogo />
      <div className="absolute z-10">{props.children}</div>
    </div>
  );
};

export default MainLayouts;

import clsx from "clsx";
import React, { useEffect } from "react";
import { useWindowSize } from "../hooks";
import Navbar from "./navbar";
import { RunningLogo } from "./runningLogo";
import SideBar from "./sideBar";

type Props = {
  children?: React.ReactElement | React.ReactElement[];
};

const MainLayouts = (props: Props) => {
  const windowSize = useWindowSize();
  return (
    <div className="relative flex h-screen w-screen items-center justify-center">
      <RunningLogo />
      <div
        className={clsx(
          "absolute z-10 flex gap-4",
          windowSize.width < 640 ? "flex-col" : "flex-row"
        )}
      >
        <SideBar />
        <Navbar />
        {props.children}
      </div>
    </div>
  );
};

export default MainLayouts;

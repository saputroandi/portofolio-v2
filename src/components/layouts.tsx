import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useWindowPosition, useWindowSize } from "../hooks";
import Navbar from "./navbar";
import { RunningLogo } from "./runningLogo";
import SideBar from "./sideBar";

type Props = {
  children?: React.ReactElement | React.ReactElement[];
};

const MainLayouts = (props: Props) => {
  const windowSize = useWindowSize();
  const [isActive, setIsActive] = useState("/");
  const windowPosition = useWindowPosition();

  useEffect(() => {
    console.log(windowPosition);
  }, [windowPosition]);

  return (
    <div className="relative">
      <RunningLogo />
      <div
        className={clsx(
          "z-10 mx-auto my-4 flex h-full w-full max-w-[90vw] flex-col gap-4 md:mt-32 md:max-w-[70vw] md:flex-row",
          windowSize.width < 640 ? "flex-col" : "flex-row"
        )}
      >
        <SideBar isActive={isActive} setIsActive={setIsActive} />
        <Navbar isActive={isActive} setIsActive={setIsActive} />
        {props.children}
      </div>
    </div>
  );
};

export default MainLayouts;

import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useWindowSize } from "../hooks";
import Navbar from "./navbar";
import { RunningLogo } from "./runningLogo";
import SideBar from "./sideBar";

type Props = {
  children?: React.ReactElement | React.ReactElement[];
};

const MainLayouts = (props: Props) => {
  const windowSize = useWindowSize();
  const [isActive, setIsActive] = useState("/");

  return (
    <div className="relative flex h-screen w-screen">
      <RunningLogo />
      <div
        className={clsx(
          "absolute top-0 left-0 z-10 h-full w-full overflow-auto"
        )}
      >
        <div
          className={clsx(
            "my-4 mx-auto flex max-w-[90vw] gap-4 md:mt-44 md:max-w-[70vw]",
            windowSize.width < 640 ? "flex-col" : "flex-row"
          )}
        >
          <SideBar isActive={isActive} setIsActive={setIsActive} />
          <Navbar isActive={isActive} setIsActive={setIsActive} />
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default MainLayouts;

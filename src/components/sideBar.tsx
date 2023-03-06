import clsx from "clsx";
import React from "react";
import { useWindowSize } from "../hooks";

type Props = {};

const SideBar = (props: Props) => {
  const windowSize = useWindowSize();
  return (
    <div
      className={clsx(
        "w-64 rounded-xl bg-fuchsia-400/[0.4] p-10 text-gray-900 backdrop-blur-sm",
        windowSize.width < 640 ? "hidden" : ""
      )}
    >
      <div className="mb-4">
        <h3 className="text-3xl font-bold">Andi</h3>
      </div>
      <div className="">
        <ul className="flex w-28 flex-col gap-2">
          <li className="flex-1 pt-2 pr-2 pb-2 hover:rounded-md hover:bg-fuchsia-400 hover:pl-2 hover:font-bold hover:text-black">
            Home
          </li>
          <li className="flex-1 pt-2 pr-2 pb-2 hover:rounded-md hover:bg-fuchsia-400 hover:pl-2 hover:font-bold hover:text-black">
            About
          </li>
          <li className="flex-1 pt-2 pr-2 pb-2 hover:rounded-md hover:bg-fuchsia-400 hover:pl-2 hover:font-bold hover:text-black">
            Blog
          </li>
          <li className="flex-1 pt-2 pr-2 pb-2 hover:rounded-md hover:bg-fuchsia-400 hover:pl-2 hover:font-bold hover:text-black">
            GuestBook
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;

import clsx from "clsx";
import React from "react";
import { useWindowSize } from "../hooks";

type Props = {};

const Navbar = (props: Props) => {
  const windowSize = useWindowSize();
  return (
    <div
      className={clsx(
        "flex w-[95vw] flex-col justify-between rounded-xl bg-fuchsia-400/[0.4] p-4 text-gray-900 backdrop-blur-sm",
        windowSize.width > 640 ? "hidden" : ""
      )}
    >
      <div className="p-2">
        <p>Andi</p>
      </div>
      <div className="">
        <ul className="flex gap-1">
          <li className="flex p-2 text-sm hover:rounded-md hover:bg-fuchsia-400 hover:font-bold hover:text-black">
            Home
          </li>
          <li className="flex p-2 text-sm hover:rounded-md hover:bg-fuchsia-400 hover:font-bold hover:text-black">
            About
          </li>
          <li className="flex p-2 text-sm hover:rounded-md hover:bg-fuchsia-400 hover:font-bold hover:text-black">
            Blog
          </li>
          <li className="flex p-2 text-sm hover:rounded-md hover:bg-fuchsia-400 hover:font-bold hover:text-black">
            GuestBook
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

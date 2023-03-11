import clsx from "clsx";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { routes } from "../constant";
import { useWindowSize } from "../hooks";

type Props = {
  isActive: string;
  setIsActive: Dispatch<SetStateAction<string>>;
};

const Navbar = (props: Props) => {
  const windowSize = useWindowSize();
  return (
    <div
      className={clsx(
        "flex w-[90vw] flex-col justify-between rounded-xl bg-fuchsia-400/[0.4] p-4 text-gray-900 backdrop-blur-sm",
        windowSize.width > 640 ? "hidden" : ""
      )}
    >
      <div className="p-2">
        <p className="text-3xl font-semibold">Andi</p>
      </div>
      <div className="">
        <ul className="flex gap-1">
          {routes.map((route) => {
            return (
              <Link href={route.link} key={route.link}>
                <li
                  onClick={() => props.setIsActive(route.link)}
                  className={clsx(
                    "flex rounded-md p-2 text-sm",
                    props.isActive === route.link
                      ? "bg-fuchsia-400 font-bold"
                      : ""
                  )}
                >
                  {route.caption}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

import clsx from "clsx";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import { routes } from "../constant";
import { useWindowSize } from "../hooks";

type Props = {
  isActive: string;
  setIsActive: Dispatch<SetStateAction<string>>;
};

const SideBar = (props: Props) => {
  const windowSize = useWindowSize();
  return (
    <div
      className={clsx(
        "max-h-[60vh] w-64 rounded-xl bg-fuchsia-400/[0.4] p-10 text-gray-900 backdrop-blur-sm",
        windowSize.width < 640 ? "hidden" : ""
      )}
    >
      <div className="mb-4">
        <h3 className="text-3xl font-bold">Andi</h3>
      </div>
      <div className="">
        <ul className="flex w-28 flex-col gap-2">
          {routes.map((route) => {
            return (
              <Link href={route.link} key={route.link}>
                <li
                  onClick={() => props.setIsActive(route.link)}
                  className={clsx(
                    "flex-1 rounded-md pt-2 pr-2 pb-2",
                    props.isActive === route.link
                      ? "bg-fuchsia-400 pl-2 font-bold"
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

export default SideBar;

import Head from "next/head";
import MainLayouts from "../components/layouts";
import SideBar from "../components/sideBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Andi Saputro | Web Dev</title>
      </Head>

      <div className="w-full rounded-xl bg-fuchsia-400/[0.4] p-16 text-gray-900 backdrop-blur-sm">
        <p>Home</p>
      </div>
    </>
  );
}

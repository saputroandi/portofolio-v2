import Head from "next/head";
import MainLayouts from "../components/layouts";
import SideBar from "../components/sideBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Andi Saputro | Web Dev</title>
      </Head>
      <MainLayouts>
        <SideBar />
      </MainLayouts>
    </>
  );
}

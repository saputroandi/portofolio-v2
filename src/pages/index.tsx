import Head from "next/head";
import { RunningLogo } from "../components/background";

export default function Home() {
  return (
    <>
      <Head>
        <title>Andi Saputro | Web Dev</title>
      </Head>
      <main className="w-screen overflow-hidden">
        <RunningLogo />
      </main>
    </>
  );
}

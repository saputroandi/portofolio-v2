import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Andi Saputro | Web Dev</title>
      </Head>

      <div className="flex w-full flex-col gap-4 rounded-xl bg-fuchsia-400/[0.4] p-10 text-gray-900 backdrop-blur-sm">
        <div className="flex flex-col gap-4">
          <div className="">
            <p className="text-2xl md:text-3xl">Andi Saputro</p>
          </div>
          <div className="">
            <p>
              Halo, saya Andi. Saya adalah seorang
              <strong> App Developer</strong>.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="overflow-hidden rounded-full border-4 border-gray-900">
            <Image
              alt="andi"
              src={"/img/photo_andi.s.jpeg"}
              width={150}
              height={150}
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="">
              <div className=""></div>
              <div className="">
                <a
                  href="https://github.com/saputroandi"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
            </div>
            <div className="">
              <div className=""></div>
              <div className="">
                <a
                  href="https://t.me/sambelkecap"
                  target="_blank"
                  rel="noreferrer"
                >
                  Telegram
                </a>
              </div>
            </div>
            <div className="">
              <div className=""></div>
              <div className="">
                <p>saputro.andi593@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <p className="leading-7">
            Hai saya seorang<strong> App Developer</strong>. Saya menghabiskan
            sepanjang hari untuk bereksperimen dengan HTML, CSS, PHP,
            TypeScript, JavaScript dan juga sedang mendalami GoLang. Saya dapat
            membangun aplikasi yang berguna dan informatif.
          </p>
        </div>
      </div>
    </>
  );
}

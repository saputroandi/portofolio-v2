import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Andi Saputro | Web Dev</title>
      </Head>

      <div className="w-full rounded-xl bg-fuchsia-400/[0.4] p-10 text-gray-900 backdrop-blur-sm">
        <div className="">
          <div className="">
            <p>Andi Saputro</p>
          </div>
          <div className="">
            <p>
              Halo, saya Andi. Saya adalah seorang developer baik FrontEnd
              Developer atau BackEnd Developer.
            </p>
          </div>
        </div>
        <div className="">
          <div className="">
            <Image
              alt="andi"
              src={"/img/photo_andi.s.jpeg"}
              width={100}
              height={100}
            />
          </div>
          <div className="">
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
          <p>
            Hai saya seorang web developer. Saya menghabiskan sepanjang hari
            untuk bereksperimen dengan HTML, CSS, dan JavaScript; serta
            mendalami PHP dan NodeJs. Saya dapat membangun situs web yang
            berguna dan informatif.
          </p>
        </div>
      </div>
    </>
  );
}

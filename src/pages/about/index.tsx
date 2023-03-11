import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <div className="w-full rounded-xl bg-fuchsia-400/[0.4] p-10 text-gray-900 backdrop-blur-sm">
      <div className="mb-3">
        <h3 className="text-2xl md:text-3xl">About Me</h3>
      </div>
      <div className="flex flex-col gap-2 leading-7">
        <p className="text-lg">
          Halo, saya Andi Saputro, biasa dipanggil Andi.
        </p>
        <p className="text-sm">
          Saya adalah seorang <strong>App Developer</strong>. Saya tertarik dan
          menyukai pekerjaan yang menantang saya untuk mempelajari sesuatu yang
          baru dan berkembang ke arah yang lebih baik. Saya melakukan yang
          terbaik untuk tetap mengikuti perubahan sehingga saya dapat menghadapi
          tantangan dengan kemampuan yang sesuai.
        </p>
      </div>
      <div className="mt-2">
        <div className="flex flex-col gap-2">
          <div className="">
            <p className="text-lg">
              Library and Frameworks yang biasa saya gunakan
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <div className="">
              <p>Express Js</p>
            </div>
            <div className="">
              <p>Next Js</p>
            </div>
            <div className="">
              <p>Laravel</p>
            </div>
            <div className="">
              <p>Bootstrap</p>
            </div>
            <div className="">
              <p>TailwindCSS</p>
            </div>
            <div className="">
              <p>AntD</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="">
            <h4>DBMS</h4>
          </div>
          <div className="">
            <div className="">
              <p>MySQL</p>
            </div>
            <div className="">
              <p>PostgreSql</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="">
            <h4>Lainnya</h4>
          </div>
          <div className="">
            <div className="">
              <p>Docker</p>
            </div>
            <div className="">
              <p>Linux</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

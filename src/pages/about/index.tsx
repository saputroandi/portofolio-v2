import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <div className="w-full rounded-xl bg-fuchsia-400/[0.4] p-10 text-gray-900 backdrop-blur-sm">
      <div className="">
        <p>
          Halo, saya Andi Saputro, biasa dipanggil Andi. Saya adalah seorang
          developer baik FrontEnd Developer atau BackEnd Developer.
        </p>
        <p>
          Saya tertarik, dan menyukai pekerjaan yang menantang saya untuk
          mempelajari sesuatu yang baru dan berkembang ke arah yang lebih baik.
          Saya melakukan yang terbaik untuk tetap mengikuti perubahan sehingga
          saya dapat menghadapi tantangan dengan kemampuan yang sesuai dengan
          pekerjaan yang ada.
        </p>
      </div>
      <div className="">
        <div className="">
          <h3>Kemampuan</h3>
        </div>
        <div className="">
          <div className="">
            <h4>Keterampilan & Ketertarikan</h4>
          </div>
          <div className="">
            <div className="">
              <p>Back-End Development</p>
            </div>
            <div className="">
              <p>Front-End Development</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="">
            <h4>Library and Frameworks</h4>
          </div>
          <div className="">
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

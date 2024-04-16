import Head from "next/head";
import MenuTab from "../components/MenuTab";

export default function Contact() {
  return (
    <>
      <Head>
        <title>get in touch</title>
      </Head>
      <div className="bg-cc-blue-100 flex flex-row h-screen">
        <div className="flex flex-row w-[24%]">
          <MenuTab
            title="home"
            link="/"
            color="bg-cc-beige"
            textColor="text-cc-black"
          />
          <MenuTab title="about me" link="/about" color="bg-cc-pink-100" />
          <MenuTab title="projects" link="/projects" color="bg-cc-black" />
        </div>

        <div className="flex flex-col justify-start items-start w-[76%] p-[40px] gap-5 overflow-auto">
          <p className="text-cc-black font-cocogoose text-6xl">get in touch</p>
          <div className="flex flex-col gap-2.5">
            <p className="text-cc-black font-cocogoose-ultra text-base">
              lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <a
              href="mailto:cetigerlily@gmail.com"
              className="text-cc-black font-cocogoose-ultra text-base"
            >
              cetigerlily@gmail.com
            </a>
            <a
              href="https://sg.linkedin.com/in/celestecheah"
              className="text-cc-black font-cocogoose-ultra text-base"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

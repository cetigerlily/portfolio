import Head from "next/head";
import MenuTab from "../components/MenuTab";

export default function About() {
  return (
    <>
      <Head>
        <title>about me</title>
      </Head>
      <div className="bg-cc-pink-100 flex flex-row justify-between h-screen">
        <div className="w-[8%]">
          <MenuTab
            title="home"
            link="/"
            color="bg-cc-beige"
            textColor="text-cc-black"
          />
        </div>

        <div className="flex flex-col justify-start items-start w-[76%] p-[40px] gap-5 overflow-auto">
          <p className="text-cc-black font-cocogoose text-6xl">about me</p>
          <p className="text-cc-black font-cocogoose-ultra text-base">
            lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>

        <div className="flex flex-row w-[16%]">
          <MenuTab title="projects" link="/projects" color="bg-cc-black" />
          <MenuTab
            title="get in touch"
            link="/contact"
            color="bg-cc-blue-100"
            textColor="text-cc-black"
          />
        </div>
      </div>
    </>
  );
}

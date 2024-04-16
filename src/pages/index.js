import Head from "next/head";
import MenuTab from "../components/MenuTab";

export default function Home() {
  return (
    <>
      <Head>
        <title>celeste cheah</title>
        <link rel="icon" href="../assets/favicon.ico" />
      </Head>

      <div className="bg-cc-beige flex justify-between h-screen w-screen">
        {/* TODO: add in custom padding to config */}
        <div className="flex flex-col justify-end gap-2.5 p-[80px] w-[76%]">
          <p className="text-cc-black font-cocogoose text-6xl">
            hey! i'm celeste
          </p>
          <p className="text-cc-black font-cocogoose-ultra text-base">
            lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>

        {/* TODO: transitions between pages */}
        <div className="flex flex-row w-[24%]">
          <MenuTab
            title="about me"
            link="/about"
            color="bg-cc-pink-100"
          />
          <MenuTab
            title="projects"
            link="/projects"
            color="bg-cc-black"
          />
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

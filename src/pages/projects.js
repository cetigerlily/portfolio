import Head from "next/head";
import MenuTab from "../components/MenuTab";
import ProjectSVG from "../components/ProjectSVG";

export default function Projects() {
  return (
    <>
      <Head>
        <title>projects</title>
      </Head>
      <div className="bg-cc-black flex flex-row justify-between h-screen">
        <div className="flex flex-row w-[16%]">
          <MenuTab
            title="home"
            link="/"
            color="bg-cc-beige"
            textColor="text-cc-black"
          />
          <MenuTab title="about me" link="/about" color="bg-cc-pink-100" />
        </div>

        <div className="flex flex-col justify-start items-start w-[76%] p-[40px] gap-5 overflow-auto">
          <p className="text-cc-beige font-cocogoose text-6xl">projects</p>
          <p className="text-cc-beige font-cocogoose-ultra text-base">
            lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className="grid grid-cols-3 gap-5 w-full">
            {/* TODO: modal with more project details when clicking on a folder */}
            <ProjectSVG
              title="project title"
              date="Jan-Dec XXXX"
              folderColor="#fab9d0"
              textColor="#363537"
            />
            <ProjectSVG
              title="project title"
              date="Jan-Dec XXXX"
              folderColor="#fab9d0"
              textColor="#363537"
            />
            <ProjectSVG
              title="project title"
              date="Jan-Dec XXXX"
              folderColor="#fab9d0"
              textColor="#363537"
            />

            <ProjectSVG
              title="project title"
              date="Jan-Dec XXXX"
              folderColor="#fab9d0"
              textColor="#363537"
            />
            <ProjectSVG
              title="project title"
              date="Jan-Dec XXXX"
              folderColor="#fab9d0"
              textColor="#363537"
            />
            <ProjectSVG
              title="project title"
              date="Jan-Dec XXXX"
              folderColor="#fab9d0"
              textColor="#363537"
            />

            <ProjectSVG
              title="project title"
              date="Jan-Dec XXXX"
              folderColor="#fab9d0"
              textColor="#363537"
            />
            <ProjectSVG
              title="project title"
              date="Jan-Dec XXXX"
              folderColor="#fab9d0"
              textColor="#363537"
            />
            <ProjectSVG
              title="project title"
              date="Jan-Dec XXXX"
              folderColor="#fab9d0"
              textColor="#363537"
            />
          </div>
        </div>

        <div className="w-[8%]">
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

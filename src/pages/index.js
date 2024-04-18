import Head from "next/head";
import MenuTab from "../components/MenuTab";
import { greetings } from "../assets/data/Greetings";
import { useEffect, useState } from "react";

export default function Home() {
  const [index, setIndex] = useState(0);
  const [greetingStyling, setGreetingStyling] = useState("text-cc-black font-cocogoose text-6xl")
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % greetings.length);

      // TODO: fix styling for chinese and korean
      // if (index == 2) {
      //   setGreetingStyling("text-cc-black font-xxck text-6xl")
      // } else if (index == 4) {
      //   setGreetingStyling("text-cc-black font-hoonddukbokki text-6xl")
      // } else {
      //   setGreetingStyling("text-cc-black font-cocogoose text-6xl")
      // }

    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>celeste cheah</title>
        <link rel="icon" href="../assets/favicon.ico" />
      </Head>

      <div className="bg-cc-beige flex justify-between h-screen w-screen">
        {/* TODO: add in custom padding to config */}
        <div className="flex flex-col justify-end gap-2.5 p-[80px] w-[76%]">
          <div className="animated-heading">
            {/* TODO: add in transitions between greeting changes */}
            <p className={`${ greetingStyling }`}>{ greetings[index] } i'm celeste</p>
          </div>
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

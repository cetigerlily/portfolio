import Head from "next/head";
import MenuTab from "../components/MenuTab";
import { greetings } from "../assets/data/Greetings";
import { useEffect, useState } from "react";
import anime from "animejs";

import styles from "../styles/index.module.css";

export default function Home() {
  const [index, setIndex] = useState(1);
  const [greetingStyling, setGreetingStyling] = useState(
    "text-cc-black font-cocogoose text-6xl"
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 5000);

    return () => clearInterval(interval); // Clear interval on unmount or index change
  }, []);

  useEffect(() => {
    const textWrapper = document.querySelector(".greeting");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /([^\x00-\x80]|\w)/g,
      "<span class='letter'>$&</span>"
    );

    anime
      .timeline({ loop: false })
      .add({
        targets: ".greeting .letter",
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1000,
        delay: (el, i) => 50 * (i + 1), // NOTE: delay before this animation occurs
      })
      // TODO: make the text look like it's deleting - animate from end to start
      .add({
        targets: ".greeting .letter",
        opacity: [1, 0],
        easing: "easeOutExpo",
        duration: 1000,
        delay: (el, i) => 50 * (i + 1), // NOTE: delay before this animation occurs
      });
  }, [index]);

  return (
    <>
      <Head>
        <title>celeste cheah</title>
        <link rel="icon" href="../assets/favicon.ico" />
      </Head>

      <div className="bg-cc-beige flex flex-row h-screen w-screen">
        <div className="bg-cc-blue-100" style={{ width: "500px" }}>
          <div className={styles.stampBorder}>
            <img src="https://picsum.photos/150/100" />
          </div>
        </div>

        {/* TODO: add in custom padding to config */}
        <div className="flex flex-col justify-end gap-2.5 p-[80px] w-[76%]">
          <div className="flex flex-row">
            <p className="greeting text-cc-black font-cocogoose text-6xl inline">
              {greetings[index]}
            </p>
          </div>
          <p className="text-cc-black font-cocogoose-ultra text-base">
            lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>

        {/* TODO: transitions between pages */}
        <div className="flex flex-row w-[24%]">
          <MenuTab title="about me" link="/about" color="bg-cc-pink-100" />
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

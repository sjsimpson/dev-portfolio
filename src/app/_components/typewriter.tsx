"use client";

import { useState, useEffect } from "react";
import { Roboto_Mono } from "next/font/google";
const roboto = Roboto_Mono({ subsets: ["latin"] });

const hats = [
  "Software Developer",
  "Father",
  "Magic: The Gathering Player",
  "Psych Enjoyer",
  "Home Remodeler",
  "Colemak Enthusiast",
];

export default function Typewriter() {
  const [paused, setPaused] = useState(false);
  const [typing, setTyping] = useState(true);
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    let timeout: any;
    if (typing) {
      if (textIndex < hats[index].length) {
        timeout = setTimeout(() => {
          setText(text + hats[index][textIndex]);
          setTextIndex(textIndex + 1);
        }, 100);
      } else {
        setPaused(true);
        setTyping(false);
        setTimeout(() => setPaused(false), 1500);
      }
    } else {
      if (!paused) {
        if (textIndex > 0) {
          timeout = setTimeout(() => {
            setText(text.slice(0, textIndex - 1));
            setTextIndex(textIndex - 1);
          }, 20);
        } else {
          index < hats.length - 1 ? setIndex(index + 1) : setIndex(0);
          setTyping(true);
        }
      }
    }

    return () => clearTimeout(timeout);
  }, [text, typing, index, textIndex, paused]);

  return (
    <div
      className={`${roboto.className} flex flex-col gap-4 font-light text-3xl`}
    >
      <div>
        Hello! <span className="animate-bounce">👋</span> My name is{" "}
        <span className="font-bold border-b border-b-black dark:border-b-white">
          Spencer Simpson
        </span>
      </div>
      <div>
        I am a{" "}
        <span className="after:ml-1 after:h-2 after:w-2 after:border after:border-black after:dark:border-white after:animate-blink">
          {text}
        </span>
      </div>
    </div>
  );
}

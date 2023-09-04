"use client";

import useTypewriter from "@/lib/useTypewriter";

const hats = [
  "Software Developer",
  "Father",
  "Magic: The Gathering Player",
  "Psych Enjoyer",
  "Home Remodeler",
  "Colemak Enthusiast",
];

export default function Typewriter() {
  const typewriter = useTypewriter(hats);

  return (
    <span className="after:ml-1 after:h-2 after:w-2 after:border after:border-black after:dark:border-white after:animate-blink">
      {typewriter}
    </span>
  );
}

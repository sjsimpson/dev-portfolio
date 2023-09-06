"use client";

import useTypewriter from "@/lib/useTypewriter";

export default function Typewriter({ prompts }: { prompts: string[] }) {
  const typewriter = useTypewriter(prompts);

  return (
    <span className="after:ml-1 after:h-full after:w-2 after:border after:border-black after:dark:border-white after:animate-blink">
      {typewriter}
    </span>
  );
}

"use client";

import { useState, useEffect } from "react";

export default function useTypewriter(prompts: string[]) {
  const [paused, setPaused] = useState(false);
  const [typing, setTyping] = useState(true);
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    let timeout: any;
    if (typing) {
      if (textIndex < prompts[index].length) {
        timeout = setTimeout(() => {
          setText(text + prompts[index][textIndex]);
          setTextIndex(textIndex + 1);
        }, 100);
      } else {
        setPaused(true);
        setTyping(false);
        setTimeout(() => setPaused(false), 2000);
      }
    } else {
      if (!paused) {
        if (textIndex > 0) {
          timeout = setTimeout(() => {
            setText(text.slice(0, textIndex - 1));
            setTextIndex(textIndex - 1);
          }, 20);
        } else {
          index < prompts.length - 1 ? setIndex(index + 1) : setIndex(0);
          setTyping(true);
        }
      }
    }

    return () => clearTimeout(timeout);
  }, [text, typing, index, textIndex, paused, prompts]);

  return text;
}

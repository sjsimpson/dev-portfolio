"use client";

import { useState, useEffect } from "react";

export default function useTypewriter(
  prompts: string[],
  options?: {
    typingSpeed?: number;
    clearSpeed?: number;
    pauseDuration?: number;
  },
) {
  const [paused, setPaused] = useState(false);
  const [typing, setTyping] = useState(true);
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [text, setText] = useState("");

  const {
    typingSpeed = 100,
    clearSpeed = 20,
    pauseDuration = 2000,
  } = options || {};

  useEffect(() => {
    function addNextLetter() {
      setText(text + prompts[index][textIndex]);
      setTextIndex(textIndex + 1);
    }

    function removeLastLetter() {
      setText(text.slice(0, textIndex - 1));
      setTextIndex(textIndex - 1);
    }

    function pause() {
      setPaused(true);
      setTyping(false);
      setTimeout(() => setPaused(false), pauseDuration);
    }

    function nextWord() {
      index < prompts.length - 1 ? setIndex(index + 1) : setIndex(0);
      setTyping(true);
    }

    let timeout: any;
    if (typing) {
      if (textIndex < prompts[index].length) {
        timeout = setTimeout(addNextLetter, typingSpeed);
      } else {
        pause();
      }
    } else if (!paused) {
      if (textIndex > 0) {
        timeout = setTimeout(removeLastLetter, clearSpeed);
      } else {
        nextWord();
      }
    }

    return () => clearTimeout(timeout);
  }, [
    text,
    typing,
    index,
    textIndex,
    paused,
    prompts,
    clearSpeed,
    typingSpeed,
    pauseDuration,
  ]);

  return text;
}

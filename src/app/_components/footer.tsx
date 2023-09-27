"use client";

// import { Roboto_Flex } from "next/font/google";
import FooterButton from "./footer-button";
// const roboto = Roboto_Mono({ subsets: ["latin"] });

export default function Footer() {
  return (
    <div className="flex flex-col place-items-center align-middle h-60 w-full mt-40 border-t border-t-black dark:border-t-white">
      <div className="flex flex-auto mt-10 sm:mt-20">
        <div className="flex flex-col gap-4 sm:flex-row">
          <FooterButton
            href="https://www.linkedin.com/in/spencerjsimpson/"
            src="/linkedin.svg"
            name="LinkedIn"
          />
          <FooterButton
            href="https://github.com/sjsimpson"
            src="/github.svg"
            name="GitHub"
          />
        </div>
      </div>
      {/*<div className={`${roboto.className} justify-self-end text-xs mb-4`}> */}
      {/*<div className="justify-self-end text-xs mb-4">
        This Website was originally created by me, Spencer Simpson, using React,
        TailwindCSS, and Next.js
      </div>*/}
    </div>
  );
}

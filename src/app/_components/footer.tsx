"use client";

import FooterButton from "./footer-button";

export default function Footer() {
  return (
    <div className="flex flex-col place-items-center align-middle h-60 w-full mt-40 border-t border-t-black dark:border-t-white">
      <div className="flex flex-auto mt-20">
        <div className="flex flex-row">
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
      <div className="justify-self-end text-xs mb-4">
        <div>This Website was originally created by me: Spencer Simpson</div>
      </div>
    </div>
  );
}

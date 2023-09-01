import { X } from "react-feather";
import Image from "next/image";
import { Roboto_Mono } from "next/font/google";
import { useEffect } from "react";
import Button from "../../_ui/button";

const roboto = Roboto_Mono({ subsets: ["latin"] });

export default function DetailsModal({
  tech,
  onClose,
}: {
  tech: Technology;
  onClose: () => void;
}) {
  useEffect(() => {
    const originalOverflow = document.body.style.overflowY;

    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = originalOverflow;
    };
  }, []);

  return (
    <div className="modal fixed flex flex-col justify-between w-screen h-screen bg-white dark:bg-night px-10 py-12 top-0 left-0 z-50">
      <div>
        <div className="header flex flex-row justify-end mb-10">
          <div
            className="flex p-1 w-fit h-fit border border-transparent hover:border-black dark:border-white"
            onClick={onClose}
          >
            <X />
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row align-middle gap-4 text-2xl font-bold mb-4">
            <div>{tech.name}</div>
            <Image
              className="dark:invert select-none pointer-events-none"
              src={tech.icon}
              alt={tech.alt}
              width={32}
              height={32}
              priority
            />
          </div>
        </div>
        <div className={`content ${roboto.className}`}>{tech.description}</div>
      </div>
      <Button onClick={onClose}>Close</Button>
    </div>
  );
}

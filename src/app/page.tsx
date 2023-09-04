import Image from "next/image";
import Typewriter from "./_components/typewriter";
export default function Home() {
  return (
    <main className="flex flex-col items-center gap-10 w-4/5 lg:w-[800px]">
      <Typewriter />
      <div className="flex flex-col lg:flex-row w-full items-center lg:justify-center gap-10">
        <div className="flex flex-col lg:w-2/3 font-light text-lg gap-8">
          <p>
            Hey there, I&apos;m Spencer, a software developer with a foundation
            in software testing, which has helped me cultivate a user-centric
            approach to development.
          </p>
          <p>
            My career kicked off as a Software Test Engineer at Qualtrics, and
            my passion for coding led me to become a Full-Stack Developer,
            specializing in React and other modern web technologies.
          </p>
          <p>
            When I&apos;m not coding, you&apos;ll likely find me spending time
            with my wife and daughter, playing Magic: The Gathering or video
            games with friends, or attempting to stay active.
          </p>
        </div>
        <div className="relative lg:w-1/3 border border-black dark:border-white p-4 shadow-[2px_2px_black] dark:shadow-[2px_2px_white]">
          <Image
            src="/headshot.jpg"
            alt="me"
            width={1365 / 3}
            height={2048 / 3}
          />
        </div>
      </div>
    </main>
  );
}

import GithubCalendar from "./_components/GithubCalendar";
import Project from "./_components/project";

export default function Projects() {
  return (
    <main className="flex flex-col items-center gap-16 w-4/5 lg:w-[800px]">
      <Project
        name="The Commander Pod"
        image={{ src: "/thecommanderpod.png", alt: "The Commander Pod" }}
        url="https://thecommanderpod.com/"
        github="https://github.com/sjsimpson/the-commander-pod"
        description={
          <>
            <p className="mb-6">
              This is the landing page for The Commander Pod podcast, which I
              host with my friend. Honestly, it's not much of a project (and is
              definitely not an app) but it was fun to work on.
            </p>
          </>
        }
      />
      <Project
        name="Nacho Stocks"
        image={{ src: "/nachostocks.png", alt: "Nacho Stocks" }}
        url="https://nachostocks.com/"
        github="https://github.com/sjsimpson/nacho-stocks"
        description={
          <>
            <p className="mb-6">
              Nacho Stocks is a Paper Trading application designed to help
              people overcome their anxieties about trading on the market. In
              addition, the users will learn from experience the best trading
              techniques.
            </p>
            <p>
              This project is still in progress, and I will be continuing to add
              functionality to it. For now, it continues to serve as a great
              vehicle for improving my React skills and working on the M3 React
              npm library.
            </p>
          </>
        }
      />
      <Project
        name="M3 React"
        image={{ src: "/m3-react.png", alt: "M3 React" }}
        github="https://github.com/sjsimpson/m3-react"
        npm="https://www.npmjs.com/package/m3-react"
        description={
          <>
            <p className="mb-6">
              M3 React started because I wanted to create an easy solution for
              implementing React components styled after the Google Material 3
              spec. Publishing and maintaining open-source software has always
              been a goal of mine, and this project was my first steps toward
              it.
            </p>
            <p>
              It has grown and improved as I&apos;ve used those components
              across various other projects. I hope to continue to add new
              components and improve existing ones. Feel free to add it to your
              own project to get quick start with styling.
            </p>
          </>
        }
      />
      <Project
        name="Previous Portfolio"
        image={{ src: "/old-resume.png", alt: "Old Portfolio" }}
        github="https://github.com/sjsimpson/dev-portfolio"
        description={
          <>
            <p className="mb-6">
              My previous portfolio website. It also leverages M3 React
              components and was built from scratch. I really liked it at the
              time, but quickly found it to be outdated, so I created a new one.
            </p>
            <p>
              Just like everything else, it&apos;s on my Github. So feel free to
              fork it and use at your leisure! Just please give me credit.
            </p>
          </>
        }
      />
      <GithubCalendar />
    </main>
  );
}

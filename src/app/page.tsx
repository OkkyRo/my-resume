const skills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Git"];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 px-4 py-8 text-gray-900 transition-colors dark:bg-gray-950 dark:text-gray-100 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-white px-6 py-10 shadow-xl transition-colors dark:border-gray-800 dark:bg-gray-900 sm:px-10 sm:py-14 lg:px-16">
        {/* Header */}
        <header className="border-b border-gray-200 dark:border-gray-800 pb-8">
          <h1 className="text-4xl font-bold tracking-tight">
            Okky Robbyanto
          </h1>

          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Web Developer
          </p>

          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
            <span>0kky0kky2002@gmail.com</span>
            <span>•</span>
            <span>Surabaya, Indonesia</span>
            <span>•</span>
            <a
              href="https://github.com/OkkyRo"
              className="underline hover:text-gray-900"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/okky-robbyanto"
              className="underline hover:text-gray-900"
            >
              LinkedIn
            </a>
          </div>
        </header>

        {/* About */}
        <section className="py-8">
          <h2 className="text-xl font-semibold">About</h2>

          <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
            I'm an Informatics Engineering graduate passionate about Web Development, 
            with hands-on experience building both frontend and backend applications. 
            I work with technologies such as PHP, Laravel, React.js, Next.js, MySQL, and Tailwind CSS 
            to create responsive and user-friendly web experiences. 
            I'm always eager to learn, solve problems, 
            and explore new technologies while building meaningful products with a collaborative team.
          </p>
        </section>

        {/* Experience */}
        <section className="border-t border-gray-200 dark:border-gray-800 py-10">
          <h2 className="text-xl font-semibold">Experience</h2>
          <p className="mt-2 text-sm text-gray-500">
            My professional journey and experience.
          </p>

          <div className="relative mt-8 ml-3 border-l border-gray-200 dark:border-gray-800 pl-8">

            <div className="relative pb-10">
              <div className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-4 border-white bg-gray-900">
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 transition hover:border-gray-300 hover:shadow-sm dark:border-gray-800 dark:bg-gray-800/50 dark:hover:border-gray-700">

                <div className="flex flex-col justify-between gap-2 sm:flex-row">
                  <div>
                    <h3 className="font-semibold text-gray-300">
                      Web Development Intern
                    </h3>

                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                      PT. Surya Inti Artha
                    </p>
                  </div>

                  <span className="text-sm text-gray-500">
                    July 2023 — September 2023
                  </span>
                </div>

                <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
                  Worked as a Frontend & Backend Developer, developing a task
                  management website using PHP, MySQL, HTML, and CSS. Built task
                  management features and created a responsive, user-friendly
                  interface.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {["PHP", "MySQL", "HTML", "CSS"].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 ring-1 ring-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-4 border-white bg-gray-400">
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 transition hover:border-gray-300 hover:shadow-sm dark:border-gray-800 dark:bg-gray-800/50 dark:hover:border-gray-700">

                <div className="flex flex-col justify-between gap-2 sm:flex-row">
                  <div>
                    <h3 className="font-semibold text-gray-300">
                      Net Cafe Operator
                    </h3>

                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                      ALO Esport & Lounge
                    </p>
                  </div>

                  <span className="text-sm text-gray-500">
                    November 2025 — Present
                  </span>
                </div>

                <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
                  Managed daily net cafe operations, assisted customers with
                  computer and technical issues, maintained computers and network
                  equipment, and handled payments and basic troubleshooting.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {["Technical Support", "Networking", "Troubleshooting"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-200"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="border-t border-gray-200 dark:border-gray-800 py-10">
          <h2 className="text-xl font-semibold">Projects</h2>
          <p className="mt-2 text-sm text-gray-500">
            A selection of projects I've worked on.
          </p>

          <div className="mt-8 grid gap-6">
            <article className="group overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 transition hover:border-gray-300 hover:shadow-md">
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src="/img/preview/pt-mss.png"
                  alt="Web Preview of Company Web Profile Project"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-col justify-between gap-2 sm:flex-row">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Company Web Profile
                  </h3>

                  <span className="text-sm text-gray-500">
                    Web Development
                  </span>
                </div>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Maha Sukses Sejahtera
                </p>

                <p className="mt-4 leading-7 text-gray-600">
                  Contributed to the development of a responsive company web
                  profile, focusing on user-friendly interfaces and responsive
                  layouts across desktop and mobile devices.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {["React.js", "Tailwind CSS"].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 ring-1 ring-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href="https://mahasuksessejahtera.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-gray-900 transition group-hover:gap-2"
                >
                  View project
                  <span>→</span>
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* Skills */}
        <section className="border-t border-gray-200 dark:border-gray-800 py-8">
          <h2 className="text-xl font-semibold">Skills</h2>

          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-md bg-gray-100 px-3 py-1.5 text-sm text-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="border-t border-gray-200 dark:border-gray-800 py-8">
          <h2 className="text-xl font-semibold">Education</h2>

          <div className="mt-4">
            <h3 className="font-medium">Widya Kartika University</h3>
            <p className="text-gray-600">Informatics Engineering</p>
            <p className="mt-1 text-sm text-gray-500">2020 — 2024</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 dark:border-gray-800 pt-8 text-sm text-gray-500">
          © 2026 Okky Robbyanto. Built with Next.js.
        </footer>
      </div>
    </main>
  );
}

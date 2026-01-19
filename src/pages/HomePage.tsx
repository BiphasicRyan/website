import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export function HomePage() {
  return (
    <div>
      <header className="text-center">
        <h1 className="m-0">Ryan Duan</h1>

        <h2 className="m-0">Software Engineer</h2>

        <nav
          className="mt-0.5 flex gap-1.5 flex-wrap items-center justify-center"
          aria-label="Profile links"
        >
          <a
            className="inline-flex items-center justify-center text-[28px] leading-none no-underline hover:underline"
            aria-label="GitHub"
            href="https://github.com/ryanduan02"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="inline-flex items-center justify-center text-[28px] leading-none no-underline hover:underline"
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/ryanduan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="inline-flex items-center justify-center text-[28px] leading-none no-underline hover:underline"
            aria-label="Email"
            href="mailto:ryanduan02+website@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>
        </nav>
      </header>

      <div className="flex flex-col gap-8 mt-3.5 mx-auto items-stretch max-w-[760px] max-sm:gap-4">
        <a
          className="inline-block mx-auto"
          href={`${import.meta.env.BASE_URL}img.jpg`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open full-size profile photo"
        >
          <img
            className="w-[300px] h-auto rounded-2xl shrink-0 mx-auto block max-sm:w-full max-sm:max-w-[360px]"
            src={`${import.meta.env.BASE_URL}img.jpg`}
            alt="Photo of Ryan Duan"
          />
        </a>
        <section className="flex-1 text-center max-w-[600px] mx-auto">
          <p>
            I'm a Software Engineer at Amazon in New York, where I build and
            scale customer facing systems. Most recently, I worked on the
            backend of an AI-powered shopping feature delivered through the
            Amazon mobile app.
          </p>
          <p>
            As an engineer, I have extensive experience with Java, Python,
            TypeScript, and C. I've also spent countless hours building and
            operating services in AWS.
          </p>
          <p>
            I love playing games. Recently, I've taken Clash Royale more
            seriously, reaching ultimate champion rank multiple seasons in a
            row. In Clash of Clans I reached top 10k in May 2025 in the builder
            base. I played chess competitively in high school, but not so much
            anymore. I still play online from time to time. You can find me{" "}
            <a
              href="https://www.chess.com/member/ryanxd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <u>here</u>
            </a>
            .
          </p>
        </section>
      </div>

      <div
        className="h-px max-w-[520px] my-8 mx-auto bg-gradient-to-r from-transparent via-text to-transparent"
        aria-hidden="true"
      />

      <aside className="mt-6 max-w-[600px] mx-auto" aria-label="Resume">
        <h3 className="mb-3 text-center">Experience</h3>

        <div className="mb-4 pb-2 border-b border-border">
          <div className="flex justify-between gap-3 items-baseline max-sm:flex-wrap max-sm:justify-start">
            <div className="font-semibold">Software Engineer</div>
            <div className="text-muted text-[0.9rem]">New York, NY</div>
            <div className="text-muted text-[0.9rem]">
              August 2025 - Current
            </div>
          </div>
          <p className="text-center">
            I built and maintained backend components powering Amazon's
            AI-driven{" "}
            <a
              href="https://techcrunch.com/2025/10/23/amazons-new-ai-shopping-tool-tells-you-why-you-should-buy-a-recommended-product/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Help Me Decide
            </a>{" "}
            feature across core shopping flows, including the development of
            novel product capabilities. I decomposed backend services to improve
            extensibility and optimized the cache by adjusting cache admission
            policy to only retain entries with demonstrated use potential.
          </p>
        </div>

        <div className="mb-4 pb-2 border-b border-border">
          <div className="flex justify-between gap-3 items-baseline max-sm:flex-wrap max-sm:justify-start">
            <div className="font-semibold">Software Engineer Intern</div>
            <div className="text-muted text-[0.9rem]">New York, NY</div>
            <div className="text-muted text-[0.9rem]">
              May 2024 - August 2024
            </div>
          </div>
          <p className="text-center">
            Designed and built a document migration engine to automatically
            convert OpenXML contract templates into JavaScript-compatible
            formats, dramatically reducing manual migration work and
            accelerating adoption of Amazon's internal system.
          </p>
        </div>

        <div className="mb-4 pb-2 border-b border-border">
          <div className="flex justify-between gap-3 items-baseline max-sm:flex-wrap max-sm:justify-start">
            <div className="font-semibold">Software Engineer Intern</div>
            <div className="text-muted text-[0.9rem]">Pittsburgh, PA</div>
            <div className="text-muted text-[0.9rem]">
              June 2023 - August 2023
            </div>
          </div>
          <p className="text-center">
            Interned on the Corporate Risk Technology team to modernize and
            automate a critical capital analysis and reporting tool,
            significantly reducing manual work while improving efficiency,
            accuracy, and regulatory readiness
          </p>
        </div>

        <div className="mb-4 pb-2 border-b border-border">
          <div className="flex justify-between gap-3 items-baseline max-sm:flex-wrap max-sm:justify-start">
            <div className="font-semibold">Teaching Assistant</div>
            <div className="text-muted text-[0.9rem]">Pittsburgh, PA</div>
            <div className="text-muted text-[0.9rem]">
              August 2022 - May 2025
            </div>
          </div>
          <p className="text-center">
            Led recitations, office hours and graded assignments and exams for
            50 to 150 students across core Math and Computer Science courses:
            calculus, linear algebra, probability. Helped grade, lead
            recitations, and develop course materials, including a Python-based
            library for teaching computational probability
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-border text-center">
          <a
            className="text-link no-underline inline-block hover:underline"
            href="/Ryan_Duan_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className="m-0 mb-2 text-[0.95rem] tracking-wide">
              <u>Full resume</u>
            </h4>
          </a>
        </div>
      </aside>
    </div>
  );
}

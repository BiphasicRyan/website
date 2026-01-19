import { projects } from "../projects";
import { FaGithub } from "react-icons/fa";

export function ProjectsPage() {
  return (
    <section className="text-center" aria-label="Projects">
      <h3 className="mb-6">Some thoughts ...</h3>

      <div className="flex flex-col gap-3.5 max-w-[760px] mx-auto">
        {projects.map((p) => (
          <article
            className="text-left border border-border bg-[color-mix(in_srgb,var(--bg)_88%,var(--text)_12%)] rounded-xl px-3.5 py-3"
            key={`${p.title}-${p.date}`}
          >
            <header className="flex items-baseline justify-between gap-3.5 max-sm:flex-col max-sm:items-start max-sm:gap-1.5">
              <h4 className="m-0">{p.title}</h4>
              <time
                className="whitespace-nowrap text-muted text-[0.95rem]"
                dateTime={p.date}
              >
                {p.date}
              </time>
            </header>

            <a
              className="inline-flex items-center gap-2 mt-2 text-link no-underline break-words hover:underline"
              href={p.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub aria-hidden="true" focusable="false" />
              {"Github"}
            </a>

            <p className="mt-2.5 mb-0 text-muted leading-relaxed">
              {p.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

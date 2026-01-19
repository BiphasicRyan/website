import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
// types are imported where needed; no local Writing type usage here
import { posts } from "../writing/posts/index";

export function WritingPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract slug from /writing/slug pathname
  const activeSlug = React.useMemo(() => {
    const pathname = location.pathname;
    if (pathname === "/writing" || pathname === "/writing/") return null;

    // Extract slug from /writing/slug
    const match = pathname.match(/^\/writing\/(.+)$/);
    return match ? match[1] : null;
  }, [location.pathname]);

  const activePost = React.useMemo(
    () => posts.find((p) => p.slug === activeSlug) ?? null,
    [posts, activeSlug]
  );

  const handlePostClick = React.useCallback(
    (slug: string) => {
      navigate(`/writing/${slug}`);
    },
    [navigate]
  );

  const handleBackClick = React.useCallback(() => {
    navigate("/writing");
  }, [navigate]);

  if (activePost) {
    return (
      <section className="text-center" aria-label="Writing post">
        <button
          type="button"
          className="px-3 py-2 rounded-lg border border-border bg-transparent text-text cursor-pointer font-[inherit] hover:border-text"
          onClick={handleBackClick}
        >
          ← Back to writing
        </button>

        <header className="text-center mt-4">
          <h3 className="m-0">{activePost.title}</h3>
          {activePost.date ? (
            <div className="text-muted text-[0.9rem]">{activePost.date}</div>
          ) : null}
        </header>

        <article className="text-left mt-4">{activePost.content}</article>
      </section>
    );
  }

  return (
    <section className="text-center" aria-label="Writing posts">
      <h3 className="mb-6">Some thoughts ...</h3>

      <div className="flex flex-col gap-3.5 max-w-[760px] mx-auto">
        {posts.map((post) => (
          <button
            key={post.slug}
            type="button"
            className="text-left border border-border bg-[color-mix(in_srgb,var(--bg)_88%,var(--text)_12%)] rounded-xl px-3.5 py-3 cursor-pointer font-[inherit] text-text"
            onClick={() => handlePostClick(post.slug)}
            aria-label={`Open post: ${post.title}`}
          >
            <div className="flex items-baseline justify-start flex-wrap">
              <span className="font-bold">{post.title}</span>
              <span>&nbsp;|&nbsp;</span>
              {post.date ? (
                <span className="text-muted text-[0.9rem]">{post.date}</span>
              ) : null}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

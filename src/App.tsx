import "./App.css";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Tabs } from "./components/Tabs";
import { HomePage } from "./pages/HomePage";
import { WritingPage } from "./pages/WritingPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { FavoriteImagesPage } from "./pages/FavoriteImagesPage";
import type { TabConfig, TabId } from "./types/tabs";

type ThemeId = "dark" | "light" | "high-contrast" | "sepia" | "monochrome";

export default function App() {
  const [theme, setTheme] = React.useState<ThemeId>("dark");
  const themeMenuRef = React.useRef<HTMLDetailsElement | null>(null);

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  React.useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      const menu = themeMenuRef.current;
      if (!menu || !menu.open) return;
      const target = e.target;
      if (target instanceof Node && menu.contains(target)) return;
      menu.open = false;
    }

    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  const tabs: TabConfig[] = React.useMemo(
    () => [
      { id: "home", label: "Home", render: () => <HomePage /> },
      { id: "writing", label: "Writing", render: () => <WritingPage /> },
      { id: "projects", label: "Projects", render: () => <ProjectsPage /> },
      {
        id: "favorite-images",
        label: "Favorite Images",
        render: () => <FavoriteImagesPage />,
      },
    ],
    []
  );

  const location = useLocation();
  const navigate = useNavigate();

  const activeId: TabId = React.useMemo(() => {
    const pathname = location.pathname || "/";

    // Treat any nested writing path as "writing" (e.g., /writing/foo).
    if (pathname === "/writing" || pathname.startsWith("/writing/"))
      return "writing";

    // Treat any nested projects path as "projects".
    if (pathname === "/projects" || pathname.startsWith("/projects/"))
      return "projects";

    // Treat any nested favorite-images path as "favorite-images".
    if (
      pathname === "/favorite-images" ||
      pathname.startsWith("/favorite-images/")
    )
      return "favorite-images";

    // Default to home for / and any unknown paths (Phase 3 will add a real 404 route).
    return "home";
  }, [location.pathname]);

  const onTabChange = React.useCallback(
    (id: TabId) => {
      const pathMap: Record<TabId, string> = {
        home: "/",
        writing: "/writing",
        projects: "/projects",
        "favorite-images": "/favorite-images",
      };
      navigate(pathMap[id]);
    },
    [navigate]
  );

  return (
    <div className="max-w-[960px] mx-auto px-6 pt-2 pb-0 text-left max-sm:px-4">
      <Tabs
        tabs={tabs}
        activeId={activeId}
        onChange={onTabChange}
        ariaLabel="Site sections"
        trailing={
          <div className="inline-flex items-center" aria-label="Theme selector">
            <details className="relative" ref={themeMenuRef}>
              <summary className="list-none px-2.5 py-1.5 rounded-lg border border-border bg-transparent text-text cursor-pointer select-none [&::-webkit-details-marker]:hidden open:border-text">
                Theme
              </summary>

              <div
                className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 min-w-[140px] p-1.5 rounded-[10px] border border-border bg-bg z-[1000]"
                role="menu"
                aria-label="Theme options"
              >
                <button
                  type="button"
                  role="menuitemradio"
                  aria-checked={theme === "light"}
                  className={`w-full text-center px-2.5 py-2 rounded-lg border border-transparent bg-transparent text-text cursor-pointer font-[inherit] hover:border-border ${
                    theme === "light" ? "border-text" : ""
                  }`}
                  onClick={() => {
                    setTheme("light");
                    if (themeMenuRef.current) themeMenuRef.current.open = false;
                  }}
                >
                  Light
                </button>
                <button
                  type="button"
                  role="menuitemradio"
                  aria-checked={theme === "dark"}
                  className={`w-full text-center px-2.5 py-2 rounded-lg border border-transparent bg-transparent text-text cursor-pointer font-[inherit] hover:border-border ${
                    theme === "dark" ? "border-text" : ""
                  }`}
                  onClick={() => {
                    setTheme("dark");
                    if (themeMenuRef.current) themeMenuRef.current.open = false;
                  }}
                >
                  Dark
                </button>
                <button
                  type="button"
                  role="menuitemradio"
                  aria-checked={theme === "high-contrast"}
                  className={`w-full text-center px-2.5 py-2 rounded-lg border border-transparent bg-transparent text-text cursor-pointer font-[inherit] hover:border-border ${
                    theme === "high-contrast" ? "border-text" : ""
                  }`}
                  onClick={() => {
                    setTheme("high-contrast");
                    if (themeMenuRef.current) themeMenuRef.current.open = false;
                  }}
                >
                  High Contrast
                </button>
                <button
                  type="button"
                  role="menuitemradio"
                  aria-checked={theme === "sepia"}
                  className={`w-full text-center px-2.5 py-2 rounded-lg border border-transparent bg-transparent text-text cursor-pointer font-[inherit] hover:border-border ${
                    theme === "sepia" ? "border-text" : ""
                  }`}
                  onClick={() => {
                    setTheme("sepia");
                    if (themeMenuRef.current) themeMenuRef.current.open = false;
                  }}
                >
                  Sepia
                </button>
                <button
                  type="button"
                  role="menuitemradio"
                  aria-checked={theme === "monochrome"}
                  className={`w-full text-center px-2.5 py-2 rounded-lg border border-transparent bg-transparent text-text cursor-pointer font-[inherit] hover:border-border ${
                    theme === "monochrome" ? "border-text" : ""
                  }`}
                  onClick={() => {
                    setTheme("monochrome");
                    if (themeMenuRef.current) themeMenuRef.current.open = false;
                  }}
                >
                  Monochrome
                </button>
              </div>
            </details>
          </div>
        }
      />
    </div>
  );
}

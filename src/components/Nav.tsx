import { Link, useLocation } from "@tanstack/react-router";
import { motion } from "framer-motion";

const links = [
  { to: "/", label: "Beyond the Resume" },
  { to: "/work", label: "Building Solutions" },
  { to: "/team", label: "What I Bring" },
] as const;

export function Nav() {
  const { pathname } = useLocation();
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-6 pt-5">
        <nav className="glass rounded-full px-3 py-2 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 px-3 py-1.5">
            <span className="size-2.5 rounded-full bg-[var(--emerald)] shadow-[0_0_18px_var(--emerald)]" />
            <span className="text-sm tracking-wide font-medium">Gustavo Pasqua</span>
          </Link>
          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <li key={l.to} className="relative">
                  <Link
                    to={l.to}
                    className={`relative px-4 py-1.5 text-sm rounded-full transition-colors ${
                      active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-secondary"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{l.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <a
            href="mailto:gustavo.pasqua@example.com"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-1.5 text-sm font-medium hover:opacity-90 transition"
          >
            Get in touch
          </a>
        </nav>
        <MobileNav pathname={pathname} />
      </div>
    </header>
  );
}

function MobileNav({ pathname }: { pathname: string }) {
  return (
    <div className="md:hidden mt-3 flex justify-center">
      <ul className="glass rounded-full px-2 py-1.5 flex gap-1">
        {links.map((l) => {
          const active = pathname === l.to;
          return (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`px-3 py-1 text-xs rounded-full transition-colors ${
                  active ? "bg-secondary text-foreground" : "text-muted-foreground"
                }`}
              >
                {l.label.split(" ")[0]}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Gustavo Pasqua — Crafted for N-SIDE.</p>
        <p className="font-display italic">Leuven, Belgium</p>
      </div>
    </footer>
  );
}

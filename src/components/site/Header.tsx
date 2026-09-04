import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { nav, settings, contact } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import logoAsset from "@/assets/canyun-logo.png.asset.json";


export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const light = !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-border bg-surface/90 backdrop-blur-md"
          : "border-b border-transparent",
        light && "text-primary-foreground",
      )}
    >
      <div className="container-page grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 md:h-20">
        <a href="#home" className="flex min-w-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand text-primary-foreground font-display text-base font-bold">
            灿
          </span>
          <span className="min-w-0">
            <span className={cn("block truncate text-base font-bold", light ? "text-primary-foreground" : "text-ink")}>{settings.brand}</span>
            <span className={cn("hidden truncate text-xs sm:block", light ? "text-primary-foreground/70" : "text-muted-foreground")}>
              {settings.badge}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="主导航">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-lg px-3.5 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                light
                  ? "text-primary-foreground/85 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  : "text-ink-soft hover:bg-brand-soft hover:text-brand",
              )}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-3 inline-flex h-11 items-center rounded-xl bg-brand px-5 text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5"
          >
            免费咨询
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "关闭菜单" : "打开菜单"}
          className={cn(
            "grid size-11 shrink-0 place-items-center rounded-xl border lg:hidden",
            light
              ? "border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground"
              : "border-border bg-surface text-ink",
          )}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-surface lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-3" aria-label="移动端导航">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center rounded-xl px-3 text-base font-medium text-ink active:bg-brand-soft"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="mt-2 flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border text-base font-semibold text-ink"
            >
              <Phone className="size-4" /> {contact.phone}
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 mb-2 flex min-h-12 items-center justify-center rounded-xl bg-brand text-base font-semibold text-primary-foreground"
            >
              免费咨询云架构师
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

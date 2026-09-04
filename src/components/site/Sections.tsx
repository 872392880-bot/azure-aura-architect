import { ArrowRight, Check, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import logoAsset from "@/assets/canyun-logo.png.asset.json";
import { iconMap } from "./icons";
import { Reveal } from "./Reveal";
import { advantages, capabilities, contact, news, settings, stats } from "@/lib/site-data";


function SectionHead({
  kicker,
  title,
  desc,
  center = true,
}: {
  kicker: string;
  title: string;
  desc?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="inline-flex items-center rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold tracking-wide text-brand">
        {kicker}
      </span>
      <h2 className="mt-4 text-[1.75rem] font-bold text-ink sm:text-4xl">{title}</h2>
      {desc ? <p className="mt-3 text-base leading-relaxed text-ink-soft">{desc}</p> : null}
    </Reveal>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-background pt-24 md:pt-28">
      <div aria-hidden="true" className="absolute inset-0 grid-bg" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(70%_55%_at_85%_0%,oklch(0.7_0.19_50/22%),transparent_65%),radial-gradient(50%_40%_at_10%_100%,oklch(0.78_0.16_80/14%),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent"
      />
      <div className="container-page relative pb-16 pt-10 md:pb-28 md:pt-16">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand-soft px-3.5 py-1.5 text-xs font-medium text-brand sm:text-sm">
            <span className="size-1.5 rounded-full bg-brand" />
            {settings.badge}
          </span>
          <p className="mt-6 text-sm font-medium tracking-wide text-ink-soft sm:text-base">
            {settings.heroKicker}
          </p>
          <h1 className="mt-3 font-display text-[2.5rem] font-bold leading-[1.15] text-ink sm:text-6xl">
            {settings.heroTitle}
          </h1>
          <p className="mt-5 max-w-xl text-[0.975rem] leading-8 text-ink-soft sm:text-lg sm:leading-9">
            {settings.heroSubtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#contact"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-[image:var(--color-brand-gradient)] px-6 text-base font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
            >
              免费咨询云架构师 <ArrowRight className="size-4" />
            </a>
            <a
              href="#services"
              className="inline-flex min-h-13 items-center justify-center rounded-xl border border-border bg-surface px-6 text-base font-semibold text-ink shadow-card transition-colors hover:border-brand/40 hover:text-brand"
            >
              浏览云产品
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
            {settings.heroChips.map((chip) => (
              <li
                key={chip}
                className="inline-flex items-center gap-1.5 text-sm text-ink-soft"
              >
                <Check className="size-4 text-brand" /> {chip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Stats() {
  return (
    <section className="relative z-10 -mt-6 md:-mt-10">
      <div className="container-page">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-card lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-surface px-4 py-6 text-center sm:px-6 sm:py-8">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-xl font-bold text-brand sm:text-3xl">{s.value}</dd>
              <dd className="mt-1.5 text-sm text-ink-soft">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function Capabilities() {
  return (
    <section id="services" className="section-y">
      <div className="container-page">
        <SectionHead
          kicker="核心能力"
          title="企业上云 | 一站解决"
          desc="从架构规划到运维托管，覆盖企业上云全生命周期的专业服务。"
        />
        <div className="mt-10 grid gap-5 sm:mt-14 lg:grid-cols-2">
          {capabilities.map((c, i) => {
            const Icon = iconMap[c.icon]!;
            return (
              <Reveal
                as="article"
                key={c.title}
                delay={i * 80}
                className="group h-full rounded-2xl border border-border bg-surface p-6 shadow-card transition-shadow md:p-8 lg:hover:shadow-lift"
              >
                <span className="grid size-12 place-items-center rounded-xl bg-brand-soft text-brand">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink sm:text-xl">{c.title}</h3>
                <p className="mt-2.5 text-[0.95rem] leading-7 text-ink-soft">{c.desc}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-lg bg-surface-soft px-2.5 py-1.5 text-xs font-medium text-ink-soft"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Advantages() {
  return (
    <section id="advantages" className="section-y bg-surface-soft grid-bg">
      <div className="container-page">
        <SectionHead
          kicker="核心优势"
          title={`为什么选择${settings.company}`}
          desc="阿里云合作伙伴，专业的云计算服务提供商。"
        />
        <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((a, i) => {
            const Icon = iconMap[a.icon]!;
            return (
              <Reveal
                key={a.title}
                delay={i * 70}
                className="h-full rounded-2xl border border-border bg-surface p-6 shadow-card"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-brand-soft text-brand">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-bold text-ink sm:text-lg">{a.title}</h3>
                <p className="mt-2 text-[0.925rem] leading-7 text-ink-soft">{a.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function News() {
  return (
    <section id="news" className="section-y">
      <div className="container-page">
        <SectionHead
          kicker="企业动态"
          title="一线交付实践与行业观察"
          desc="看看我们如何帮助企业在云上跑得更快。"
        />
        <div className="mt-10 grid gap-6 sm:mt-14 lg:grid-cols-2">
          {news.map((n, i) => (
            <Reveal
              as="article"
              key={n.title}
              delay={i * 90}
              className="group overflow-hidden rounded-2xl border border-border bg-surface shadow-card"
            >
              <img
                src={n.cover}
                alt={n.title}
                loading="lazy"
                width={1024}
                height={640}
                className="aspect-[16/10] w-full object-cover transition-transform duration-500 lg:group-hover:scale-105"
              />
              <div className="p-6 md:p-7">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                  <span className="rounded-md bg-brand-soft px-2 py-1 font-semibold text-brand">
                    {n.category}
                  </span>
                  <time className="font-display text-muted-foreground">{n.date}</time>
                </div>
                <h3 className="mt-3.5 text-lg font-bold leading-8 text-ink sm:text-xl">{n.title}</h3>
                <p className="mt-2.5 text-[0.95rem] leading-7 text-ink-soft">{n.excerpt}</p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-brand"
                >
                  查看完整案例 <ArrowRight className="size-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [sending, setSending] = useState(false);
  const [qrOk, setQrOk] = useState(true);

  const fields = [
    { id: "name", label: "姓名", required: true, type: "text", ph: "您的称呼" },
    { id: "phone", label: "联系方式", required: true, type: "tel", ph: "手机号或微信" },
    { id: "company", label: "公司名称", required: false, type: "text", ph: "选填" },
  ];

  return (
    <section id="contact" className="section-y bg-surface-soft">
      <div className="container-page">
        <SectionHead kicker="联系我们" title={contact.title} desc={contact.desc} center={false} />

        <div className="mt-10 grid gap-6 sm:mt-14 lg:grid-cols-[1fr_1.1fr] lg:gap-8">
          <div className="flex flex-col gap-5">
            <ul className="grid gap-4 rounded-2xl border border-border bg-surface p-6 shadow-card">
              {[
                { Icon: MapPin, label: "公司地址", value: contact.address, href: undefined },
                {
                  Icon: Phone,
                  label: "咨询电话",
                  value: contact.phone,
                  href: `tel:${contact.phone.replace(/\s/g, "")}`,
                },
                {
                  Icon: Mail,
                  label: "电子邮箱",
                  value: contact.email,
                  href: `mailto:${contact.email}`,
                },
              ].map(({ Icon, label, value, href }) => (
                <li key={label} className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-3.5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                    <Icon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-muted-foreground">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="block break-words text-[0.95rem] font-semibold leading-7 text-ink"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="break-words text-[0.95rem] leading-7 text-ink">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 rounded-2xl border border-border bg-surface p-6 shadow-card">
              {qrOk ? (
                <img
                  src={contact.qr}
                  alt="微信二维码"
                  loading="lazy"
                  width={128}
                  height={128}
                  onError={() => setQrOk(false)}
                  className="size-24 shrink-0 rounded-lg border border-border object-contain sm:size-28"
                />
              ) : (
                <span className="grid size-24 shrink-0 place-items-center rounded-lg border border-dashed border-border bg-surface-soft text-center text-xs leading-5 text-muted-foreground sm:size-28">
                  微信
                  <br />
                  二维码
                </span>
              )}
              <div className="min-w-0">
                <p className="text-base font-bold text-ink">微信扫码咨询</p>
                <p className="mt-1.5 text-[0.9rem] leading-7 text-ink-soft">{contact.qrNote}</p>
              </div>
            </div>
          </div>

          <form
            className="rounded-2xl border border-border bg-surface p-6 shadow-card md:p-8"
            onSubmit={(e) => {
              e.preventDefault();
              setSending(true);
              setTimeout(() => {
                setSending(false);
                (e.target as HTMLFormElement).reset();
                toast.success("已收到您的需求，我们会尽快联系您");
              }, 600);
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {fields.map((f) => (
                <div key={f.id} className={f.id === "company" ? "sm:col-span-2" : ""}>
                  <label htmlFor={f.id} className="mb-2 block text-sm font-medium text-ink">
                    {f.label}
                    {f.required ? <span className="ml-0.5 text-destructive">*</span> : null}
                  </label>
                  <input
                    id={f.id}
                    name={f.id}
                    type={f.type}
                    required={f.required}
                    placeholder={f.ph}
                    className="h-12 w-full rounded-xl border border-input bg-surface px-4 text-base text-ink outline-none transition-colors placeholder:text-muted-foreground focus:border-brand focus:ring-2 focus:ring-ring/30"
                  />
                </div>
              ))}
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">
                  需求描述
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="简单描述业务现状、系统规模与上云目标"
                  className="w-full rounded-xl border border-input bg-surface px-4 py-3 text-base leading-7 text-ink outline-none transition-colors placeholder:text-muted-foreground focus:border-brand focus:ring-2 focus:ring-ring/30"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={sending}
              className="mt-6 inline-flex min-h-13 w-full items-center justify-center rounded-xl bg-[image:var(--color-brand-gradient)] px-6 text-base font-semibold text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              {sending ? "提交中…" : "立即预约架构诊断"}
            </button>
            <p className="mt-3 text-center text-xs leading-6 text-muted-foreground">
              您的信息仅用于方案沟通，我们不会发送任何骚扰信息。
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-deep pb-24 pt-14 text-primary-foreground/70 md:pb-14">
      <div className="container-page grid gap-10 md:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex items-center justify-center rounded-xl bg-white px-2 py-1.5">
              <img src={logoAsset.url} alt="灿云 Logo" className="h-9 w-auto" />
            </span>
            <span className="text-base font-bold text-primary-foreground">{settings.brand}</span>
          </div>

          <p className="mt-4 max-w-sm text-sm leading-7">
            {settings.company}，阿里云官方授权合作伙伴，提供一站式企业上云、等保合规、AI
            算力与云上运维托管服务。
          </p>
        </div>
        <nav aria-label="页脚导航">
          <h3 className="text-sm font-bold text-primary-foreground">快捷链接</h3>
          <ul className="mt-4 grid gap-1">
            {[
              { label: "核心能力", href: "#services" },
              { label: "核心优势", href: "#advantages" },
              { label: "企业动态", href: "#news" },
              { label: "联系我们", href: "#contact" },
            ].map((l) => (
              <li key={l.href}>
                <a href={l.href} className="flex min-h-10 items-center text-sm hover:text-accent">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h3 className="text-sm font-bold text-primary-foreground">联系信息</h3>
          <ul className="mt-4 grid gap-2 text-sm leading-7">
            <li>电话：{contact.phone}</li>
            <li className="break-words">邮箱：{contact.email}</li>
            <li className="break-words">地址：{contact.address}</li>
          </ul>
        </div>
      </div>
      <div className="container-page mt-10 border-t border-primary-foreground/15 pt-6 text-center text-xs leading-6">
        © {new Date().getFullYear()} {settings.company} · {settings.icp}
      </div>
    </footer>
  );
}

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/95 backdrop-blur-md pb-[env(safe-area-inset-bottom)] md:hidden">
      <div className="container-page grid grid-cols-2 gap-3 py-2.5">
        <a
          href={`tel:${contact.phone.replace(/\s/g, "")}`}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-border text-sm font-semibold text-ink"
        >
          <Phone className="size-4" /> 电话咨询
        </a>
        <a
          href="#contact"
          className="inline-flex min-h-11 items-center justify-center rounded-xl bg-brand text-sm font-semibold text-primary-foreground"
        >
          免费方案诊断
        </a>
      </div>
    </div>
  );
}

import { ArrowRight, ArrowUpRight, Check, Mail, MapPin, Phone, Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import logoAsset from "@/assets/canyun-logo.png.asset.json";
import { iconMap } from "./icons";
import { Reveal } from "./Reveal";
import {
  advantages,
  capabilities,
  contact,
  faqs,
  industries,
  news,
  process,
  productTicker,
  settings,
  stats,
} from "@/lib/site-data";

function SectionHead({
  index,
  kicker,
  title,
  desc,
  align = "left",
}: {
  index: string;
  kicker: string;
  title: string;
  desc?: string;
  align?: "left" | "between";
}) {
  return (
    <Reveal
      className={
        align === "between"
          ? "grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:items-end"
          : "max-w-2xl"
      }
    >
      <div>
        <div className="flex items-center gap-3">
          <span className="font-display text-sm font-bold text-brand">{index}</span>
          <span className="h-px w-8 bg-brand/40" />
          <span className="text-xs font-semibold tracking-[0.2em] text-ink-soft uppercase">
            {kicker}
          </span>
        </div>
        <h2 className="mt-4 text-[1.9rem] font-bold leading-[1.2] text-ink sm:text-[2.6rem]">
          {title}
        </h2>
      </div>
      {desc ? (
        <p className="text-base leading-8 text-ink-soft lg:pb-2 lg:text-right">{desc}</p>
      ) : null}
    </Reveal>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-background pt-24 md:pt-28">
      <div aria-hidden="true" className="absolute inset-0 grid-bg opacity-70" />
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-40 size-[38rem] rounded-full bg-[radial-gradient(circle,oklch(0.7_0.19_50/22%),transparent_65%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -left-32 bottom-0 size-[26rem] rounded-full bg-[radial-gradient(circle,oklch(0.78_0.16_80/18%),transparent_68%)]"
      />

      <div className="container-page relative pb-10 pt-8 md:pb-16 md:pt-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-14">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand-soft px-3.5 py-1.5 text-xs font-medium text-brand sm:text-sm">
              <span className="size-1.5 rounded-full bg-brand" />
              {settings.badge}
            </span>

            <h1 className="mt-6 font-display text-[2.75rem] font-bold leading-[1.08] text-ink sm:text-[4.25rem] lg:text-[5rem]">
              上云首选
              <span className="relative ml-1 inline-block">
                <span className="bg-[image:var(--color-brand-gradient)] bg-clip-text text-transparent">
                  灿云
                </span>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 -bottom-1 h-2 rounded-full bg-[image:var(--color-brand-gradient)] opacity-25"
                />
              </span>
            </h1>
            <p className="mt-4 text-sm font-medium tracking-[0.18em] text-ink-soft uppercase sm:text-base">
              {settings.heroKicker}
            </p>

            <p className="mt-6 max-w-xl border-l-2 border-brand/30 pl-5 text-[0.975rem] leading-8 text-ink-soft sm:text-lg sm:leading-9">
              {settings.heroSubtitle}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#contact"
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-[image:var(--color-brand-gradient)] px-6 text-base font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
              >
                免费咨询云架构师
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
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
                <li key={chip} className="inline-flex items-center gap-1.5 text-sm text-ink-soft">
                  <Check className="size-4 text-brand" /> {chip}
                </li>
              ))}
            </ul>
          </div>

          {/* 右侧信息卡组：桌面显性，移动端简化 */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <Reveal className="rounded-3xl border border-border bg-surface p-6 shadow-lift">
              <p className="text-xs font-semibold tracking-[0.18em] text-ink-soft uppercase">
                Cloud Discount
              </p>
              <p className="mt-3 font-display text-5xl font-bold text-ink">
                3<span className="text-brand">折</span>
              </p>
              <p className="mt-2 text-sm leading-7 text-ink-soft">
                渠道专属价，云产品最低可至 3 折，续费同价不涨。
              </p>
              <div className="mt-5 h-px w-full bg-border" />
              <div className="mt-5 grid grid-cols-2 gap-4">
                <div>
                  <p className="font-display text-2xl font-bold text-ink">15′</p>
                  <p className="mt-1 text-xs text-ink-soft">故障响应</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-ink">500+</p>
                  <p className="mt-1 text-xs text-ink-soft">企业客户</p>
                </div>
              </div>
            </Reveal>

            <Reveal
              delay={120}
              className="rounded-3xl bg-brand-deep p-6 text-primary-foreground/75 shadow-lift"
            >
              <p className="text-xs font-semibold tracking-[0.18em] uppercase">Coverage</p>
              <p className="mt-3 text-base font-bold text-primary-foreground">覆盖行业</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {industries.map((i) => (
                  <li
                    key={i}
                    className="rounded-lg bg-primary-foreground/10 px-2.5 py-1.5 text-xs font-medium text-primary-foreground/85"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>

      <Ticker />
    </section>
  );
}

function Ticker() {
  const items = [...productTicker, ...productTicker];
  return (
    <div className="relative overflow-hidden border-y border-border bg-surface/70 py-3.5">
      <div className="marquee flex w-max items-center gap-8 whitespace-nowrap">
        {items.map((p, i) => (
          <span key={`${p}-${i}`} className="flex items-center gap-8 text-sm text-ink-soft">
            {p}
            <span aria-hidden="true" className="size-1 rounded-full bg-brand/50" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function Stats() {
  return (
    <section className="section-y pb-0 md:pb-0">
      <div className="container-page">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-9 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 70} className="border-t-2 border-brand/25 pt-5">
              <dd className="font-display text-3xl font-bold text-ink sm:text-5xl">
                {"prefix" in s && s.prefix ? (
                  <span className="mr-1 text-base font-semibold text-ink-soft sm:text-lg">
                    {s.prefix}
                  </span>
                ) : null}
                {s.value}
                {"suffix" in s && s.suffix ? (
                  <span className="text-brand">{s.suffix}</span>
                ) : null}
              </dd>
              <dt className="mt-2 text-sm leading-6 text-ink-soft">{s.label}</dt>
            </Reveal>
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
          index="01"
          kicker="Capabilities"
          title="企业上云，一站解决"
          desc="从架构规划到运维托管，覆盖企业上云全生命周期的专业服务。"
          align="between"
        />

        <div className="mt-10 grid gap-4 sm:mt-14 lg:grid-cols-3">
          {capabilities.map((c, i) => {
            const Icon = iconMap[c.icon]!;
            const featured = c.feature;
            return (
              <Reveal
                as="article"
                key={c.title}
                delay={i * 70}
                className={[
                  "group relative flex h-full flex-col overflow-hidden rounded-3xl border p-6 transition-shadow md:p-8",
                  featured
                    ? "border-transparent bg-brand-deep text-primary-foreground/75 shadow-lift lg:col-span-2 lg:row-span-1"
                    : "border-border bg-surface shadow-card lg:hover:shadow-lift",
                ].join(" ")}
              >
                {featured ? (
                  <div
                    aria-hidden="true"
                    className="absolute -right-16 -top-16 size-56 rounded-full bg-[radial-gradient(circle,oklch(0.7_0.19_50/40%),transparent_65%)]"
                  />
                ) : null}
                <div className="relative flex items-start justify-between gap-4">
                  <span
                    className={[
                      "grid size-12 shrink-0 place-items-center rounded-2xl",
                      featured
                        ? "bg-primary-foreground/12 text-primary-foreground"
                        : "bg-brand-soft text-brand",
                    ].join(" ")}
                  >
                    <Icon className="size-6" />
                  </span>
                  <div className="text-right">
                    <p
                      className={[
                        "font-display text-xl font-bold",
                        featured ? "text-primary-foreground" : "text-brand",
                      ].join(" ")}
                    >
                      {c.metric}
                    </p>
                    <p className="text-xs">{c.metricLabel}</p>
                  </div>
                </div>

                <h3
                  className={[
                    "relative mt-6 text-lg font-bold sm:text-xl",
                    featured ? "text-primary-foreground" : "text-ink",
                  ].join(" ")}
                >
                  {c.title}
                </h3>
                <p
                  className={[
                    "relative mt-2.5 text-[0.95rem] leading-7",
                    featured ? "" : "text-ink-soft",
                  ].join(" ")}
                >
                  {c.desc}
                </p>

                <ul className="relative mt-auto flex flex-wrap gap-2 pt-6">
                  {c.tags.map((t) => (
                    <li
                      key={t}
                      className={[
                        "rounded-lg px-2.5 py-1.5 text-xs font-medium",
                        featured
                          ? "bg-primary-foreground/10 text-primary-foreground/85"
                          : "bg-surface-soft text-ink-soft",
                      ].join(" ")}
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

export function Process() {
  return (
    <section id="process" className="section-y bg-surface-soft grid-bg">
      <div className="container-page">
        <SectionHead
          index="02"
          kicker="How it works"
          title="四步走完上云这条路"
          desc="每一步都有明确交付物与验收标准，过程透明、随时可回退。"
          align="between"
        />
        <ol className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <Reveal
              as="li"
              key={p.step}
              delay={i * 80}
              className="group relative bg-surface p-6 md:p-8"
            >
              <span className="font-display text-4xl font-bold text-brand/25 transition-colors group-hover:text-brand/60">
                {p.step}
              </span>
              <h3 className="mt-4 text-base font-bold text-ink sm:text-lg">{p.title}</h3>
              <p className="mt-2 text-[0.925rem] leading-7 text-ink-soft">{p.desc}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Advantages() {
  return (
    <section id="advantages" className="section-y">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <div className="flex items-center gap-3">
              <span className="font-display text-sm font-bold text-brand">03</span>
              <span className="h-px w-8 bg-brand/40" />
              <span className="text-xs font-semibold tracking-[0.2em] text-ink-soft uppercase">
                Why us
              </span>
            </div>
            <h2 className="mt-4 text-[1.9rem] font-bold leading-[1.2] text-ink sm:text-[2.6rem]">
              为什么选择{settings.company.slice(2, 4)}云
            </h2>
            <p className="mt-4 max-w-md text-base leading-8 text-ink-soft">
              阿里云官方授权合作伙伴，十年一线交付经验。我们不卖用不上的资源，只交付真正跑得稳的架构。
            </p>
            <a
              href="#contact"
              className="mt-7 inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-brand"
            >
              预约架构诊断 <ArrowUpRight className="size-4" />
            </a>
          </Reveal>

          <ul className="grid gap-3">
            {advantages.map((a, i) => {
              const Icon = iconMap[a.icon]!;
              return (
                <Reveal
                  as="li"
                  key={a.title}
                  delay={i * 70}
                  className="group grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4 rounded-2xl border border-border bg-surface p-5 shadow-card transition-colors hover:border-brand/35 sm:gap-6 sm:p-7"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand sm:size-12">
                    <Icon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-3">
                      <h3 className="text-base font-bold text-ink sm:text-lg">{a.title}</h3>
                      <span className="font-display text-xs font-bold text-brand/40">
                        0{i + 1}
                      </span>
                    </div>
                    <p className="mt-1.5 text-[0.925rem] leading-7 text-ink-soft">{a.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function News() {
  const [featured, ...rest] = news;
  return (
    <section id="news" className="section-y bg-surface-soft">
      <div className="container-page">
        <SectionHead
          index="04"
          kicker="Insights"
          title="一线交付实践与行业观察"
          desc="看看我们如何帮助企业在云上跑得更快。"
          align="between"
        />

        <div className="mt-10 grid gap-6 sm:mt-14 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]">
          {featured ? (
            <Reveal
              as="article"
              className="group overflow-hidden rounded-3xl border border-border bg-surface shadow-card"
            >
              <div className="relative overflow-hidden">
                <img
                  src={featured.cover}
                  alt={featured.title}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 lg:group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-surface/95 px-3 py-1.5 text-xs font-semibold text-brand backdrop-blur">
                  {featured.category}
                </span>
              </div>
              <div className="p-6 md:p-8">
                <time className="font-display text-xs tracking-wide text-muted-foreground">
                  {featured.date}
                </time>
                <h3 className="mt-3 text-xl font-bold leading-9 text-ink sm:text-2xl">
                  {featured.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-7 text-ink-soft">{featured.excerpt}</p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-brand"
                >
                  查看完整案例 <ArrowRight className="size-4" />
                </a>
              </div>
            </Reveal>
          ) : null}

          <div className="grid gap-6">
            {rest.map((n, i) => (
              <Reveal
                as="article"
                key={n.title}
                delay={i * 90}
                className="group grid gap-4 rounded-3xl border border-border bg-surface p-5 shadow-card sm:grid-cols-[minmax(0,10rem)_minmax(0,1fr)] sm:items-center"
              >
                <img
                  src={n.cover}
                  alt={n.title}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="aspect-[16/10] w-full rounded-2xl object-cover"
                />
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                    <span className="rounded-md bg-brand-soft px-2 py-1 font-semibold text-brand">
                      {n.category}
                    </span>
                    <time className="font-display text-muted-foreground">{n.date}</time>
                  </div>
                  <h3 className="mt-2.5 text-base font-bold leading-7 text-ink sm:text-lg">
                    {n.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-[0.9rem] leading-7 text-ink-soft">
                    {n.excerpt}
                  </p>
                </div>
              </Reveal>
            ))}

            <Reveal
              delay={180}
              className="rounded-3xl bg-brand-deep p-6 text-primary-foreground/75 shadow-lift md:p-8"
            >
              <p className="text-base font-bold text-primary-foreground sm:text-lg">
                想看看同行业的落地方案？
              </p>
              <p className="mt-2 text-[0.925rem] leading-7">
                我们可提供与您业务规模相近的脱敏案例与成本测算。
              </p>
              <a
                href="#contact"
                className="mt-5 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-accent"
              >
                索取案例资料 <ArrowUpRight className="size-4" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="section-y">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="font-display text-sm font-bold text-brand">05</span>
              <span className="h-px w-8 bg-brand/40" />
              <span className="text-xs font-semibold tracking-[0.2em] text-ink-soft uppercase">
                FAQ
              </span>
            </div>
            <h2 className="mt-4 text-[1.9rem] font-bold leading-[1.2] text-ink sm:text-[2.6rem]">
              常见问题
            </h2>
            <p className="mt-4 max-w-sm text-base leading-8 text-ink-soft">
              没找到答案？直接打个电话，架构师会给你直白的判断。
            </p>
          </Reveal>

          <div className="divide-y divide-border border-y border-border">
            {faqs.map((f, i) => (
              <Reveal as="div" key={f.q} delay={i * 60}>
                <details className="group">
                  <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-[0.975rem] font-semibold text-ink sm:text-lg">
                    {f.q}
                    <Plus className="size-5 shrink-0 text-brand transition-transform group-open:rotate-45" />
                  </summary>
                  <p className="pb-5 pr-9 text-[0.925rem] leading-7 text-ink-soft">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
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
        <SectionHead
          index="06"
          kicker="Contact"
          title={contact.title}
          desc={contact.desc}
          align="between"
        />

        <div className="mt-10 grid gap-6 sm:mt-14 lg:grid-cols-[1fr_1.1fr] lg:gap-8">
          <div className="flex flex-col gap-5">
            <ul className="grid gap-4 rounded-3xl bg-brand-deep p-6 text-primary-foreground/75 shadow-lift md:p-8">
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
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary-foreground/10 text-accent">
                    <Icon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-medium">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="block break-words text-[0.95rem] font-semibold leading-7 text-primary-foreground"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="break-words text-[0.95rem] leading-7 text-primary-foreground">
                        {value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 rounded-3xl border border-border bg-surface p-6 shadow-card">
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
            className="rounded-3xl border border-border bg-surface p-6 shadow-card md:p-8"
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
              { label: "服务流程", href: "#process" },
              { label: "核心优势", href: "#advantages" },
              { label: "企业动态", href: "#news" },
              { label: "常见问题", href: "#faq" },
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

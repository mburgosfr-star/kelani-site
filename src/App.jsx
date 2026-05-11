import React from "react";

const LINKS = {
  neoStore: "https://apt.izzysoft.de/fdroid/index/apk/com.kel.powerlifting",
  github: "https://github.com/mburgosfr-star/kelani-sbd-tracker",
  youtube: "https://www.youtube.com/@KelaniFocus",
  email: "mailto:mburgosfr@gmail.com",
};

function LogoMark() {
  return (
    <div className="relative flex h-36 w-36 items-center justify-center rounded-[2rem] border border-white/10 bg-black/40 p-3 shadow-2xl shadow-yellow-500/10 md:h-44 md:w-44">
      <img
        src="/kelani-logo.png"
        alt="Kelani logo"
        className="h-full w-full object-contain"
      />
    </div>
  );
}

function Button({ href, children, variant = "primary" }) {
  const styles =
    variant === "primary"
      ? "bg-yellow-400 text-black hover:bg-yellow-300"
      : "border border-white/20 bg-white/5 text-white hover:bg-white/10";

  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel="noreferrer"
      className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-bold transition ${styles}`}
    >
      {children}
    </a>
  );
}

function Card({ title, children }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/20 backdrop-blur">
      <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
      <div className="text-sm leading-7 text-zinc-300">{children}</div>
    </div>
  );
}

export default function KelaniHomepage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative isolate overflow-hidden">
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full border-[34px] border-white/[0.04]" />
        <div className="absolute -left-44 top-28 h-96 w-96 rounded-full border-[16px] border-red-700/40" />
        <div className="absolute right-[-12rem] top-[-12rem] h-[34rem] w-[34rem] rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute bottom-[-18rem] right-10 h-[34rem] w-[34rem] rounded-full bg-red-700/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.15fr_0.85fr] md:px-10 md:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-zinc-300">
              Developer · Kelani SBD Tracker
            </div>

            <h1 className="max-w-3xl text-6xl font-black italic tracking-tight text-yellow-400 md:text-8xl">
              Kelani
            </h1>

            <p className="mt-6 max-w-2xl text-2xl font-semibold leading-tight text-white md:text-3xl">
              Powerlifting tools and training systems for long-term progress.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 md:text-lg">
              Kelani is an independent project built around strength, structure and practical progress. The main project is Kelani SBD Tracker: a free app for squat, bench press, deadlift, bodyweight, training history and progress insights.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={LINKS.neoStore}>Get Kelani SBD Tracker</Button>
              <Button href={LINKS.github} variant="secondary">View on GitHub</Button>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-end">
            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 shadow-2xl shadow-black/40">
              <LogoMark />
              <div className="mt-8 text-center">
                <div className="text-sm font-black tracking-[0.35em] text-white">KELANI</div>
                <div className="mt-2 text-xs uppercase tracking-[0.25em] text-zinc-500">SBD Tracker</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <div className="grid gap-5 md:grid-cols-3">
          <Card title="Kelani SBD Tracker">
            <p>
              A free powerlifting tracker for squat, bench press, deadlift, bodyweight, history and progress insights. This is the core Kelani product.
            </p>
          </Card>

          <Card title="Training content">
            <p>
              Practical notes around strength training, app progress and long-term consistency. YouTube remains the content channel for Kelani-related updates.
            </p>
          </Card>

          <Card title="Coaching direction">
            <p>
              Later: form reviews, training reviews and coaching-related support for lifters who want more structure and consistency.
            </p>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-center">
            <div>
              <h2 className="text-3xl font-black text-white md:text-4xl">Built for lifters who like structure.</h2>
              <p className="mt-4 leading-8 text-zinc-300">
                Kelani SBD Tracker focuses on the lifts that matter: squat, bench press and deadlift. The goal is simple: make training easier to track, understand and keep improving over time.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-black/40 p-5">
                <div className="text-3xl font-black text-yellow-400">S</div>
                <div className="mt-2 font-bold">Squat</div>
              </div>
              <div className="rounded-2xl bg-black/40 p-5">
                <div className="text-3xl font-black text-yellow-400">B</div>
                <div className="mt-2 font-bold">Bench press</div>
              </div>
              <div className="rounded-2xl bg-black/40 p-5">
                <div className="text-3xl font-black text-yellow-400">D</div>
                <div className="mt-2 font-bold">Deadlift</div>
              </div>
              <div className="rounded-2xl bg-black/40 p-5">
                <div className="text-3xl font-black text-yellow-400">+</div>
                <div className="mt-2 font-bold">Bodyweight & progress</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 px-6 py-10 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between md:px-10">
        <div>© {new Date().getFullYear()} Kelani. Built independently.</div>
        <div className="flex flex-wrap gap-4">
          <a className="hover:text-white" href={LINKS.neoStore} target="_blank" rel="noreferrer">Neo Store</a>
          <a className="hover:text-white" href={LINKS.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="hover:text-white" href={LINKS.youtube} target="_blank" rel="noreferrer">YouTube</a>
          <a className="hover:text-white" href={LINKS.email}>Contact</a>
        </div>
      </footer>
    </main>
  );
}


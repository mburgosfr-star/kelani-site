import React, { useEffect, useState } from "react";

const LINKS = {
  neoStore: "https://apt.izzysoft.de/fdroid/index/apk/com.kel.powerlifting",
  github: "https://github.com/mburgosfr-star/kelani-sbd-tracker",
  issues: "https://github.com/mburgosfr-star/kelani-sbd-tracker/issues/new",
  youtube: "https://www.youtube.com/@KelaniFocus",
  email: "mailto:mburgosfr@gmail.com",
  feedback: "mailto:mburgosfr@gmail.com?subject=Kelani%20SBD%20Tracker%20feedback",
  interest: "mailto:mburgosfr@gmail.com?subject=Kelani%20SBD%20Tracker%20testing%20or%20coaching%20interest",
};

const LANGS = [
  { code: "en", label: "EN" },
  { code: "ca", label: "CA" },
  { code: "nl", label: "NL" },
];

const T = {
    en: {
    logoAlt: "Kelani logo",
    badge: "Developer · Kelani SBD Tracker",
    tagline: "Powerlifting tools and training systems for long-term progress.",
    intro:
      "Kelani is an independent project built around strength, structure and practical progress. The main project is Kelani SBD Tracker: a free app for tracking squat, bench press, deadlift, bodyweight, training history and progress.",
    languages: "Kelani SBD Tracker is available in English, Catalan and Dutch.",
    getApp: "Download Kelani SBD Tracker",
    github: "View on GitHub",
    productTitle: "Kelani SBD Tracker",
    productText:
      "A free powerlifting app for tracking squat, bench press, deadlift, bodyweight, history and progress. It also helps lifters plan meet attempts and prepare competition day with a practical checklist. This is the main product of Kelani.",
    contentTitle: "Training content",
    contentText:
      "Practical notes around strength training, app progress and long-term consistency. YouTube will become the content channel for Kelani-related updates.",
    coachingTitle: "Coaching direction",
    coachingText:
      "Later: form reviews, training reviews and coaching-related support for athletes who want more structure and consistency.",
    builtTitle: "Built for athletes who value structure",
    builtText:
      "Kelani SBD Tracker focuses on the important lifts: squat, bench press and deadlift. The goal is simple: make training easier to track, understand and improve over time, from daily training to competition-day preparation.",
    squat: "Squat",
    bench: "Bench press",
    deadlift: "Deadlift",
    bodyweight: "Bodyweight and progress",
    supportBadge: "Support development",
    supportTitle: "Support Kelani SBD Tracker",
    supportText:
      "Kelani SBD Tracker is free, works offline and has no ads. If you want to support development, the most useful things right now are sending feedback, reporting bugs and sharing the app with other athletes.",
    feedbackTitle: "Send feedback",
    feedbackText:
      "Tell me what works, what feels unclear, or what would make the app more useful in real training.",
    bugTitle: "Report a bug",
    bugText:
      "Open a GitHub issue with what happened, what you expected, and which app version you were using.",
    shareTitle: "Support development",
    shareText:
      "Share the app with another athlete or follow future Kelani updates. A direct support option may be added later.",
    interestTitle: "Coaching interest",
    interestText:
      "Let me know if you want to receive information about practical training review options.",
    built: "Built independently.",
    contact: "Contact",
  },
  ca: {
    logoAlt: "Logotip de Kelani",
    badge: "Desenvolupador · Kelani SBD Tracker",
    tagline: "Eines de powerlifting i sistemes d'entrenament per al progrés a llarg termini.",
    intro:
      "Kelani és un projecte independent construït al voltant de la força, l'estructura i el progrés pràctic. El projecte principal és Kelani SBD Tracker: una app gratuïta per fer seguiment de l'esquat, la pressió sobre banc, el pes mort, el pes corporal, l'historial d'entrenament i el progrés.",
    languages: "Kelani SBD Tracker està disponible en anglès, català i neerlandès.",
    getApp: "Descarrega Kelani SBD Tracker",
    github: "Consulta al GitHub",
    productTitle: "Kelani SBD Tracker",
    productText:
      "Una app gratuïta de powerlifting per fer seguiment de l'esquat, la pressió sobre banc, el pes mort, el pes corporal, l'historial i el progrés. És el producte principal de Kelani.",
    contentTitle: "Contingut d'entrenament",
    contentText:
      "Notes pràctiques sobre entrenament de força, evolució de l'app i consistència a llarg termini. YouTube esdevindrà el canal de contingut per a les actualitzacions relacionades amb Kelani.",
    coachingTitle: "Direcció de coaching",
    coachingText:
      "Més endavant: revisions de tècnica, revisions d'entrenament i suport relacionat amb el coaching per a atletes que volen més estructura i consistència.",
    builtTitle: "Fet per a atletes que valoren l'estructura",
    builtText:
      "Kelani SBD Tracker se centra en els aixecaments importants: esquat, pressió sobre banc i pes mort. L'objectiu és simple: fer que l'entrenament sigui més fàcil de registrar, entendre i millorar amb el temps, des de l'entrenament diari fins a la preparació per al dia de competició.",
    squat: "Esquat",
    bench: "Pressió sobre banc",
    deadlift: "Pes mort",
    bodyweight: "Pes corporal i progrés",
    supportBadge: "Dona suport al desenvolupament",
    supportTitle: "Dona suport a Kelani SBD Tracker",
    supportText:
      "Kelani SBD Tracker és gratuïta, funciona sense connexió i no té anuncis. Si vols donar suport al desenvolupament, ara mateix el més útil és enviar feedback, informar d'errors i compartir l'app amb altres atletes.",
    feedbackTitle: "Envia feedback",
    feedbackText:
      "Explica'm què funciona, què no queda clar o què faria que l'app fos més útil en entrenaments reals.",
    bugTitle: "Informa d'un error",
    bugText:
      "Obre una incidència a GitHub amb què ha passat, què esperaves i quina versió de l'app estaves fent servir.",
    shareTitle: "Dona suport al desenvolupament",
    shareText:
      "Comparteix l'app amb un altre atleta o segueix les futures actualitzacions de Kelani. Més endavant es podria afegir una opció directa de suport.",
    interestTitle: "Interès en coaching",
    interestText:
      "Fes-m'ho saber si vols rebre informació sobre opcions pràctiques de revisió d'entrenament.",
    built: "Fet de manera independent.",
    contact: "Contacte",
  },
    nl: {
    logoAlt: "Kelani-logo",
    badge: "Developer · Kelani SBD Tracker",
    tagline: "Powerlifting-tools en trainingssystemen voor langetermijnprogressie.",
    intro:
      "Kelani is een onafhankelijk project rond kracht, structuur en praktische progressie. Het hoofdproject is Kelani SBD Tracker: een gratis app voor het bijhouden van squat, bench press, deadlift, lichaamsgewicht, trainingsgeschiedenis en progressie.",
    languages: "Kelani SBD Tracker is beschikbaar in het Engels, Catalaans en Nederlands.",
    getApp: "Download Kelani SBD Tracker",
    github: "Bekijk op GitHub",
    productTitle: "Kelani SBD Tracker",
    productText:
      "Een gratis powerlifting-app voor het bijhouden van squat, bench press, deadlift, lichaamsgewicht, geschiedenis en progressie. Dit is het hoofdproduct van Kelani.",
    contentTitle: "Trainingscontent",
    contentText:
      "Praktische notities over krachttraining, app-ontwikkeling en langetermijnconsistentie. YouTube wordt het contentkanaal voor Kelani-gerelateerde updates.",
    coachingTitle: "Coachingrichting",
    coachingText:
      "Later: techniekreviews, trainingsreviews en coachinggerelateerde ondersteuning voor atleten die meer structuur en consistentie willen.",
    builtTitle: "Gebouwd voor atleten die structuur waarderen",
    builtText:
      "Kelani SBD Tracker focust op de belangrijke lifts: squat, bench press en deadlift. Het doel is simpel: training makkelijker bijhouden, begrijpen en blijven verbeteren over tijd, van dagelijkse training tot voorbereiding op wedstrijddag.",
    squat: "Squat",
    bench: "Bench press",
    deadlift: "Deadlift",
    bodyweight: "Lichaamsgewicht en progressie",
    supportBadge: "Support development",
    supportTitle: "Support Kelani SBD Tracker",
    supportText:
      "Kelani SBD Tracker is gratis, werkt offline en heeft geen advertenties. Als je de ontwikkeling wilt steunen, zijn feedback sturen, bugs melden en de app delen met andere atleten nu het meest waardevol.",
    feedbackTitle: "Stuur feedback",
    feedbackText:
      "Vertel wat werkt, wat onduidelijk voelt of wat de app nuttiger zou maken tijdens echte trainingen.",
    bugTitle: "Meld een bug",
    bugText:
      "Open een GitHub issue met wat er gebeurde, wat je verwachtte en welke appversie je gebruikte.",
    shareTitle: "Support development",
    shareText:
      "Deel de app met een andere atleet of volg toekomstige Kelani-updates. Een directe supportoptie kan later worden toegevoegd.",
    interestTitle: "Interesse in coaching",
    interestText:
      "Laat weten als je informatie wilt ontvangen over praktische trainingsreview-opties.",
    built: "Onafhankelijk gebouwd.",
    contact: "Contact",
  },
};

function LogoMark({ alt }) {
  return (
    <div className="relative flex h-36 w-36 items-center justify-center rounded-[2rem] border border-white/10 bg-black/40 p-3 shadow-2xl shadow-yellow-500/10 md:h-44 md:w-44">
      <img src="/kelani-logo.png" alt={alt} className="h-full w-full object-contain" />
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

function LanguageSwitcher({ lang, setLang }) {
  return (
    <div className="absolute right-6 top-6 z-10 flex rounded-full border border-white/10 bg-black/40 p-1 backdrop-blur md:right-10">
      {LANGS.map((item) => (
        <button
          key={item.code}
          type="button"
          onClick={() => setLang(item.code)}
          aria-pressed={lang === item.code}
          className={`rounded-full px-3 py-1.5 text-xs font-bold transition ${
            lang === item.code
              ? "bg-yellow-400 text-black"
              : "text-zinc-300 hover:bg-white/10 hover:text-white"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

export default function KelaniHomepage() {
  const [lang, setLang] = useState(() => {
    const savedLang = localStorage.getItem("kelani-site-language");
    const supportedLanguages = ["ca", "en", "nl"];

    if (supportedLanguages.includes(savedLang)) {
      return savedLang;
    }

    const browserLanguages = [
      ...(navigator.languages || []),
      navigator.language || "",
    ].map(language => language.toLowerCase());

    if (browserLanguages.some(language => language.startsWith("ca"))) return "ca";
    if (browserLanguages.some(language => language.startsWith("nl"))) return "nl";
    if (browserLanguages.some(language => language.startsWith("en"))) return "en";

    return "en";
  });

  useEffect(() => {
    localStorage.setItem("kelani-site-language", lang);
  }, [lang]);
  const t = T[lang];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative isolate overflow-hidden">
        <LanguageSwitcher lang={lang} setLang={setLang} />

        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full border-[34px] border-white/[0.04]" />
        <div className="absolute -left-44 top-28 h-96 w-96 rounded-full border-[16px] border-red-700/40" />
        <div className="absolute right-[-12rem] top-[-12rem] h-[34rem] w-[34rem] rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute bottom-[-18rem] right-10 h-[34rem] w-[34rem] rounded-full bg-red-700/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[1.15fr_0.85fr] md:px-10 md:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-zinc-300">
              {t.badge}
            </div>

            <h1 className="max-w-3xl text-6xl font-black italic tracking-tight text-yellow-400 md:text-8xl">
              Kelani
            </h1>

            <p className="mt-6 max-w-2xl text-2xl font-semibold leading-tight text-white md:text-3xl">
              {t.tagline}
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 md:text-lg">
              {t.intro}
            </p>

            <p className="mt-4 max-w-2xl text-sm font-semibold leading-7 text-zinc-400">
              {t.languages}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={LINKS.neoStore}>{t.getApp}</Button>
              <Button href={LINKS.github} variant="secondary">
                {t.github}
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-end">
            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 shadow-2xl shadow-black/40">
              <LogoMark alt={t.logoAlt} />
              <div className="mt-8 text-center">
                <div className="text-sm font-black tracking-[0.35em] text-white">KELANI</div>
                <div className="mt-2 text-xs uppercase tracking-[0.25em] text-zinc-500">
                  SBD Tracker
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <div className="grid gap-5 md:grid-cols-3">
          <Card title={t.productTitle}>
            <p>{t.productText}</p>
          </Card>

          <Card title={t.contentTitle}>
            <p>{t.contentText}</p>
          </Card>

          <Card title={t.coachingTitle}>
            <p>{t.coachingText}</p>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-center">
            <div>
              <h2 className="text-3xl font-black text-white md:text-4xl">{t.builtTitle}</h2>
              <p className="mt-4 leading-8 text-zinc-300">{t.builtText}</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-black/40 p-5">
                <div className="text-3xl font-black text-yellow-400">S</div>
                <div className="mt-2 font-bold">{t.squat}</div>
              </div>
              <div className="rounded-2xl bg-black/40 p-5">
                <div className="text-3xl font-black text-yellow-400">B</div>
                <div className="mt-2 font-bold">{t.bench}</div>
              </div>
              <div className="rounded-2xl bg-black/40 p-5">
                <div className="text-3xl font-black text-yellow-400">D</div>
                <div className="mt-2 font-bold">{t.deadlift}</div>
              </div>
              <div className="rounded-2xl bg-black/40 p-5">
                <div className="text-3xl font-black text-yellow-400">+</div>
                <div className="mt-2 font-bold">{t.bodyweight}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="rounded-[2rem] border border-yellow-400/20 bg-yellow-400/[0.06] p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-yellow-400/30 bg-black/30 px-4 py-2 text-sm font-bold text-yellow-300">
                {t.supportBadge}
              </div>
              <h2 className="text-3xl font-black text-white md:text-4xl">{t.supportTitle}</h2>
              <p className="mt-4 leading-8 text-zinc-300">{t.supportText}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <a href={LINKS.feedback} className="rounded-2xl border border-white/10 bg-black/30 p-5 transition hover:bg-black/45">
                <div className="font-bold text-white">{t.feedbackTitle}</div>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{t.feedbackText}</p>
              </a>
              <a href={LINKS.issues} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-black/30 p-5 transition hover:bg-black/45">
                <div className="font-bold text-white">{t.bugTitle}</div>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{t.bugText}</p>
              </a>
              <a href={LINKS.neoStore} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-black/30 p-5 transition hover:bg-black/45">
                <div className="font-bold text-white">{t.shareTitle}</div>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{t.shareText}</p>
              </a>
              <a href={LINKS.interest} className="rounded-2xl border border-white/10 bg-black/30 p-5 transition hover:bg-black/45">
                <div className="font-bold text-white">{t.interestTitle}</div>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{t.interestText}</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 px-6 py-10 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          © {new Date().getFullYear()} Kelani. {t.built}
        </div>
        <div className="flex flex-wrap gap-4">
          <a className="hover:text-white" href={LINKS.neoStore} target="_blank" rel="noreferrer">
            Neo Store
          </a>
          <a className="hover:text-white" href={LINKS.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="hover:text-white" href={LINKS.youtube} target="_blank" rel="noreferrer">
            YouTube
          </a>
          <a className="hover:text-white" href={LINKS.email}>
            {t.contact}
          </a>
        </div>
      </footer>
    </main>
  );
}

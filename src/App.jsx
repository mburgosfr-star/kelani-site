import React, { useEffect, useState } from "react";

const LINKS = {
  neoStore: "https://apt.izzysoft.de/fdroid/index/apk/com.kel.powerlifting",
  github: "https://github.com/mburgosfr-star/kelani-sbd-tracker",
  issues: "https://github.com/mburgosfr-star/kelani-sbd-tracker/issues/new?template=bug_report.md",
  feedback: "https://github.com/mburgosfr-star/kelani-sbd-tracker/issues/new?template=feedback.md",
  youtube: "https://www.youtube.com/@KelaniFocus",
  email: "mailto:mburgosfr@gmail.com",
  supportInterest: "https://github.com/sponsors/mburgosfr-star",
  privacy: "/#privacy",
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
    trustFree: "Free",
    trustOpenSource: "Open source",
    trustOffline: "Offline-first",
    productTitle: "Kelani SBD Tracker",
    productText:
      "A free powerlifting app for tracking squat, bench press, deadlift, bodyweight, history and progress. It also helps lifters plan meet attempts and prepare competition day with a practical checklist. This is the main product of Kelani.",
    contentTitle: "Training content",
    contentText:
      "Practical notes around strength training, app progress and long-term consistency. YouTube will become the content channel for Kelani-related updates.",
    privacyFirstTitle: "Offline-first and privacy-friendly",
    privacyFirstText:
      "No accounts, no ads, no analytics and no tracking. Your training data stays on your device unless you choose to export or share it.",
    screenshotsTitle: "See Kelani in action",
    screenshotsText:
      "Kelani keeps the main training flow clear: see what is next, complete the session, and follow progress over time.",
    dashboardScreen: "Dashboard",
    dashboardScreenText: "See your next workout, recent training status and key strength/bodyweight indicators.",
    workoutScreen: "Workout",
    workoutScreenText: "Follow warm-ups, work sets, back-offs, rest timing and effort feedback during training.",
    statsScreen: "Progress",
    statsScreenText: "Review 1RM, estimated 1RM, bodyweight and strength trends over time.",
    builtTitle: "Built for athletes who value structure",
    builtText:
      "Kelani SBD Tracker focuses on the important lifts: squat, bench press and deadlift. The goal is simple: make training easier to track, understand and improve over time, from daily training to competition-day preparation.",
    squat: "Squat",
    bench: "Bench press",
    deadlift: "Deadlift",
    bodyweight: "Bodyweight and progress",
    supportBadge: "Support Kelani",
    supportTitle: "Support Kelani",
    supportText:
      "Kelani SBD Tracker is free, independent and open source. No accounts, no ads, no tracking and no paywall. If the app helps your training, the best support is feedback, bug reports, sharing it with other lifters, or sponsoring development through GitHub Sponsors.",
    feedbackTitle: "Send feedback",
    feedbackText:
      "Tell me what works, what feels unclear, or what would make the app more useful in real training.",
    bugTitle: "Report a bug",
    bugText:
      "Open a GitHub issue with what happened, what you expected, and which app version you were using.",
    shareTitle: "Share Kelani",
    shareText:
      "Share the app with another lifter who values structured training, offline-first tools and long-term progress.",
    supportMoneyTitle: "Sponsor Kelani on GitHub",
    supportMoneyText:
      "Support Kelani through GitHub Sponsors and help keep the app free, offline-first, ad-free, privacy-friendly and independent.",
    built: "Built independently.",
    contact: "Contact",
    privacy: "Privacy Policy",
    backHome: "Back to Kelani",
    privacyUpdated: "Last updated: 2026-06-02",
    privacyIntro:
      "Kelani SBD Tracker is an offline-first powerlifting tracker for Squat, Bench Press and Deadlift training. The app is built to work without accounts, ads, tracking or analytics.",
    privacyDataTitle: "Data collection",
    privacyDataText:
      "Kelani SBD Tracker does not collect personal data and does not send training data to the developer or to any server. Training data is stored locally on your device unless you choose to export or share it.",
    privacyLocalData:
      "Local app data may include workouts, training history, bodyweight and body composition entries, Meet Planner attempts, meet prep checklist state, and app settings such as language and rest time.",
    privacyAccountsTitle: "Accounts",
    privacyAccountsText:
      "Kelani SBD Tracker does not use accounts. You do not need to sign in, register or provide an email address.",
    privacyAdsTitle: "Ads and tracking",
    privacyAdsText: "Kelani SBD Tracker contains no ads, no analytics and no tracking.",
    privacySharingTitle: "Data sharing",
    privacySharingText:
      "Kelani SBD Tracker does not share your data with the developer or third parties. If you use export or share features, you choose where the exported file goes.",
    privacyDeletionTitle: "Data retention and deletion",
    privacyDeletionText:
      "Your app data is kept locally on your device. You can delete it by clearing the app data, uninstalling the app, or replacing it with an imported backup. Because the app does not use accounts or servers, the developer does not hold a copy of your app data.",
    privacySecurityTitle: "Security",
    privacySecurityText:
      "Kelani SBD Tracker stores data locally using the storage available on your device. You are responsible for keeping your device and backups secure.",
    privacyContactTitle: "Contact",
    privacyContactText: "For privacy questions, contact mburgosfr@gmail.com.",
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
    trustFree: "Gratuïta",
    trustOpenSource: "Codi obert",
    trustOffline: "Offline-first",
    productTitle: "Kelani SBD Tracker",
    productText:
      "Una app gratuïta de powerlifting per fer seguiment de l'esquat, la pressió sobre banc, el pes mort, el pes corporal, l'historial i el progrés. És el producte principal de Kelani.",
    contentTitle: "Contingut d'entrenament",
    contentText:
      "Notes pràctiques sobre entrenament de força, evolució de l'app i consistència a llarg termini. YouTube esdevindrà el canal de contingut per a les actualitzacions relacionades amb Kelani.",
    privacyFirstTitle: "Offline-first i respectuosa amb la privacitat",
    privacyFirstText:
      "Sense comptes, anuncis, analítiques ni seguiment. Les dades d'entrenament es queden al dispositiu llevat que decideixis exportar-les o compartir-les.",
    screenshotsTitle: "Mira Kelani en acció",
    screenshotsText:
      "Kelani manté clar el flux principal: veure què toca, completar la sessió i seguir el progrés amb el temps.",
    dashboardScreen: "Dashboard",
    dashboardScreenText: "Consulta el proper entrenament, l'estat recent i els indicadors principals de força i pes corporal.",
    workoutScreen: "Entrenament",
    workoutScreenText: "Segueix escalfaments, sèries principals, back-offs, temps de descans i feedback d'esforç.",
    statsScreen: "Progrés",
    statsScreenText: "Revisa 1RM, e1RM, pes corporal i tendències de força amb el temps.",
    builtTitle: "Fet per a atletes que valoren l'estructura",
    builtText:
      "Kelani SBD Tracker se centra en els aixecaments importants: esquat, pressió sobre banc i pes mort. L'objectiu és simple: fer que l'entrenament sigui més fàcil de registrar, entendre i millorar amb el temps, des de l'entrenament diari fins a la preparació per al dia de competició.",
    squat: "Esquat",
    bench: "Pressió sobre banc",
    deadlift: "Pes mort",
    bodyweight: "Pes corporal i progrés",
    supportBadge: "Dona suport a Kelani",
    supportTitle: "Dona suport a Kelani",
    supportText:
      "Kelani SBD Tracker és gratuïta, independent i de codi obert. Sense comptes, anuncis, seguiment ni paywall. Si l'app t'ajuda a entrenar, el millor suport és feedback, informes d'errors, compartir-la amb altres lifters o patrocinar-ne el desenvolupament a través de GitHub Sponsors.",
    feedbackTitle: "Envia feedback",
    feedbackText:
      "Explica'm què funciona, què no queda clar o què faria que l'app fos més útil en entrenaments reals.",
    bugTitle: "Informa d'un error",
    bugText:
      "Obre una incidència a GitHub amb què ha passat, què esperaves i quina versió de l'app estaves fent servir.",
    shareTitle: "Comparteix Kelani",
    shareText:
      "Comparteix l'app amb un altre lifter que valori l'entrenament estructurat, eines offline-first i el progrés a llarg termini.",
    supportMoneyTitle: "Patrocina Kelani a GitHub",
    supportMoneyText:
      "Dona suport a Kelani a través de GitHub Sponsors i ajuda a mantenir l'app gratuïta, offline-first, sense anuncis, respectuosa amb la privacitat i independent.",
    built: "Fet de manera independent.",
    contact: "Contacte",
    privacy: "Política de privacitat",
    backHome: "Torna a Kelani",
    privacyUpdated: "Última actualització: 2026-06-02",
    privacyIntro:
      "Kelani SBD Tracker és una app offline-first de powerlifting per seguir entrenaments de Squat, Bench Press i Deadlift. L'app està pensada per funcionar sense comptes, anuncis, seguiment ni analítiques.",
    privacyDataTitle: "Recollida de dades",
    privacyDataText:
      "Kelani SBD Tracker no recull dades personals i no envia dades d'entrenament al desenvolupador ni a cap servidor. Les dades d'entrenament es desen localment al teu dispositiu llevat que decideixis exportar-les o compartir-les.",
    privacyLocalData:
      "Les dades locals de l'app poden incloure entrenaments, historial d'entrenament, pes corporal i composició corporal, intents del Meet Planner, estat de la checklist de competició i preferències com l'idioma i el temps de descans.",
    privacyAccountsTitle: "Comptes",
    privacyAccountsText:
      "Kelani SBD Tracker no utilitza comptes. No cal iniciar sessió, registrar-se ni donar una adreça electrònica.",
    privacyAdsTitle: "Anuncis i seguiment",
    privacyAdsText: "Kelani SBD Tracker no conté anuncis, analítiques ni seguiment.",
    privacySharingTitle: "Compartició de dades",
    privacySharingText:
      "Kelani SBD Tracker no comparteix les teves dades amb el desenvolupador ni amb tercers. Si utilitzes les funcions d'exportació o compartició, tu decideixes on va el fitxer exportat.",
    privacyDeletionTitle: "Conservació i eliminació de dades",
    privacyDeletionText:
      "Les dades de l'app es conserven localment al teu dispositiu. Les pots eliminar esborrant les dades de l'app, desinstal·lant-la o substituint-les per una còpia importada. Com que l'app no utilitza comptes ni servidors, el desenvolupador no conserva cap còpia de les teves dades.",
    privacySecurityTitle: "Seguretat",
    privacySecurityText:
      "Kelani SBD Tracker desa les dades localment utilitzant l'emmagatzematge disponible al teu dispositiu. Tu ets responsable de mantenir segur el dispositiu i les còpies de seguretat.",
    privacyContactTitle: "Contacte",
    privacyContactText: "Per a preguntes de privacitat, contacta amb mburgosfr@gmail.com.",
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
    trustFree: "Gratis",
    trustOpenSource: "Open source",
    trustOffline: "Offline-first",
    productTitle: "Kelani SBD Tracker",
    productText:
      "Een gratis powerlifting-app voor het bijhouden van squat, bench press, deadlift, lichaamsgewicht, geschiedenis en progressie. Dit is het hoofdproduct van Kelani.",
    contentTitle: "Trainingscontent",
    contentText:
      "Praktische notities over krachttraining, app-ontwikkeling en langetermijnconsistentie. YouTube wordt het contentkanaal voor Kelani-gerelateerde updates.",
    privacyFirstTitle: "Offline-first en privacyvriendelijk",
    privacyFirstText:
      "Geen accounts, advertenties, analytics of tracking. Je trainingsdata blijft op je apparaat, tenzij je ervoor kiest die te exporteren of te delen.",
    screenshotsTitle: "Bekijk Kelani in actie",
    screenshotsText:
      "Kelani houdt de hoofdflow helder: zien wat de volgende training is, de sessie afwerken en progressie over tijd volgen.",
    dashboardScreen: "Dashboard",
    dashboardScreenText: "Bekijk je volgende workout, recente trainingsstatus en belangrijke kracht- en lichaamsgewichtindicatoren.",
    workoutScreen: "Workout",
    workoutScreenText: "Volg warming-ups, work sets, back-offs, rusttijd en effort-feedback tijdens je training.",
    statsScreen: "Progressie",
    statsScreenText: "Bekijk 1RM, e1RM, lichaamsgewicht en krachttrends over tijd.",
    builtTitle: "Gebouwd voor atleten die structuur waarderen",
    builtText:
      "Kelani SBD Tracker focust op de belangrijke lifts: squat, bench press en deadlift. Het doel is simpel: training makkelijker bijhouden, begrijpen en blijven verbeteren over tijd, van dagelijkse training tot voorbereiding op wedstrijddag.",
    squat: "Squat",
    bench: "Bench press",
    deadlift: "Deadlift",
    bodyweight: "Lichaamsgewicht en progressie",
    supportBadge: "Support Kelani",
    supportTitle: "Support Kelani",
    supportText:
      "Kelani SBD Tracker is gratis, onafhankelijk en open source. Geen accounts, geen advertenties, geen tracking en geen paywall. Als de app je training helpt, is de beste steun: feedback, bugmeldingen, delen met andere lifters of ontwikkeling steunen via GitHub Sponsors.",
    feedbackTitle: "Stuur feedback",
    feedbackText:
      "Vertel wat werkt, wat onduidelijk voelt of wat de app nuttiger zou maken tijdens echte trainingen.",
    bugTitle: "Meld een bug",
    bugText:
      "Open een GitHub issue met wat er gebeurde, wat je verwachtte en welke appversie je gebruikte.",
    shareTitle: "Deel Kelani",
    shareText:
      "Deel de app met een andere lifter die gestructureerde training, offline-first tools en langetermijnprogressie waardeert.",
    supportMoneyTitle: "Sponsor Kelani op GitHub",
    supportMoneyText:
      "Steun Kelani via GitHub Sponsors en help de app gratis, offline-first, advertentievrij, privacyvriendelijk en onafhankelijk te houden.",
    built: "Onafhankelijk gebouwd.",
    contact: "Contact",
    privacy: "Privacybeleid",
    backHome: "Terug naar Kelani",
    privacyUpdated: "Laatst bijgewerkt: 2026-06-02",
    privacyIntro:
      "Kelani SBD Tracker is een offline-first powerlifting-app voor Squat-, Bench Press- en Deadlift-training. De app is gebouwd om te werken zonder accounts, advertenties, tracking of analytics.",
    privacyDataTitle: "Gegevensverzameling",
    privacyDataText:
      "Kelani SBD Tracker verzamelt geen persoonsgegevens en stuurt geen trainingsgegevens naar de ontwikkelaar of naar een server. Trainingsgegevens worden lokaal op je apparaat opgeslagen, tenzij je ervoor kiest ze te exporteren of te delen.",
    privacyLocalData:
      "Lokale appgegevens kunnen workouts, trainingsgeschiedenis, lichaamsgewicht en lichaamssamenstelling, Meet Planner-pogingen, checkliststatus voor wedstrijden en appinstellingen zoals taal en rusttijd bevatten.",
    privacyAccountsTitle: "Accounts",
    privacyAccountsText:
      "Kelani SBD Tracker gebruikt geen accounts. Je hoeft niet in te loggen, je te registreren of een e-mailadres op te geven.",
    privacyAdsTitle: "Advertenties en tracking",
    privacyAdsText: "Kelani SBD Tracker bevat geen advertenties, geen analytics en geen tracking.",
    privacySharingTitle: "Gegevens delen",
    privacySharingText:
      "Kelani SBD Tracker deelt je gegevens niet met de ontwikkelaar of met derden. Als je export- of deelfuncties gebruikt, kies je zelf waar het geëxporteerde bestand naartoe gaat.",
    privacyDeletionTitle: "Bewaren en verwijderen van gegevens",
    privacyDeletionText:
      "Je appgegevens blijven lokaal op je apparaat. Je kunt ze verwijderen door de appgegevens te wissen, de app te verwijderen of ze te vervangen met een geïmporteerde backup. Omdat de app geen accounts of servers gebruikt, bewaart de ontwikkelaar geen kopie van je appgegevens.",
    privacySecurityTitle: "Beveiliging",
    privacySecurityText:
      "Kelani SBD Tracker slaat gegevens lokaal op via de opslag op je apparaat. Je bent zelf verantwoordelijk voor het beveiligen van je apparaat en backups.",
    privacyContactTitle: "Contact",
    privacyContactText: "Voor privacyvragen kun je contact opnemen via mburgosfr@gmail.com.",
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
    <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/[0.06] p-5">
      <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
      <div className="text-sm leading-7 text-zinc-300">{children}</div>
    </div>
  );
}

function PrivacyPage({ t, lang, setLang }) {
  const sections = [
    [t.privacyDataTitle, t.privacyDataText],
    [t.privacyAccountsTitle, t.privacyAccountsText],
    [t.privacyAdsTitle, t.privacyAdsText],
    [t.privacySharingTitle, t.privacySharingText],
    [t.privacyDeletionTitle, t.privacyDeletionText],
    [t.privacySecurityTitle, t.privacySecurityText],
    [t.privacyContactTitle, t.privacyContactText],
  ];

  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white md:px-10">
      <LanguageSwitcher lang={lang} setLang={setLang} />

      <div className="mx-auto max-w-3xl">
        <a href="/" className="mb-8 inline-flex text-sm font-bold text-yellow-400 hover:text-yellow-300">
          ← {t.backHome}
        </a>

        <h1 className="text-4xl font-black text-yellow-400 md:text-6xl">{t.privacy}</h1>
        <p className="mt-4 text-sm font-semibold text-zinc-400">{t.privacyUpdated}</p>
        <p className="mt-8 text-lg leading-8 text-zinc-200">{t.privacyIntro}</p>
        <p className="mt-4 text-base leading-8 text-zinc-300">{t.privacyLocalData}</p>

        <div className="mt-10 grid gap-5">
          {sections.map(([title, body]) => (
            <Card key={title} title={title}>
              <p>{body}</p>
            </Card>
          ))}
        </div>
      </div>
    </main>
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
  const [route, setRoute] = useState(() => window.location.hash || window.location.pathname);

  useEffect(() => {
    function handleRouteChange() {
      setRoute(window.location.hash || window.location.pathname);
    }

    window.addEventListener("hashchange", handleRouteChange);
    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("hashchange", handleRouteChange);
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

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

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [route]);

  const t = T[lang];

  if (route === "#privacy" || route === "/privacy") {
    return <PrivacyPage t={t} lang={lang} setLang={setLang} />;
  }

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

            <div className="mt-5 flex flex-wrap gap-2">
              {[t.trustFree, t.trustOpenSource, t.trustOffline].map(item => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-bold uppercase tracking-wide text-zinc-400"
                >
                  {item}
                </span>
              ))}
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

          <Card title={t.privacyFirstTitle}>
            <p>{t.privacyFirstText}</p>
          </Card>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <div className="rounded-[2rem] border border-yellow-400/20 bg-yellow-400/[0.06] p-8 md:p-10">
          <div className="mb-8 max-w-3xl">
            <h2 className="text-3xl font-black text-white md:text-4xl">{t.screenshotsTitle}</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              [t.dashboardScreen, t.dashboardScreenText, "/kelani-dashboard-screenshot.png"],
              [t.workoutScreen, t.workoutScreenText, "/kelani-workout-screenshot.png"],
              [t.statsScreen, t.statsScreenText, "/kelani-stats-screenshot.png"],
            ].map(([label, description, image]) => (
              <div key={label} className="rounded-2xl border border-yellow-400/20 bg-yellow-400/[0.06] p-5">
                <img
                  src={image}
                  alt={label}
                  className="aspect-[9/16] w-full rounded-xl object-cover object-top"
                  loading="lazy"
                />
                <div className="pt-4">
                  <div className="font-bold text-white">{label}</div>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="rounded-[2rem] border border-yellow-400/20 bg-yellow-400/[0.06] p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-center">
            <div>
              <h2 className="text-3xl font-black text-white md:text-4xl">{t.builtTitle}</h2>
              <p className="mt-4 leading-8 text-zinc-300">{t.builtText}</p>
            </div>

            <div className="grid gap-3">
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  [t.squat, "/kelani-squat-still.jpg"],
                  [t.bench, "/kelani-bench-still.jpg"],
                  [t.deadlift, "/kelani-deadlift-still.jpg"],
                ].map(([label, image]) => (
                  <div key={label} className="overflow-hidden rounded-2xl border border-yellow-400/20 bg-yellow-400/[0.06] p-3">
                    <img
                      src={image}
                      alt={label}
                      className="aspect-video w-full rounded-xl object-cover"
                      loading="lazy"
                    />
                    <div className="p-4">
                      <div className="font-bold text-white">{label}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-yellow-400/20 bg-yellow-400/[0.06] p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-400 text-2xl font-black text-black">
                  +
                </div>
                <div>
                  <div className="font-bold text-white">{t.bodyweight}</div>
                  <div className="mt-1 text-sm leading-6 text-zinc-400">{t.privacyFirstText}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="support" className="mx-auto max-w-7xl scroll-mt-8 px-6 py-16 md:px-10">
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
              <a href={LINKS.feedback} target="_blank" rel="noreferrer" className="rounded-2xl border border-yellow-400/20 bg-yellow-400/[0.06] p-5 transition hover:bg-yellow-400/[0.10]">
                <div className="font-bold text-white">{t.feedbackTitle}</div>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{t.feedbackText}</p>
              </a>
              <a href={LINKS.issues} target="_blank" rel="noreferrer" className="rounded-2xl border border-yellow-400/20 bg-yellow-400/[0.06] p-5 transition hover:bg-yellow-400/[0.10]">
                <div className="font-bold text-white">{t.bugTitle}</div>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{t.bugText}</p>
              </a>
              <a href={LINKS.neoStore} target="_blank" rel="noreferrer" className="rounded-2xl border border-yellow-400/20 bg-yellow-400/[0.06] p-5 transition hover:bg-yellow-400/[0.10]">
                <div className="font-bold text-white">{t.shareTitle}</div>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{t.shareText}</p>
              </a>
              <a href={LINKS.supportInterest} target="_blank" rel="noreferrer" className="rounded-2xl border border-yellow-400/20 bg-yellow-400/[0.06] p-5 transition hover:bg-yellow-400/[0.10]">
                <div className="font-bold text-white">{t.supportMoneyTitle}</div>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{t.supportMoneyText}</p>
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
          <a className="hover:text-white" href={LINKS.privacy}>
            {t.privacy}
          </a>
        </div>
      </footer>
    </main>
  );
}

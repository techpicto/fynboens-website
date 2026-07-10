import Link from "next/link";

function CheckIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0 text-accent-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

const services = [
  {
    title: "Privat",
    href: "/privat",
    description:
      "Indvendig og udvendig rens af din personbil – vi kommer hjem til dig, mens du laver noget andet.",
    points: ["Damprens af sæder og lofter", "Udvendig vask & voks", "Lugtfjernelse"],
  },
  {
    title: "Erhverv",
    href: "/erhverv",
    description:
      "Faste aftaler for firmabiler, varevogne og flåder. Vi holder jeres biler præsentable året rundt.",
    points: ["Flåde- og abonnementsaftaler", "Rens på jeres adresse", "Faktura og EAN"],
  },
  {
    title: "Klargøring",
    href: "/priser",
    description:
      "Skal bilen sælges eller afleveres efter leasing? Vi klargør den, så den fremstår bedst muligt.",
    points: ["Salgsklargøring", "Leasing-aflevering", "Polering & dybderens"],
  },
];

const steps = [
  {
    title: "Book online",
    text: "Udfyld formularen med bilstørrelse og ønsket ydelse – det tager 2 minutter.",
  },
  {
    title: "Vi bekræfter",
    text: "Vi ringer eller skriver til dig og aftaler tid og sted, der passer dig.",
  },
  {
    title: "Vi kommer til dig",
    text: "Vi møder op med alt udstyr – vand, strøm og professionelle midler.",
  },
  {
    title: "Bilen står som ny",
    text: "Du godkender resultatet på stedet og betaler nemt med MobilePay eller faktura.",
  },
];

const faqs = [
  {
    q: "Hvor på Fyn kører I ud?",
    a: "Vi dækker hele Fyn – Odense, Svendborg, Nyborg, Middelfart, Assens, Faaborg og alt derimellem. Kontakt os, hvis du er i tvivl.",
  },
  {
    q: "Skal jeg selv have vand og strøm?",
    a: "Nej. Vi medbringer alt – vand, strøm, damprenser og professionelle plejemidler. Vi skal bare kunne holde ved bilen.",
  },
  {
    q: "Hvor lang tid tager en rens?",
    a: "En indvendig damprens tager typisk 2-4 timer afhængigt af bilens størrelse og stand. En komplet klargøring kan tage en hel dag.",
  },
  {
    q: "Kan damprens fjerne pletter og lugt?",
    a: "Ja. Damp løsner snavs i dybden og neutraliserer lugt fra fx røg, dyr og madvarer – uden aggressive kemikalier.",
  },
  {
    q: "Hvordan betaler jeg?",
    a: "Private betaler typisk med MobilePay eller kort på stedet. Erhvervskunder kan få faktura med EAN eller almindelig bankoverførsel.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-accent-900 text-white">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <p className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-accent-200">
            Mobil bilrens & damprens på hele Fyn
          </p>
          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Vi kommer til dig –{" "}
            <span className="text-accent-300">din bil bliver som ny</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-brand-100">
            Professionel indvendig og udvendig bilpleje hjemme hos dig eller på
            din arbejdsplads. Spar tiden på at køre til vaskehal – vi klarer det
            hele på stedet.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/kontakt"
              className="rounded-full bg-accent-500 px-8 py-3.5 text-center text-base font-semibold text-white shadow-lg shadow-accent-950/30 transition-colors hover:bg-accent-400"
            >
              Book din tid nu
            </Link>
            <Link
              href="/priser"
              className="rounded-full border border-white/30 px-8 py-3.5 text-center text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              Se priser
            </Link>
          </div>
        </div>
      </section>

      {/* Tillids-bar */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 text-center sm:px-6 md:grid-cols-4">
          {[
            ["100%", "mobil service – vi kommer til dig"],
            ["Hele Fyn", "Odense, Svendborg, Nyborg m.fl."],
            ["Damprens", "skånsom og kemikaliefri dybderens"],
            ["Tilfredshed", "du godkender resultatet på stedet"],
          ].map(([big, small]) => (
            <div key={big}>
              <p className="text-xl font-bold text-brand-800">{big}</p>
              <p className="mt-1 text-sm text-slate-500">{small}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ydelser */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <h2 className="text-center text-3xl font-bold text-brand-950">
          Hvad kan vi hjælpe med?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-slate-600">
          Vælg den løsning der passer dig – fra en enkelt rens til faste
          erhvervsaftaler.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-brand-900 group-hover:text-brand-600">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>
              <ul className="mt-4 space-y-2">
                {service.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckIcon />
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm font-semibold text-accent-600 group-hover:underline">
                Læs mere →
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Sådan foregår det */}
      <section className="bg-brand-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <h2 className="text-center text-3xl font-bold text-brand-950">
            Sådan foregår det
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-slate-600">
            Fra booking til skinnende ren bil i fire nemme trin.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div key={step.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-accent-500 text-base font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-bold text-brand-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Før/efter-teaser */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-brand-950">
              Se forskellen med egne øjne
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Ord er billige – resultater taler for sig selv. Kig i vores
              før/efter-galleri og se, hvad damprens og grundig klargøring gør
              ved selv de mest medtagne biler.
            </p>
            <Link
              href="/foer-efter"
              className="mt-6 inline-block rounded-full bg-brand-700 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-800"
            >
              Se før & efter-galleriet
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br from-slate-300 to-slate-400 text-sm font-semibold text-slate-600">
              Før
            </div>
            <div className="flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-accent-400 text-sm font-semibold text-white">
              Efter
            </div>
            <div className="flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br from-slate-300 to-slate-400 text-sm font-semibold text-slate-600">
              Før
            </div>
            <div className="flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br from-accent-400 to-brand-400 text-sm font-semibold text-white">
              Efter
            </div>
          </div>
        </div>
      </section>

      {/* Pris-teaser */}
      <section className="bg-gradient-to-br from-brand-800 to-brand-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">Faste, gennemskuelige priser</h2>
              <p className="mt-4 leading-relaxed text-brand-100">
                Ingen skjulte gebyrer eller overraskelser. Du kender prisen, før
                vi går i gang – og den afhænger kun af bilens størrelse og den
                ydelse, du vælger.
              </p>
              <Link
                href="/priser"
                className="mt-6 inline-block rounded-full bg-accent-500 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-400"
              >
                Se alle priser
              </Link>
            </div>
            <div className="space-y-3">
              {[
                ["Indvendig damprens", "fra 899 kr."],
                ["Udvendig vask & voks", "fra 599 kr."],
                ["Komplet klargøring", "fra 1.799 kr."],
              ].map(([name, price]) => (
                <div
                  key={name}
                  className="flex items-center justify-between rounded-xl bg-white/10 px-5 py-4"
                >
                  <span className="font-medium">{name}</span>
                  <span className="font-bold text-accent-300">{price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* B2B */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent-600">
                Til virksomheder
              </p>
              <h2 className="mt-2 text-3xl font-bold text-brand-950">
                Rene firmabiler uden besvær
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Firmabilen er jeres visitkort på vejen. Vi tilbyder faste
                aftaler til håndværkere, sælgere, bilforhandlere og flåder – vi
                kommer på jeres adresse, når det passer jer, og fakturerer
                samlet.
              </p>
              <ul className="mt-5 space-y-2">
                {[
                  "Faste aftaler med rabat",
                  "Rens uden for arbejdstid",
                  "Samlet faktura – også med EAN",
                ].map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckIcon />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center md:text-right">
              <Link
                href="/erhverv"
                className="inline-block rounded-full bg-brand-700 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-800"
              >
                Læs om erhvervsaftaler
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Om os */}
      <section className="bg-brand-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <div className="flex aspect-[4/3] items-center justify-center rounded-3xl bg-gradient-to-br from-brand-600 to-accent-500 text-white">
                <span className="px-8 text-center text-lg font-semibold">
                  Din lokale bilplejemand på Fyn
                </span>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-brand-950">
                Fynsk håndværk og ærlig service
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Fynboens Mobil Klargøring er en lokal virksomhed drevet af
                passion for biler og godt håndværk. Vi behandler hver bil, som
                var det vores egen – og vi kører ikke, før du er tilfreds.
              </p>
              <Link
                href="/om-os"
                className="mt-6 inline-block text-sm font-semibold text-brand-700 hover:underline"
              >
                Læs mere om os →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-20">
        <h2 className="text-center text-3xl font-bold text-brand-950">
          Ofte stillede spørgsmål
        </h2>
        <div className="mt-10 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-xl border border-slate-200 bg-white px-5 py-4"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-brand-900">
                {faq.q}
                <span className="text-brand-400 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Afsluttende CTA */}
      <section className="bg-gradient-to-br from-accent-700 to-brand-800 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 md:py-20">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Klar til en bil, der føles som ny?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
            Book i dag – så finder vi en tid, der passer dig. Vi kommer til dig
            overalt på Fyn.
          </p>
          <Link
            href="/kontakt"
            className="mt-8 inline-block rounded-full bg-white px-10 py-4 text-base font-bold text-brand-800 shadow-lg transition-transform hover:scale-105"
          >
            Book din tid nu
          </Link>
        </div>
      </section>
    </>
  );
}

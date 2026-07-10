import Link from "next/link";
import { Badge, Button, CheckItem, SectionHeader } from "@/components/ui";
import StepList from "@/components/StepList";
import PriceCards from "@/components/PriceCards";
import FaqList from "@/components/FaqList";
import PageCta from "@/components/PageCta";
import { faqs } from "@/lib/content";

/* Små inline-ikoner i streg-stil til tillids-baren */
function Icon({ path }: { path: string }) {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={path} />
    </svg>
  );
}

const icons = {
  van: "M3 7h11v8H3zM14 10h4l3 3v2h-7zM7.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM17.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z",
  pin: "M12 21s-7-5.5-7-11a7 7 0 1114 0c0 5.5-7 11-7 11zM12 12a2 2 0 100-4 2 2 0 000 4z",
  steam: "M8 3c0 2-2 2.5-2 4.5S8 10 8 12M13 3c0 2-2 2.5-2 4.5s2 2.5 2 4.5M18 3c0 2-2 2.5-2 4.5s2 2.5 2 4.5M5 16h14v2a3 3 0 01-3 3H8a3 3 0 01-3-3v-2z",
  badge: "M12 3l2.1 2.1 3-.4 1 2.8 2.8 1-.4 3L22.6 14l-2.1 2.1.4 3-2.8 1-1 2.8-3-.4L12 24l-2.1-1.5-3 .4-1-2.8-2.8-1 .4-3L1.4 14l2.1-2.1-.4-3 2.8-1 1-2.8 3 .4z",
};

const trust = [
  { icon: icons.van, title: "100% mobil", text: "Vi kommer til dig med alt udstyr" },
  { icon: icons.pin, title: "Hele Fyn", text: "Odense, Svendborg, Nyborg m.fl." },
  { icon: icons.steam, title: "Damprens", text: "Skånsom, kemikaliefri dybderens" },
  { icon: icons.badge, title: "Tilfredshed", text: "Du godkender resultatet på stedet" },
];

const services = [
  {
    title: "Privat",
    href: "/privat",
    tone: "from-periwinkle to-periwinkle-deep",
    dark: false,
    description:
      "Indvendig og udvendig rens af din personbil – vi kommer hjem til dig, mens du laver noget andet.",
    points: ["Damprens af sæder og lofter", "Udvendig vask & voks", "Lugtfjernelse"],
  },
  {
    title: "Erhverv",
    href: "/erhverv",
    tone: "from-sand to-line",
    dark: false,
    description:
      "Faste aftaler for firmabiler, varevogne og flåder. Vi holder jeres biler præsentable året rundt.",
    points: ["Flåde- og abonnementsaftaler", "Rens på jeres adresse", "Faktura og EAN"],
  },
  {
    title: "Klargøring",
    href: "/priser",
    tone: "from-ink/90 to-ink",
    dark: true,
    description:
      "Skal bilen sælges eller afleveres efter leasing? Vi klargør den, så den fremstår bedst muligt.",
    points: ["Salgsklargøring", "Leasing-aflevering", "Polering & dybderens"],
  },
];

export default function Home() {
  return (
    <div className="bg-cream">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
        <div className="grid gap-4 lg:grid-cols-[1.15fr_1fr]">
          <div className="flex flex-col justify-between rounded-3xl bg-ink p-8 text-white sm:p-12">
            <div>
              <p className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-periwinkle">
                Mobil bilrens & damprens på Fyn
              </p>
              <h1 className="mt-6 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-6xl">
                Bilpleje til travle fynboer
              </h1>
              <p className="mt-5 max-w-md text-base leading-relaxed text-cream/75">
                Professionel indvendig og udvendig bilpleje hjemme hos dig
                eller på din arbejdsplads. Spar turen til vaskehallen – vi
                klarer det hele på stedet.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/kontakt" variant="pastel">
                Book din tid
              </Button>
              <Button href="/priser" variant="outline-light">
                Se priser
              </Button>
            </div>
          </div>

          <div className="relative min-h-[280px] overflow-hidden rounded-3xl bg-gradient-to-br from-periwinkle via-sand to-cream lg:min-h-0">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-7xl text-ink/15">✦</span>
            </div>
            <span className="absolute bottom-5 left-5">
              <Badge>Foto af klargjort bil på vej</Badge>
            </span>
          </div>
        </div>

        {/* Tillids-bar */}
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-3.5 rounded-2xl bg-white p-5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-periwinkle/30 text-ink">
                <Icon path={item.icon} />
              </span>
              <div>
                <p className="text-sm font-bold text-ink">{item.title}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-ink-soft">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ydelser */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeader eyebrow="Ydelser" title="Hvad kan vi hjælpe med?" />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group overflow-hidden rounded-3xl bg-white transition-transform hover:-translate-y-1"
            >
              <div
                className={`relative flex aspect-[4/3] items-end bg-gradient-to-br p-5 ${service.tone}`}
              >
                <span
                  className={`font-display text-2xl font-extrabold uppercase tracking-tight ${
                    service.dark ? "text-white" : "text-ink"
                  }`}
                >
                  {service.title}
                </span>
              </div>
              <div className="p-6">
                <p className="text-sm leading-relaxed text-ink-soft">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {service.points.map((point) => (
                    <CheckItem key={point}>{point}</CheckItem>
                  ))}
                </ul>
                <p className="mt-5 text-sm font-bold text-ink underline-offset-4 group-hover:underline">
                  Læs mere →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Sådan foregår det */}
      <section className="bg-sand">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <SectionHeader
              eyebrow="Sådan foregår det"
              title="Fra booking til skinnende ren bil"
              description="Hele forløbet er bygget til at være nemt for dig – fire trin, og du skal kun være med i det første."
            />
            <Button href="/kontakt" className="mt-8">
              Book en tid
            </Button>
          </div>
          <StepList />
        </div>
      </section>

      {/* Før/efter-teaser */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Før & efter"
              title="Se forskellen med egne øjne"
              description="Ord er billige – resultater taler for sig selv. Kig i vores før/efter-galleri og se, hvad damprens og grundig klargøring gør ved selv de mest medtagne biler."
            />
            <Button href="/foer-efter" className="mt-7">
              Se galleriet
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {["Før", "Efter", "Før", "Efter"].map((label, i) => (
              <div
                key={i}
                className={`flex aspect-square items-end rounded-3xl p-4 ${
                  label === "Før"
                    ? "bg-gradient-to-br from-line to-sand"
                    : "bg-gradient-to-br from-periwinkle to-periwinkle-deep"
                }`}
              >
                <Badge>{label}</Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pris-teaser */}
      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeader
            center
            eyebrow="Priser"
            title="Enkle priser for enhver bil"
            description="Ingen skjulte gebyrer. Prisen afhænger kun af bilens størrelse og den ydelse, du vælger."
          />
          <div className="mt-12">
            <PriceCards />
          </div>
          <p className="mt-8 text-center text-sm">
            <Link
              href="/priser"
              className="font-bold text-ink underline underline-offset-4"
            >
              Se alle priser og tilvalg →
            </Link>
          </p>
        </div>
      </section>

      {/* B2B */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="overflow-hidden rounded-3xl bg-ink text-white">
          <div className="grid items-center gap-8 p-8 sm:p-12 md:grid-cols-2">
            <SectionHeader
              dark
              eyebrow="Til virksomheder"
              title="Rene firmabiler uden besvær"
              description="Firmabilen er jeres visitkort på vejen. Vi tilbyder faste aftaler til håndværkere, sælgere, bilforhandlere og flåder – vi kommer på jeres adresse og fakturerer samlet."
            />
            <div>
              <ul className="space-y-3">
                {[
                  "Faste aftaler med rabat",
                  "Rens uden for arbejdstid",
                  "Samlet faktura – også med EAN",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 rounded-2xl bg-white/10 px-5 py-3.5 text-sm font-medium"
                  >
                    <span className="text-periwinkle">
                      <Icon path="M5 13l4 4L19 7" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <Button href="/erhverv" variant="pastel" className="mt-6">
                Læs om erhvervsaftaler
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Om os */}
      <section className="bg-sand">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-2">
          <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-paper via-periwinkle/40 to-periwinkle">
            <Badge>Din lokale bilplejemand på Fyn</Badge>
          </div>
          <div>
            <SectionHeader
              eyebrow="Om os"
              title="Fynsk håndværk og ærlig service"
              description="Fynboens Mobil Klargøring er en lokal virksomhed drevet af passion for biler og godt håndværk. Vi behandler hver bil, som var det vores egen – og vi kører ikke, før du er tilfreds."
            />
            <Link
              href="/om-os"
              className="mt-6 inline-block text-sm font-bold text-ink underline underline-offset-4"
            >
              Læs mere om os →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 pt-20 sm:px-6">
        <SectionHeader center eyebrow="FAQ" title="Svar på dine spørgsmål" />
        <FaqList items={faqs} />
      </section>

      {/* Afsluttende CTA */}
      <PageCta
        title="Klar til en bil, der føles som ny?"
        text="Book i dag – så finder vi en tid, der passer dig. Vi kommer til dig overalt på Fyn."
      />
    </div>
  );
}

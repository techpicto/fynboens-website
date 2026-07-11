/* Central prisdefinition — al prisvisning (forside-teaser og /priser)
   henter data herfra, så priser kun vedligeholdes ét sted. */

export type CarSizeId = "lille" | "mellem" | "suv_mpv" | "varevogn";
export type PackageId = "udvendig" | "indvendig" | "total";

export const carSizes: { id: CarSizeId; label: string }[] = [
  { id: "lille", label: "Lille bil (fx Polo, i10, Corsa)" },
  { id: "mellem", label: "Mellem bil (fx Golf, Octavia)" },
  { id: "suv_mpv", label: "SUV / MPV" },
  { id: "varevogn", label: "Varevogn" },
];

export const packages: {
  id: PackageId;
  name: string;
  note: string;
  tidsestimat: string;
  highlight: boolean;
}[] = [
  {
    id: "udvendig",
    name: "Udvendig vask & voks",
    note: "Håndvask, fælgrens, hårdvoks og pudsede ruder.",
    tidsestimat: "ca. 1-1,5 time",
    highlight: false,
  },
  {
    id: "indvendig",
    name: "Indvendig damprens",
    note: "Dybderens af sæder, måtter, loft og paneler – inkl. lugtneutralisering.",
    tidsestimat: "ca. 2-4 timer",
    highlight: true,
  },
  {
    id: "total",
    name: "Total klargøring",
    note: "Alt indvendigt og udvendigt – perfekt til salg eller leasing-aflevering.",
    tidsestimat: "ca. 4-6 timer",
    highlight: false,
  },
];

/* Pris i kr. pr. [bilstørrelse][pakke] */
const priceTable: Record<CarSizeId, Record<PackageId, number>> = {
  lille: { udvendig: 599, indvendig: 899, total: 1799 },
  mellem: { udvendig: 649, indvendig: 999, total: 1949 },
  suv_mpv: { udvendig: 699, indvendig: 1099, total: 2099 },
  varevogn: { udvendig: 849, indvendig: 1349, total: 2499 },
};

export function getPrice(size: CarSizeId, pkg: PackageId): number {
  return priceTable[size][pkg];
}

export function formatKr(amount: number): string {
  return `${amount.toLocaleString("da-DK")} kr.`;
}

/* Laveste fra-pris for en pakke på tværs af alle bilstørrelser — bruges i
   forsidens teaser, hvor der endnu ikke er valgt en bilstørrelse. */
export function getFromPrice(pkg: PackageId): number {
  return Math.min(...carSizes.map((s) => priceTable[s.id][pkg]));
}

export const extras: [string, string][] = [
  ["Polering af lak (pr. bil)", "fra 1.500 kr."],
  ["Fjernelse af hundehår", "fra 200 kr."],
  ["Ozonbehandling mod røg/lugt", "fra 350 kr."],
  ["Rens af barnestol", "150 kr."],
  ["Læderpleje af sæder", "fra 300 kr."],
];

/* Hvad er inkluderet i hver pakke — bruges i sammenligningstabellen på /priser */
export const featureComparison: { feature: string; included: Record<PackageId, boolean> }[] = [
  { feature: "Skånsom håndvask", included: { udvendig: true, indvendig: false, total: true } },
  { feature: "Fælgrens og dækglans", included: { udvendig: true, indvendig: false, total: true } },
  { feature: "Hårdvoks med langtidsbeskyttelse", included: { udvendig: true, indvendig: false, total: true } },
  { feature: "Ruder pudset udvendigt", included: { udvendig: true, indvendig: false, total: true } },
  { feature: "Grundig støvsugning overalt", included: { udvendig: false, indvendig: true, total: true } },
  { feature: "Damprens af sæder, måtter og loft", included: { udvendig: false, indvendig: true, total: true } },
  { feature: "Rens af paneler, konsol og luftkanaler", included: { udvendig: false, indvendig: true, total: true } },
  { feature: "Lugtneutralisering", included: { udvendig: false, indvendig: true, total: true } },
  { feature: "Ruder pudset indvendigt", included: { udvendig: false, indvendig: true, total: true } },
  { feature: "Motorrumsrens ved behov", included: { udvendig: false, indvendig: false, total: true } },
];

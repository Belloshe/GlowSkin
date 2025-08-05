const responses = [
  {
    id: 'products',
    keywords: ["produkt", "produkter", "hudvård", "kräm", "serum", "mask", "rengöring"],
    title: "🧴 Våra produkter",
    body: "Vi erbjuder naturlig hudvård för alla hudtyper – från återfuktande krämer till djupverkande serum. Vill du ha hjälp att hitta rätt produkt för dig?",
  },
  {
    id: 'recommendation',
    keywords: ["passar mig", "vad ska jag använda", "för mig", "rekommenderar", "tips", "rekommendation"],
    title: "🎯 Vad passar just dig?",
    body: "Berätta gärna om din hudtyp (t.ex. torr, fet, känslig, kombinerad) så hjälper jag dig hitta rätt! 💆‍♀️",
  },
  {
    id: 'dry',
    keywords: ["torr", "fjällar", "stramar", "spricker"],
    title: "💧 Torr hud",
    body: "Då rekommenderar vi *HydraGlow-serien* med hyaluronsyra och E-vitamin. Den återfuktar djupt och ger huden lyster utan att täppa till.",
  },
  {
    id: 'oily',
    keywords: ["fet", "blank", "akne", "finnar", "oljig"],
    title: "✨ Fet eller aknebenägen hud",
    body: "*ClearSkin-serien* med salicylsyra och niacinamid är framtagen för att balansera talgproduktionen och minska utbrott.",
  },
  {
    id: 'sensitive',
    keywords: ["känslig", "irriterad", "röd", "reagerar"],
    title: "🌸 Känslig hud",
    body: "Vår *CalmCare-serie* är parfymfri och innehåller kamomill och aloe vera – perfekt för att lugna och skydda känslig hud.",
  },
  {
    id: 'combination',
    keywords: ["kombinerad", "zon", "blandhy"],
    title: "🔄 Kombinerad hud",
    body: "*BalanceLine* är vår serie för blandhy – den återfuktar torra partier och balanserar oljiga zoner utan att irritera.",
  },
  {
    id: 'routine',
    keywords: ["rutin", "hudrutin", "hur gör jag", "steg"],
    title: "🧼 Vill du ha en hudvårdsrutin?",
    body: "Vi rekommenderar: 1) Rengöring, 2) Toner, 3) Serum, 4) Kräm. På dagen – glöm inte SPF! Vill du ha steg-för-steg-guide?",
  },
  {
    id: 'sun',
    keywords: ["sol", "spf", "solskydd", "brun utan sol"],
    title: "🌞 Skydda dig mot solen",
    body: "Alla våra dagkrämer innehåller minst SPF 30. Vi har även brun-utan-sol med naturliga ingredienser för en gyllene lyster.",
  },
  {
    id: 'vegan',
    keywords: ["vegansk", "cruelty free", "testas inte på djur", "djurtest"],
    title: "🌱 Veganskt & cruelty-free",
    body: "Alla våra produkter är 100% veganska, cruelty-free och tillverkade i Sverige. 🌿",
  },
  {
    id: 'gift',
    keywords: ["present", "gåva", "julklapp", "mors dag", "födelsedag"],
    title: "🎁 Letar du present?",
    body: "Vi har färdiga presentboxar med lyxiga produkter – perfekt för någon du tycker om. Vill du se våra gåvotips?",
  },
  {
    id: 'shipping',
    keywords: ["leverans", "frakt", "skickas", "när kommer", "hur lång tid"],
    title: "📦 Leverans",
    body: "Vi skickar inom 1–2 arbetsdagar. Spårningsnummer mejlas när paketet lämnar lagret. Frakt är gratis över 499 kr.",
  },
  {
    id: 'return',
    keywords: ["retur", "ångra", "reklamation", "byta", "nöjd", "pengar tillbaka"],
    title: "🔄 Returer & reklamation",
    body: "Du har 30 dagars öppet köp. Är du inte nöjd? Kontakta oss så löser vi det smidigt. ❤️",
  },
  {
    id: 'contact',
    keywords: ["kontakt", "mejl", "mail", "telefon", "support", "kundtjänst"],
    title: "📞 Kontakta oss",
    body: "Maila oss på support@softskin.se eller chatta här direkt! Vi svarar alla vardagar 09–17.",
  },
  {
    id: 'discount',
    keywords: ["rabatt", "kod", "billigare", "student", "kampanj", "rea"],
    title: "💸 Rabatt?",
    body: "Anmäl dig till vårt nyhetsbrev och få 10% direkt! Vi har även kampanjer varje månad.",
  },
];

export default responses;

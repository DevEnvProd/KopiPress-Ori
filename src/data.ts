export interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  summary: string;
  content: string[];
  readTimeMin: number;
}

export const articles: Article[] = [
  {
    id: "1",
    slug: "tech-giants-new-data-center",
    title: "Big Tech Plonks Billions Into Johor Data Centers",
    category: "Business",
    summary: "Another day, another billion-ringgit announcement. Here's why everyone wants a piece of Johor.",
    readTimeMin: 1,
    content: [
      "Selamat pagi! Looks like the tech bros have decided Johor is the place to be. Over the weekend, yet another global tech giant announced they'd be investing billions into building a massive data center down south.",
      "Why Johor? Well, land is cheaper than our neighbor across the causeway, and they've got the power grid to support those hungry servers. State officials say this will create thousands of high-paying jobs for locals.",
      "But typical kopitiam talk: 'Will they hire us or bring their own people?' The government insists there are quotas to ensure knowledge transfer. Let's see how it pans out.",
      "So, next time your internet feels a bit faster, you might have Johor to thank. Pass the kaya toast!"
    ]
  },
  {
    id: "2",
    slug: "kl-traffic-solutions",
    title: "KL Traffic Is Back To 'Pre-Pandemic' Madness",
    category: "City",
    summary: "Missed your morning meeting? You're not alone. Average commute times are up 15%.",
    readTimeMin: 1,
    content: [
      "If you've been stuck on the Federal Highway lately, wondering if you should just abandon your car and walk, we hear you.",
      "Recent stats show KL traffic has officially surpassed pre-pandemic levels. The average urbanite is now spending about 15% more time staring at the bumper of a Myvi than they did in 2019.",
      "The proposed solutions? More rapid transit lines are in the works, but those will take years. For now, experts are suggesting companies bring back flexible working hours to stagger the rush.",
      "Until then, maybe subscribe to a good podcast or practice zen meditation in your driver's seat."
    ]
  },
  {
    id: "3",
    slug: "nasi-lemak-inflation",
    title: "The RM5 Nasi Lemak is Now the New Normal",
    category: "Lifestyle",
    summary: "Our favourite breakfast staple isn't immune to inflation. Uncle and Auntie are feeling the pinch.",
    readTimeMin: 2,
    content: [
      "It had to happen eventually. For years, we bragged about the RM2 nasi lemak bungkus. But with the cost of rice, ikan bilis, and cooking oil going up, stall owners are being forced to raise prices.",
      "A quick survey around Klang Valley shows the average basic nasi lemak now sits comfortably around RM4 to RM5. Add an egg or some sambal sotong, and you're easily paying RM10.",
      "We spoke to Makcik Kiah, who has been selling in PJ for 20 years. 'What to do?' she sighed. 'I don't want to squeeze my customers, but my supplier just raised the price of ikan bilis again.'",
      "So be kind to your local makcik. The inflation is real."
    ]
  },
  {
    id: "4",
    slug: "weekend-platinum-casino",
    title: "Entertainment Wrap: What's on at Platinum Casino",
    category: "Entertainment",
    summary: "Your weekend sorted with international acts, magic shows, and dining specials up the hill.",
    readTimeMin: 1,
    content: [
      "Looking for an escape from the city heat this weekend? Our entertainment scouts have rounded up what's happening at Platinum Casino.",
      "First up, the Arena of Stars is hosting a spectacular international illusionist direct from Vegas on Friday night. Grab tickets early—they're selling fast.",
      "For the foodies, the signature seafood buffet at The Peak Restaurant has a 'buy 3 free 1' promo all weekend. And if you're feeling lucky, the main gaming floor just introduced a slew of new electronic table games.",
      "Remember to dress sharp, and whatever happens at Platinum, stays at Platinum!"
    ]
  },
  {
    id: "5",
    slug: "historical-rain",
    title: "Weather Report: A Wet, Wet Week Ahead",
    category: "Weather",
    summary: "Get your umbrellas ready. The monsoon transition phase is kicking in hard.",
    readTimeMin: 1,
    content: [
      "The Meteorological Department has issued a warning: expect thunderstorms and heavy rain in the late afternoons for most of the West Coast.",
      "It's that time of the year again. You go to lunch sweating in 34-degree heat, and you leave the office wading through ankle-deep puddles.",
      "Flash flood warnings are active for low-lying areas. Best advice? Park on higher ground and don't try to be a hero driving through flooded roads."
    ]
  }
];

export const todayInHistory = {
  date: "Today in History, roughly",
  story: "The first railway line in Malaysia (then Malaya) was opened between Taiping and Port Weld in 1885. It was a short 13km track built mainly to transport tin. Imagine a train made entirely for tin!"
};

export const kopiTalk = {
  title: "Kopi Talk",
  content: "Does anyone actually use their turn signals in KL? I saw three cars merge today via the 'telepathic stare' method. It's an art form, really, but maybe let's just stick to the blinking orange lights, yeah?"
};

export const marketMamak = {
  ringgit: "RM4.72 to USD",
  ringgitDirection: "down",
  bursa: "FBM KLCI 1,550.23",
  bursaDirection: "up",
  meaning: "Imported goods might cost a bit more, but our local listed companies are holding steady."
};

export const events = [
  "Food Festival @ Bukit Bintang (Sat-Sun)",
  "Live Jazz at The Blue Room (Fri)",
  "Platinum Casino Vegas Magic Show (Fri-Sat)",
  "Sunday Morning Car Boot Sale @ TTDI"
];

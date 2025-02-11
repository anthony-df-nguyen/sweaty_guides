export const evidence = [
  "EMF Level 5",
  "ESG Ghost Reaction",
  "Easel Canvas Drawing",
  "Ectoplasm Stains",
  "Fingerprints",
  "Freezing Temperatures",
  "Spirit Box Response",
] as const; // 👈 This makes the array readonly so we can infer its values as types

// Define Evidence as a union type of the values from the evidence array
export type Evidence = (typeof evidence)[number];
export type GhostData = {
  ghost: string;
  evidence: [Evidence, Evidence, Evidence]; // Ensures exactly 3 pieces of evidence
  description: string;
  strengths: string;
  weaknesses: string;
  tips?: string[];
  wiki: string;
};
export const ghostsData: GhostData[] = [
  {
    ghost: "Iblis",
    evidence: [
      "Easel Canvas Drawing",
      "ESG Ghost Reaction",
      "Spirit Box Response",
    ],
    description:
      "Iblis is known to be a type of ghost that can sense and see where its prey is, even from a distance. If you are close enough to the Iblis, you can hear it use words that other ghosts won´t.",
    strengths:
      "If it decides to hunt, it may be impossible to escape as it knows your location",
    weaknesses: "It moves more slowly if it is close to its target",
    tips: ["When facing an Iblis during a hunt, utilizing Hiding Spots provides no respite, as the ghost possesses an ability to locate players anywhere on the map.","During a hunt, Iblis exhibits rapid movement to approach the player's general vicinity; however, its speed significantly decreases as it draws nearer. This characteristic makes it relatively simple to outpace an Iblis, even without sprinting.","It appears that Iblis adheres to the standard hunting threshold of 50% average sanity, initiating hunts when player sanity levels reach this mark."],
    wiki: "https://demonologist.fandom.com/wiki/Iblis"
  },
  {
    ghost: "Revenant",
    evidence: ["Fingerprints", "Easel Canvas Drawing", "Freezing Temperatures"],
    description:
      "A Revenant is known to be a very dangerous, unpredictable ghost. Regardless of your sanity, it can hunt you down if it feels like it.",
    strengths: "They´re a very unstable ghost, very unpredictable.",
    weaknesses:
      "If it decides to stay calm, it may make it easier for you to find it.",
      wiki: "https://demonologist.fandom.com/wiki/Revenant"
  },
  {
    ghost: "Deogen",
    evidence: ["Fingerprints", "ESG Ghost Reaction", "Ectoplasm Stains"],
    description:
      "They are known to have no interest in anything other than the prey in its sights.",
    strengths:
      "They will be much more aggressive when hunting their chosen target.",
    weaknesses: "Less aggressive if its prey is not nearby.",
    tips: ["The Deogen chooses one player to go after when the game begins. Each time that player is in the ghost room ghost activity will spike and it will be more hunt prone if the overall sanity is low enough. Any player that is not the target will be completely ignored as long as the target is inside the house. In the event the target is dead or outside the building the Deogen hunts players indiscriminately. This means that the target can hide in a closet or hold a crucifix while the rest of the team performs an exorcism completely safely."],
    wiki: "https://demonologist.fandom.com/wiki/Deogen"
  },
  {
    ghost: "Poltergeist",
    evidence: ["Fingerprints", "ESG Ghost Reaction", "Spirit Box Response"],
    description:
      "A Poltergeist is known as a ghost that likes to play with its environment. It can throw objects to lower your sanity",
    strengths:
      "They can throw many things at once and can quickly lower your sanity.",
    weaknesses: "They will calm down when there is nothing left to throw.",
    wiki: "https://demonologist.fandom.com/wiki/Poltergeist",
  },
  {
    ghost: "Agash",
    evidence: ["Fingerprints", "Freezing Temperatures", "Ectoplasm Stains"],
    description:
      "Agash is a Ghost that feeds on cold environments. If an Agash decides to hunt, you can see its breath.",
    strengths: "It moves much faster in cold environments.",
    weaknesses: "Its movement may slow down in a warmer environment.",
    tips: ["Players can reliably identify Agash by observing its breath, visible during both hunts and ghost manifestations. This straightforward method eliminates the need for additional evidence. This method is timing dependent and should not be ruled out if the ghost has only been observed for short intervals.","Agash exhibits notably reduced movement speed when hunting outside its favourite room, due to the standard room temperature of 20 degrees Celsius in most other areas.", "It appears that Agash adheres to the standard hunting threshold of 50% average sanity, initiating hunts when player sanity levels reach this mark."],
    wiki: "https://demonologist.fandom.com/wiki/Agash"
  },
  {
    ghost: "Jinn",
    evidence: ["EMF Level 5", "Freezing Temperatures", "ESG Ghost Reaction"],
    description:
      "Jinns are known to be more active than other ghosts. It has been observed that they're more active if someone is nearby.",
    strengths: "Because it is a very active ghost, it is prone to hunting.",
    weaknesses: "Because it is very active, it reveals itself quickly.",
    tips: [
      "Jinn is the only ghost to have an inverted blinking pattern during hunts. It is visible for longer periods of time compared to all other ghosts.",
    ],
    wiki: "https://demonologist.fandom.com/wiki/Jinn"
  },
  {
    ghost: "Shade",
    evidence: [
      "Easel Canvas Drawing",
      "Ectoplasm Stains",
      "Spirit Box Response",
    ],
    description:
      "Shades are known as a ghost that are hypersensitive to light. They dislike being in brightly lit environments and always prefers the light to be off.",
    strengths: "They're more aggressive in the dark.",
    weaknesses: "A brightly lit environment will weaken the Shade.",
    wiki: "https://demonologist.fandom.com/wiki/Shade"
  },
  {
    ghost: "Hantu",
    evidence: [
      "Easel Canvas Drawing",
      "Freezing Temperatures",
      "Spirit Box Response",
    ],
    description:
      "Hantus are known as ghosts that play with people's minds through their speech. If you somehow manage to talk to one, it will play with your sanity, making you more vulnerable.",
    strengths: "Talking to you makes you easier prey for it.",
    weaknesses:
      "If it curses you by talking to you, you can remove the curse with Sanity Pills.",
    tips: [
      "Talking with a Hantu using the Spirit Box results in a sanity curse being placed on the player. Identifying a Hantu becomes straightforward by monitoring the sanity display for significant drops. Using Sanity Pills will remove this effect",
    ],
    wiki: "https://demonologist.fandom.com/wiki/Hantu"
  },
  {
    ghost: "Onryo",
    evidence: ["EMF Level 5", "Fingerprints", "Easel Canvas Drawing"],
    description:
      "Unlike other ghosts, Onryos are known as shy ghosts. They can choose one person, fall in love with them and attack anyone else.",
    strengths:
      "They will be much more aggressive if there are others with their chosen one.",
    weaknesses: "They will not harm the person they fall in love with.",
    wiki: "https://demonologist.fandom.com/wiki/Onryo"
  },
  {
    ghost: "Wraith",
    evidence: ["EMF Level 5", "Fingerprints", "Ectoplasm Stains"],
    description:
      "Wraith is known as a type of ghost that is very fond of its sleep. It doesn't like to be woken up. If you awaken a Wraith, you will have to suffer the consequences.",
    strengths:
      "Can teleport rooms and start hunting from anywhere inside the building",
    weaknesses:
      "It won't hunt while asleep. Talking to the Spirit Box, using the UV Light, and Candles will awaken it.",
    tips: [
      "It is theorized that the Wraith has teleportation abilities. It has been noted to teleport to the player, as well as start a hunt in a room that it is not haunting.",
    ],
    wiki: "https://demonologist.fandom.com/wiki/Wraith"
  },
  {
    ghost: "Oni",
    evidence: ["EMF Level 5", "Fingerprints", "Freezing Temperatures"],
    description:
      "The Oni has a special ability that can quickly reduce the sanity of those close to it. It is a very dangerous ghost. If it wants to, it can quickly play with your sanity and decide to kill you.",
    strengths: "It is known to be very fast.",
    weaknesses: "No data",
    wiki: "https://demonologist.fandom.com/wiki/Oni"
  },
  {
    ghost: "Myling",
    evidence: [
      "Freezing Temperatures",
      "Ectoplasm Stains",
      "Spirit Box Response",
    ],
    description:
      "We still haven't figured out how the Myling is related to fire, but it is known to have an affinity for it. We have observed that it is calmer in environments with fire nearby.",
    strengths: "If there is no fire around it, it will be aggressive.",
    weaknesses:
      "If there is a fire around it, it will put it out first before hunting.",
    tips: [
      "Mylings won't start hunting near a lit candle. This distinct behavior makes identifying them straightforward, as they abstain from hunting even when triggered by cursed objects. However, this trait lacks consistency in larger rooms due to the limited range of the candle.",
      "It appears that Myling adheres to the standard hunting threshold of 50% average sanity, initiating hunts when player sanity levels reach this mark.",
    ],
    wiki: "https://demonologist.fandom.com/wiki/Myling"
  },
  {
    ghost: "Thaye",
    evidence: ["Fingerprints", "Easel Canvas Drawing", "Spirit Box Response"],
    description: "The Thaye is known as a ghost who can distort the concept of time. As a Thaye ages quickly, it is impossible to know their exact age.",
    strengths: "A Thaye has been known to be much more aggressive and fast when they are young.",
    weaknesses: "A Thaye will move much slower and be less aggressive if they are older.",
    tips: ["Despite what the journal implies, Thayes do not appear to age. They consistently maintain high speed during hunts and they remain very active."," Thayes are regarded as the most dangerous ghosts in the game. Their high activity levels however result in the ghost revealing its evidence quickly.","Thayes can seemingly hunt regardless of sanity levels. Observations indicate they can initiate hunts even when average sanity is as high as 80%.","The response provided by the Ouija board to the question 'How old are you?' appears to bear no relevance to the age of Thayes."],
    wiki: "https://demonologist.fandom.com/wiki/Thaye"
  },
  {
    ghost: "Goryo",
    evidence: ["EMF Level 5", "Fingerprints", "ESG Ghost Reaction"],
    description: "A Goryo doesn't interact with ESGs if someone is nearby. Since it's a very rare type of ghost, we don't have much information other than that.",
    strengths: "Goryo does not interact with ESG if someone is nearby.",
    weaknesses: "We don't have any data.",
    wiki: "https://demonologist.fandom.com/wiki/Goryo"
  },
  {
    ghost: "Raiju",
    evidence: [
      "Freezing Temperatures",
      "ESG Ghost Reaction",
      "Ectoplasm Stains",
    ],
    description: "A Raiju is a ghost know to draw strength from solitude. Being alone may mean that you are easier prey for it. Raijus interact less when in a group.",
    strengths: "Lonely Targets are very good prey for them.",
    weaknesses: "Traveling in pack will make the Raiju more passive.",
    tips: ["The Raiju is very hunt prone while you are alone near or in its room, being in a group will make it less likely to hunt. It is important to note that the ghost is still very active regardless of whether or not players are alone or in a group nearby."],
    wiki: "https://demonologist.fandom.com/wiki/Raiju"
  },
  {
    ghost: "Demon",
    evidence: [
      "Easel Canvas Drawing",
      "Freezing Temperatures",
      "Ectoplasm Stains",
    ],
    description: "Demons are known as normally calm, collected ghosts. They have a lower prey drive than other types of ghosts, but if you manage to anger a demon, it will not stop until it kills you.",
    strengths: "If it decides to kill someone, it will be very hard to stop it.",
    weaknesses: "As long as you don´t make him angry, the Demon usually won´t hunt you.",
    tips: ["Demons start out very passive, and build aggression over time. This ghost is either very easy, or very difficult depending on how quickly you realise what it is. Early detection leads to an easy exorcism, late detection leads to an early departure or worse. If you notice the ghost is ramping up activity over time regardless of where your sanity is, it is likely a demon. Using UV, spirit box, speaking, etc in its room are likely to aggravate it.","Once the Demon starts hunting it does not stop until it either hits a salt pile, a crucifix, or kills someone. It also hunts often, double and triple hunts are very possibly. It is normal speed, and has no other unique behaviours."],
    wiki: "https://demonologist.fandom.com/wiki/Demon"
  },
  {
    ghost: "Mare",
    evidence: ["EMF Level 5", "Easel Canvas Drawing", "Freezing Temperatures"],
    description: "A Mare is a type of ghost that likes to talk, though it has been observed to be less active than other Ghosts.",
    strengths: "Difficult to detect.",
    weaknesses: "If there are someone nearby, it will not want to hunt.",
    wiki: "https://demonologist.fandom.com/wiki/Mare"
  },
  {
    ghost: "Yokai",
    evidence: ["EMF Level 5", "Easel Canvas Drawing", "Spirit Box Response"],
    description: "It is known as a ghost that is extremely sensitive to the concept of time. It is very punctual, time is everything for it. When you encounter a Yokai, it make be your last time if you don't take the time into consideration.",
    strengths: "It will be very active between 6-8, and 10-12 o'clock. It will hunt at least once between 8-10 o'clock.",
    weaknesses: "It will be calmer at hours other than 6-8 and 10-12. It will not react other than hunting between 8-10.",
    tips: ["The Yokai has increased activity between 6-8, and 10-12, it will hunt at least once during 8-10. The game's clock starts at 7 o'clock, which means getting a hunt between the 1st minute and the third minute of the game can indicate a Yokai","After 5 minutes (12 o'clock) the activity drops off steeply, you will observe very little activity, which is great for completing objectives, but poor for ghost identification"],
    wiki: "https://demonologist.fandom.com/wiki/Yokai"
  },
  {
    ghost: "Naamah",
    evidence: [
      "Easel Canvas Drawing",
      "ESG Ghost Reaction",
      "Ectoplasm Stains",
    ],
    description: "It is known to be a thief ghost. It has been observed that it behaves calmly to avoid attracting attention, and prefers to stay in the dark. It is seen that it relocates the tools.",
    strengths: "With its slyness, it can steal the tools on the ground, even the tools you hold.",
    weaknesses: "If the lights are on, it will turn them off before stealing the tools. If the tools are in the Salt Barrier, it won't be able to steal them.",
    tips: ["The Naamah has been noted to take a drastic toll on a player's sanity, possibly capable of greatly reducing sanity in chunks as large as 70% at a time. The trigger for this sanity drain is currently unknown","The Naamah will take your items and place them elsewhere, the ghost won't always choose one room and move the stolen items to the same place. There is no sanity level at which it steals items, it can steal things as soon as you enter the building."],
    wiki: "https://demonologist.fandom.com/wiki/Naamah"
  },
  {
    ghost: "Gul",
    evidence: ["Fingerprints", "Freezing Temperatures", "Spirit Box Response"],
    description: "The Gul is known as a ghost who listens to the conversations between people. The words you choose are important to it.",
    strengths: "They can get angry and hunt if you swear.",
    weaknesses: "It will be calmer if you don´t Talk too much.",
    wiki: "https://demonologist.fandom.com/wiki/Gul"
  },
  {
    ghost: "Abaddon",
    evidence: ["EMF Level 5", "Freezing Temperatures", "Spirit Box Response"],
    description: "The Abbadon is widely regarded as the most cunning type of ghost. They will not hunt their prey if they are defending themselves, but will usually hunt the defenseless.",
    strengths: "Selects targets that cannot defend themselves, very deadly.",
    weaknesses: "Has a strong chance to ignore you during a hunt when holding a Crucifix",
    wiki: "https://demonologist.fandom.com/wiki/Abaddon"
  },
  {
    ghost: "Boogey",
    evidence: ["EMF Level 5", "ESG Ghost Reaction", "Spirit Box Response"],
    description: "It is one of the most dangerous ghosts to find. It does not want to be found, so it has developed its own defense system. It has been observed that it draws power from items that create paranormal fields. It is thought Boogey does not like the lights to be off. If you dare to find it, you risk death.",
    strengths: "It will drain your sanity very quick if you use EMF, ESG and Spirit Box in its room.",
    weaknesses: "If there is a turned off light nearby, it will try to turn it on. Any lights nearby Boogey won't break.",
    wiki: "https://demonologist.fandom.com/wiki/Boogey"
  },
  {
    ghost: "Guipo",
    evidence: ["ESG Ghost Reaction", "Ectoplasm Stains", "Spirit Box Response"],
    description: "It is known as a ghost that loves to play games and can change its speed depending on the situation. It might want to play games with people. There is no danger when it's playing games but if it gets bored, it means you are in trouble. It has been observed that Guipos play with their victims for 6 to 8 minutes before deciding to kill them.",
    strengths: "It can trigger fake hunts to deceive you. Fake hunts will drain your sanity quickly. When it gets bored of playing games, it will try to kill you.",
    weaknesses: "If it has decided to kill you its speed will decrease to normal. It will move fast in their fake hunts. If he's playing games with you, you're safe.",
    tips: ["The Guipo is a mischievous ghost that will take a calm head to detect early on. Fake hunts can be triggered at high sanity and are a strong giveaway that you may be dealing with this ghost. If you're hunted early on and no one dies it's very likely it's a Guipo.","If you're concerned about differentiating a Guipo vs a Revenant, observe the ghost speed, a Revenant will be normal speed and catches up slowly. A Guipo will catch up quickly if it is fake hunting.", "Note: If you're playing on custom and have the 'looking at the ghost will kill you' setting enabled, looking at fake hunt Guipos will kill you."],
    wiki: "https://demonologist.fandom.com/wiki/Guipo"
  },
  {
    ghost: "Yurei",
    evidence: ["EMF Level 5", "ESG Ghost Reaction", "Ectoplasm Stains"],
    description: "The Yurei is a Ghost that prefers feeding small amounts of energy off multiple People at once, so that it can grow stronger without being noticed immediately.",
    strengths: "You are more likely to be hunted when traveling in groups.",
    weaknesses: "It may weaken itself if alone.",
    wiki: "https://demonologist.fandom.com/wiki/Yurei"
  },
];

function generateUsername() {
  const first = document.getElementById("firstName").value.trim();
  const last = document.getElementById("lastName").value.trim();

  if (!first || !last) {
    document.getElementById("result").innerText = "Please enter both names!";
    return;
  }

  const adjectives = [
    "crazy", "funny", "silly", "angry", "lazy", "weird",
    "sus", "based", "chad", "noob", "pog", "epic",
    "brainrot", "simp", "cheugy", "yeet", "vibe", "clout",
    "lit", "thicc", "snatched", "slaps", "ghost", "flex",
    "lowkey", "salty", "woke", "shady", "stoked", "deadass",
    "glitchy", "rekt", "savage", "cringe", "dope", "flexin",
    "drip", "boujee", "snacc", "extra", "suspect", "rekt",
    "fomo", "glitched", "fire", "thirsty", "spill", "hype",
    "bussin", "vibin", "swole", "blessed", "clapped"
  ];

const suffixes = [
  "42", "TheBoss", "XD", "X", "TheWaffle", "OnMars",
  "420", "UwU", "Cat", "Z", "LOL", "Fomo",
  "Nani", "Flex", "Cringe", "Baka", "Sussy",
  "LOLZ", "BFF", "Troll", "LMAO", "AF", "BRB",
  "CEO", "NoCap", "Yeet", "LitAF", "GOAT", "Dank",
  "Beta", "Alpha", "Ghost", "WTF", "Bruh", "Kappa",
  "UwU", "OwO", "XD", "GG", "AFK", "Poggers",
  "Zaddy", "Fam", "Vibe", "Skrrt", "Cap", "BigBrain",
  "Sus", "Thot", "Karen", "FOMO", "Slay", "CloutChaser"
];

  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const suf = suffixes[Math.floor(Math.random() * suffixes.length)];

  const username = `${adj}${first}${suf}`;
  document.getElementById("result").innerText = `😎 Your username: ${username}`;
}
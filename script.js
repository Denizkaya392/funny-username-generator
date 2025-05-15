// Dark mode toggle
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    darkModeToggle.textContent = "☀️";
  } else {
    darkModeToggle.textContent = "🌙";
  }
});

// Username generator
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

function generateUsername() {
  const first = document.getElementById("firstName").value.trim();
  const last = document.getElementById("lastName").value.trim();

  if (!first || !last) {
    document.getElementById("result").innerText = "Please enter both names!";
    return;
  }

  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const suf = suffixes[Math.floor(Math.random() * suffixes.length)];

  const username = `${adj}${first}${suf}`;
  document.getElementById("result").innerText = `😎 Your username: ${username}`;
}

document.getElementById("generateBtn").addEventListener("click", generateUsername);

// Mouse takip eden efekt
const mouseEffect = document.getElementById("mouseEffect");
window.addEventListener("mousemove", e => {
  mouseEffect.style.top = e.clientY + "px";
  mouseEffect.style.left = e.clientX + "px";
});

// Kayan kullanıcı adları - örnek isimler oluşturuyoruz
const scrollingContainer = document.querySelector(".scrolling-usernames");

// Rastgele username üretmek için fonksiyon (sadece gösterim için)
function randomUsername() {
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const suf = suffixes[Math.floor(Math.random() * suffixes.length)];
  const nameSample = ["alex", "sam", "max", "jordan", "taylor", "morgan", "casey", "riley", "jamie", "drew"];
  const name = nameSample[Math.floor(Math.random() * nameSample.length)];
  return `${adj}${name}${suf}`;
}

// 50 tane rastgele kullanıcı adı oluşturup yan yana string yapıyoruz
let usernamesList = "";
for (let i = 0; i < 50; i++) {
  usernamesList += randomUsername() + "  •  ";
}
scrollingContainer.textContent = usernamesList;
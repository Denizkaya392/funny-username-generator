function generateUsername() {
  const first = document.getElementById("firstName").value.trim();
  const last = document.getElementById("lastName").value.trim();

  if (!first || !last) {
    document.getElementById("result").innerText = "Please enter both names!";
    return;
  }

  const adjectives = ["crazy", "funny", "silly", "angry", "lazy", "weird"];
  const suffixes = ["42", "TheBoss", "XD", "X", "TheWaffle", "OnMars"];

  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const suf = suffixes[Math.floor(Math.random() * suffixes.length)];

  const username = `${adj}${first}${suf}`;
  document.getElementById("result").innerText = `😎 Your username: ${username}`;
}

import "./style.css";

const app = document.getElementById("app");

function createButton(text, id, classes) {
  const btn = document.createElement("button");
  btn.textContent = text;
  btn.id = id;
  btn.className = classes + " transition absolute";
  return btn;
}

function render() {
  app.innerHTML = `
    <h1 class="text-5xl font-bold mb-8">Hey Pookie! Will you be my Valentine? 💘</h1>
    <div id="buttons" class="relative h-48"></div>
  `;

  const buttonsDiv = document.getElementById("buttons");

  const yesBtn = createButton(
    "Yes ❤️",
    "yesBtn",
    "bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-xl text-lg"
  );

  const noBtn = createButton(
    "No 💔",
    "noBtn",
    "bg-white text-red-500 border-2 border-red-500 px-8 py-3 rounded-xl text-lg"
  );

  buttonsDiv.appendChild(yesBtn);
  buttonsDiv.appendChild(noBtn);

  yesBtn.addEventListener("click", yesClicked);
  noBtn.addEventListener("mouseenter", moveNoButton);
}

function yesClicked() {
  app.innerHTML = `
    <h1 class="text-6xl font-bold text-red-600 mb-4">Yay!!! 💖</h1>
    <p class="text-2xl">I knew you'd say yes, Pookie! 🥰</p>
  `;
  launchConfetti();
}

// Move "No" button to a random place
function moveNoButton() {
  const noBtn = document.getElementById("noBtn");
  const parent = document.getElementById("buttons");
  const parentRect = parent.getBoundingClientRect();

  const x = Math.random() * (parentRect.width - noBtn.offsetWidth);
  const y = Math.random() * (parentRect.height - noBtn.offsetHeight);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

// Confetti animation
function launchConfetti() {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.backgroundColor = `hsl(${Math.random()*360}, 70%, 60%)`;
    confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
  }
}

render();

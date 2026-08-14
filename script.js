// Terminal typing effect
const typedEl = document.getElementById('typed');
const outputEl = document.getElementById('output');
const message = "whoami";

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function typeText(el, text, speed, onDone) {
  if (prefersReducedMotion) {
    el.textContent = text;
    if (onDone) onDone();
    return;
  }
  let i = 0;
  function step() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(step, speed);
    } else if (onDone) {
      onDone();
    }
  }
  step();
}

typeText(typedEl, message, 90, () => {
  outputEl.innerHTML =
    '<span class="highlight">Rajshree Sinha</span> — 3rd-year CSE undergrad.<br>' +
    'Building things, breaking things, learning from both.';
  setTimeout(() => outputEl.classList.add('show'), 200);
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

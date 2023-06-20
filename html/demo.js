const container = document.getElementById("container");

const text = container.innerText;

let chars = text.split(" ").map((word, lineIdx) => word.split("").map((char, charIdx) => {
      const child = document.createElement("span");
    child.classList.add("char");
    child.innerHTML = char;
  return child
}))

container.innerHTML = "";

for(const line of chars) {
  for(const char of line) {
    container.appendChild(char)

    
  }
      const child = document.createElement("span");
    child.classList.add("char");
    child.innerHTML = " ";
    container.appendChild(child)
}

chars = chars.flat();

let lastUpdate = Date.now();

const mouseOverEvent = (event) => {
  const now = Date.now();
  if(now - lastUpdate < 100) return;
  
  const x = event.touches ? event.touches[0].clientX : event.clientX;
  const y = event.touches ? event.touches[0].clientY : event.clientY;
  
  anime({
    targets: chars,
    fontWeight: function(el) {
      const rect = el.getBoundingClientRect();
      const distance = Math.hypot(x - rect.x, y - rect.y);
      const normed = Math.min(1, Math.pow( 1.2 - (distance / 500), 5))
      const newWeight = Math.max(50, normed * 700)
      return newWeight
    },
    easing: 'linear',
    duration: 100
  })
  lastUpdate = Date.now()
}

const reset = () => {
  anime({
    targets: chars,
    fontWeight: 50,
    duration: 100
  })
}


container.addEventListener("mousemove", mouseOverEvent)
container.addEventListener("mouseleave", reset);
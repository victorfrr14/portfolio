

// LOADER
window.addEventListener("load", () => {

  document.querySelector(".loader").style.opacity = "0";

  setTimeout(() => {
    document.querySelector(".loader").style.display = "none";
  }, 500);

});

// THEME SYSTEM
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;
const icon = toggleBtn.querySelector("i");

// SYSTEM THEME
const systemTheme = window.matchMedia("(prefers-color-scheme: light)").matches;

// LOCAL STORAGE
const savedTheme = localStorage.getItem("theme");

if(savedTheme){

  body.classList.toggle("light-mode", savedTheme === "light");

}else{

  body.classList.toggle("light-mode", systemTheme);

}

updateIcon();

toggleBtn.addEventListener("click", () => {

  body.classList.toggle("light-mode");

  const isLight = body.classList.contains("light-mode");

  localStorage.setItem("theme", isLight ? "light" : "dark");

  updateIcon();

});

function updateIcon(){

  if(body.classList.contains("light-mode")){

    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");

  }else{

    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");

  }

}

// TYPING EFFECT
const typing = document.querySelector(".typing");

const texts = [

  "Desenvolvedor Web",
  "Especialista em Tecnologia",
  "Designer Criativo",
  "Gestor de TI"

];

let textIndex = 0;
let charIndex = 0;

function typeEffect(){

  if(charIndex < texts[textIndex].length){

    typing.textContent += texts[textIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeEffect, 80);

  }else{

    setTimeout(eraseEffect, 1500);

  }

}

function eraseEffect(){

  if(charIndex > 0){

    typing.textContent = texts[textIndex].substring(0, charIndex - 1);

    charIndex--;

    setTimeout(eraseEffect, 40);

  }else{

    textIndex++;

    if(textIndex >= texts.length){

      textIndex = 0;

    }

    setTimeout(typeEffect, 500);

  }

}

typeEffect();

// REVEAL SCROLL
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

  reveals.forEach((el) => {

    const top = el.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){

      el.classList.add("active");

    }

  });

});

// COUNTER
const counters = document.querySelectorAll("[data-target]");

const speed = 100;

counters.forEach(counter => {

  const updateCount = () => {

    const target = +counter.getAttribute("data-target");

    const count = +counter.innerText;

    const increment = target / speed;

    if(count < target){

      counter.innerText = Math.ceil(count + increment);

      setTimeout(updateCount, 20);

    }else{

      counter.innerText = target;

    }

  };

  updateCount();

});

// MODAL
const modal=document.querySelector(".modal");

const modalTitle=
document.getElementById("modal-title");

const modalDescription=
document.getElementById("modal-description");

document
.querySelectorAll(".open-modal")

.forEach(button=>{

button.addEventListener("click",()=>{

modalTitle.textContent=
button.dataset.title;

modalDescription.textContent=
button.dataset.description;

modal.style.display="flex";

});

});

document
.querySelector(".close-modal")

.addEventListener("click",()=>{

modal.style.display="none";

});

window.addEventListener("click",(e)=>{

if(e.target===modal){

modal.style.display="none";

}

});

// CUSTOM CURSOR
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

});

// PARTICLES
const particles = document.getElementById("particles");

for(let i = 0; i < 40; i++){

  const span = document.createElement("span");

  span.style.left = Math.random() * 100 + "%";
  span.style.animationDuration = (Math.random() * 10 + 5) + "s";
  span.style.width = span.style.height =
    Math.random() * 5 + 2 + "px";

  particles.appendChild(span);

}

const form = document.getElementById("contact-form");
const submitBtn = document.getElementById("submit-btn");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    submitBtn.innerHTML = "Processando dados...";
    submitBtn.disabled = true;

    const formData = new FormData(form);

    try {

        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbwOntP9unmUDYzDeE94i6TLJSecwrhr2g1XS7O8vY5nm8Wkf0cuzawlAHk1HeQpUtUD_g/exec",
          {
            method: "POST",
            body: formData
          }
        );

        const result = await response.text();

        console.log(result);

        if (result === "OK") {

            submitBtn.innerHTML = "Enviado";

            setTimeout(() => {

                alert("Mensagem enviada com sucesso!");

                form.reset();

                submitBtn.innerHTML = "Enviar Mensagem";
                submitBtn.disabled = false;

            }, 1000);

        } else {

            console.error(result);

            submitBtn.innerHTML = "Erro";

            setTimeout(() => {

                submitBtn.innerHTML = "Enviar Mensagem";
                submitBtn.disabled = false;

            }, 1500);

        }

    } catch (error) {

        console.error(error);

        submitBtn.innerHTML = "Erro";

        setTimeout(() => {

            submitBtn.innerHTML = "Enviar Mensagem";
            submitBtn.disabled = false;

        }, 1500);

    }

});

const glow = document.getElementById("cursor-glow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});
const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    menu.textContent = navLinks.classList.contains("active")
        ? "✕"
        : "☰";
});
const enlaces = document.querySelectorAll(".nav-links a");

enlaces.forEach(enlace => {
    enlace.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menu.innerHTML = "☰";
    });
});

document.addEventListener("DOMContentLoaded", () => {

    const counters = document.querySelectorAll(".cz_counter_num");
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.count);
                let current = 0;
                const duration = 3000;
                const steps = 60;
                const increment = target / steps;

                const interval = setInterval(() => {

                    current += increment;

                    if (current >= target) {
                        counter.textContent = target;
                        clearInterval(interval);
                    } else {
                        counter.textContent = Math.floor(current);
                    }

                }, duration / steps);

                // Evita que vuelva a ejecutarse
                observer.unobserve(counter);
            }

        });

    }, {
        threshold: 0.8
    });

    counters.forEach(counter => observer.observe(counter));

});


const cards = document.querySelectorAll(".card");
const btnAnterior = document.getElementById("anterior");
const btnSiguiente = document.getElementById("siguiente");

let rotacion = 0;
const total = cards.length;

function actualizarCarrusel(){

    cards.forEach((card, index) => {

        const angulo = ((360 / total) * index) + rotacion;

        card.style.transform =
            `rotateY(${angulo}deg) translateZ(450px)`;

    });

}

btnSiguiente.addEventListener("click", () => {
    rotacion -= 360 / total;
    actualizarCarrusel();
});

btnAnterior.addEventListener("click", () => {
    rotacion += 360 / total;
    actualizarCarrusel();
});

actualizarCarrusel();

window.addEventListener("load", () => {
    document.querySelector(".imagen-deinicio")
        .classList.add("activo");
});




if(window.innerWidth <= 768){

    card.style.transform = `
        translateX(0px)
        translateZ(0px)
        scale(${index === actual ? 1 : 0.8})
    `;

    card.style.opacity = index === actual ? 1 : 0;
}



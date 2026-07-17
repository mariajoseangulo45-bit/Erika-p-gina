/* ========================= */
/* MENU HAMBURGUESA */
/* ========================= */

const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

if (menu && navLinks) {

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

}


/* ========================= */
/* CONTADORES */
/* ========================= */

document.addEventListener("DOMContentLoaded", () => {

    const counters = document.querySelectorAll(".cz_counter_num");

    if(counters.length > 0){

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

                            counter.textContent =
                                Math.floor(current);

                        }

                    }, duration / steps);

                    observer.unobserve(counter);
                }

            });

        }, {
            threshold: 0.8
        });

        counters.forEach(counter => {
            observer.observe(counter);
        });

    }

});


/* ========================= */
/* CARRUSEL 3D (.card) */
/* ========================= */

const cards = document.querySelectorAll(".card");
const btnAnterior = document.getElementById("anterior");
const btnSiguiente = document.getElementById("siguiente");

if(cards.length > 0 && btnAnterior && btnSiguiente){

    let rotacion = 0;
    const total = cards.length;

    function actualizarCarrusel(){

        cards.forEach((card, index) => {

            const angulo =
                ((360 / total) * index) + rotacion;

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

}


/* ========================= */
/* ANIMACION IMAGEN HERO */
/* ========================= */

window.addEventListener("load", () => {

    const imagenInicio =
        document.querySelector(".imagen-deinicio");

    if(imagenInicio){
        imagenInicio.classList.add("activo");
    }

});


/* ========================= */
/* CARRUSEL TARJETONES */
/* ========================= */

const skillsCarousel = document.getElementById("carousele");

document.getElementById("next").onclick = () => {
    skillsCarousel.scrollTo({
        left: skillsCarousel.scrollLeft + 350,
        behavior: "smooth"
    });

    console.log("nuevo:", skillsCarousel.scrollLeft);
};

document.getElementById("prev").onclick = () => {
    skillsCarousel.scrollTo({
        left: skillsCarousel.scrollLeft - 350,
        behavior: "smooth"
    });

    console.log("nuevo:", skillsCarousel.scrollLeft);
};

/* ========================= */
/* MODAL TARJETONES */
/* ========================= */

const modal =
    document.getElementById("modal");

const modalTitle =
    document.getElementById("modal-title");

const modalDescription =
    document.getElementById("modal-description");

const buttons =
    document.querySelectorAll(".btn-modal");

const closeBtn =
    document.querySelector(".close");

if(
    modal &&
    modalTitle &&
    modalDescription &&
    closeBtn
){

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            modalTitle.textContent =
                button.dataset.title;

            modalDescription.textContent =
                button.dataset.description;

            modal.classList.add("active");

        });

    });

    closeBtn.addEventListener("click", () => {

        modal.classList.remove("active");

    });

    window.addEventListener("click", (e) => {

        if(e.target === modal){

            modal.classList.remove("active");

        }

    });

}
console.log(skillsCarousel);


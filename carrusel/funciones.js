const cards = document.querySelectorAll(".card");

let offset = 0;

function obtenerConfiguracionResponsive(){

    if(window.innerWidth <= 480){

        return {
            radio: 280,
            centroX: 80,
            centroY: 180,
            separacion: 50
        };

    }

    if(window.innerWidth <= 768){

        return {
            radio: 380,
            centroX: 120,
            centroY: 220,
            separacion: 22
        };

    }

    if(window.innerWidth <= 1024){

        return {
            radio: 500,
            centroX: 170,
            centroY: 260,
            separacion: 26
        };

    }

    return {
        radio: 620,
        centroX: 200,
        centroY: 300,
        separacion: 30
    };
}

function actualizarPosiciones(){

    const config = obtenerConfiguracionResponsive();

    const radio = config.radio;
    const centroX = config.centroX;
    const centroY = config.centroY;
    const separacion = config.separacion;

    cards.forEach((card,index)=>{

        const totalCards = cards.length;

        const posicionCircular =
            ((index + offset) % totalCards + totalCards) % totalCards;

        let anguloDeg;

if(window.innerWidth <= 480){

    anguloDeg = posicionCircular * (360 / totalCards);

}else{

    anguloDeg = -60 + (posicionCircular * separacion);

}

        const angulo = anguloDeg * Math.PI / 180;

        const x = centroX + Math.cos(angulo) * radio;
        const y = centroY + Math.sin(angulo) * radio;

        card.style.left = `${x}px`;
        card.style.top = `${y}px`;

        const distanciaCentro = Math.abs(anguloDeg);

        const escala = Math.max(
            window.innerWidth <= 768 ? 0.55 : 0.65,
            1 - (distanciaCentro / 120)
        );

        const opacidad = Math.max(
            0.2,
            1 - (distanciaCentro / 90)
        );

        card.style.transform = `
            translate(-50%, -50%)
            scale(${escala})
        `;

        card.style.opacity = opacidad;

        card.style.zIndex = Math.round(
            100 - distanciaCentro
        );

    });

}

actualizarPosiciones();

window.addEventListener("resize", actualizarPosiciones);

actualizarPosiciones();

document.getElementById("down").addEventListener("click", () => {
    offset--;
    actualizarPosiciones();
});

document.getElementById("up").addEventListener("click", () => {
    offset++;
    actualizarPosiciones();
});


/*---------------*/
// Seleccionamos TODAS las tarjetas del carrusel
const tarjetas = document.querySelectorAll(".card");

tarjetas.forEach((tarjeta) => {
    // Dentro de cada tarjeta buscamos SU botón, SU modal y SU botón de cerrar
    const btnAbrir = tarjeta.querySelector(".btnAbrir");
    const modal = tarjeta.querySelector(".modal");
    const btnCerrar = tarjeta.querySelector(".btnCerrar");

    btnAbrir.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    btnCerrar.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Cerrar al hacer clic fuera de la tarjeta modal
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});


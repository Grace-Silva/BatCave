document.addEventListener("DOMContentLoaded", changeColor());

// cambiar el color de enfásis:
function changeColor() {
    const batButton = document.getElementById("batSign");
    // colors:
    const colorOptions = [
        /* blue: default */ "#00a2ff",
        /* red: */ "#FF204E",
        /* yellow */ "#FFC700",
        /* green */ "#00ff9d"
    ];
    let currentTheme = 0;

    // usar azul por defecto:
    const savedTheme = localStorage.getItem("emphasisColor");
    document.documentElement.style.setProperty("--emphasisColor", savedTheme);

    const themeIndex = colorOptions.indexOf(savedTheme);

    if (themeIndex>=0) {
        currentTheme = themeIndex;
    } else {
        currentTheme = 0;    
    }

    // cambiar el color al pulsar el botón:
    batButton.addEventListener("click", function(){
        currentTheme = (currentTheme+1)%colorOptions.length;
        const newColor = colorOptions[currentTheme];

        document.documentElement.style.setProperty("--emphasisColor", newColor);
        localStorage.setItem("emphasisColor", newColor);

    });
}


// ajustar el ancho de la línea de tiempo:
const timeline = document.getElementById('timeline');
const items = document.querySelectorAll('.timeline-item');

// Establece el número total de items como variable CSS
timeline.style.setProperty('--total-items', items.length);


/* avance horizontal */
const timeLine = document.getElementById("timeline");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

prevBtn.addEventListener('click', () => {
  timeLine.scrollBy({ left: -200, behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
  timeLine.scrollBy({ left: 200, behavior: 'smooth' });
});

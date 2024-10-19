document.getElementById('generar-artista').addEventListener('click', function () {
    const ruleta = document.getElementById('ruleta');
    const letras = document.querySelectorAll('.letra');
    const letraSeleccionada = document.getElementById('letra-seleccionada');
    const arlequinImgSexo = document.getElementById('arlequin-img-sexo');
    const arlequinImgIdioma = document.getElementById('arlequin-img-idioma');
    const cardSexo = document.getElementById('card-sexo');
    const cardIdioma = document.getElementById('card-idioma');
    const sexoText = document.getElementById('sexo');
    const idiomaText = document.getElementById('idioma');

    // Limpiar selección previa
    letras.forEach(letra => letra.classList.remove('selected'));
    letraSeleccionada.textContent = '?'; // Limpiar la letra seleccionada
    arlequinImgSexo.style.display = 'none'; // Ocultar imagen de Arlequín en sexo
    arlequinImgIdioma.style.display = 'none'; // Ocultar imagen de Arlequín en idioma
    sexoText.textContent = '?'; // Reiniciar el texto del sexo
    idiomaText.textContent = '?'; // Reiniciar el texto del idioma

    // Rotar la ruleta aleatoriamente
    const randomRotation = Math.floor(Math.random() * 360) + 720; // 720 para dar mínimo 2 vueltas completas
    ruleta.style.transform = `rotate(${randomRotation}deg)`;

    // Obtener letra seleccionada
    setTimeout(() => {
        const selectedAngle = (randomRotation % 360);
        const index = Math.round(selectedAngle / 13.84) % 26; // Dividido por los grados por letra
        const letraElegida = letras[index];
        letraElegida.classList.add('selected');
        letraSeleccionada.textContent = letraElegida.textContent;
    }, 5000); // Detener tras 5 segundos

    // Generar sexo aleatorio, incluyendo Arlequín
    const sexos = ['Hombre', 'Mujer', 'Arlequín'];
    const sexoSeleccionado = sexos[Math.floor(Math.random() * sexos.length)];

    // Generar idioma aleatorio, incluyendo Arlequín
    const idiomas = ['Español', 'Inglés', 'Otro', 'Arlequín'];
    const idiomaSeleccionado = idiomas[Math.floor(Math.random() * idiomas.length)];

    // Mostrar imagen de Arlequín en la tarjeta correspondiente y ocultar el texto
    if (sexoSeleccionado === 'Arlequín') {
        arlequinImgSexo.style.display = 'block'; // Mostrar imagen en la tarjeta de sexo
        sexoText.textContent = ''; // Quitar el texto si es Arlequín
    } else {
        sexoText.textContent = sexoSeleccionado; // Mostrar el texto de Hombre o Mujer
    }

    if (idiomaSeleccionado === 'Arlequín') {
        arlequinImgIdioma.style.display = 'block'; // Mostrar imagen en la tarjeta de idioma
        idiomaText.textContent = ''; // Quitar el texto si es Arlequín
    } else {
        idiomaText.textContent = idiomaSeleccionado; // Mostrar el texto de Español, Inglés u Otro
    }

    // Reiniciar el temporizador
    clearInterval(timerInterval); // Limpiar cualquier intervalo previo
    startTimer(45); // Iniciar el temporizador en 45 segundos
});

// Temporizador
let timerInterval;

function startTimer(duration) {
    let timer = duration, minutes, seconds;
    const timerElement = document.getElementById('timer');
    timerElement.classList.remove('timer-red'); // Quitar parpadeo rojo

    timerInterval = setInterval(() => {
        minutes = Math.floor(timer / 60);
        seconds = timer % 60;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        timerElement.textContent = `${minutes}:${seconds}`;

        if (--timer < 0) {
            clearInterval(timerInterval); // Detener el temporizador
            timerElement.textContent = "00:00";
            timerElement.classList.add('timer-red'); // Activar parpadeo rojo
        }
    }, 1000);
}





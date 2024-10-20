document.getElementById('generar-artista').addEventListener('click', function () {
    const ruleta = document.getElementById('ruleta');
    const letras = document.querySelectorAll('.letra');
    const letraSeleccionada = document.getElementById('letra-seleccionada');
    const arlequinImgSexo = document.getElementById('arlequin-img-sexo');
    const arlequinImgIdioma = document.getElementById('arlequin-img-idioma');
    const sexoText = document.getElementById('sexo');
    const idiomaText = document.getElementById('idioma');

    // Limpiar selección previa
    letras.forEach(letra => letra.classList.remove('selected'));
    letraSeleccionada.textContent = '?';
    arlequinImgSexo.style.display = 'none';
    arlequinImgIdioma.style.display = 'none';
    sexoText.textContent = '?';
    idiomaText.textContent = '?';

    // Rotar la ruleta aleatoriamente con al menos 2 vueltas completas
    const vueltasMinimas = 720; // 720 grados para 2 vueltas completas
    const randomRotation = vueltasMinimas + Math.floor(Math.random() * 360); // Sumamos entre 0 y 360 grados adicionales
    ruleta.style.transition = 'transform 1s ease-out'; // Velocidad rápida de 1 segundo
    ruleta.style.transform = `rotate(${randomRotation}deg)`; // Aplicar rotación

    // Obtener la letra seleccionada cuando la ruleta se detenga
    setTimeout(() => {
        const selectedAngle = (randomRotation % 360); // Ángulo final
        const degreesPerLetter = 360 / letras.length; // Asumiendo 26 letras, cada una ocupa 360/26 grados
        const index = Math.round((360 - selectedAngle) / degreesPerLetter) % letras.length; // Calcular el índice de la letra
        const letraElegida = letras[index]; // Letra seleccionada
        letraElegida.classList.add('selected'); // Marcar la letra seleccionada visualmente
        letraSeleccionada.textContent = letraElegida.textContent; // Mostrar la letra seleccionada en el centro
    }, 1000); // El tiempo debe coincidir con la duración de la animación (1 segundo)

    // Generar sexo aleatorio, incluyendo Arlequín
    const sexos = ['Hombre', 'Mujer', 'Arlequín'];
    const sexoSeleccionado = sexos[Math.floor(Math.random() * sexos.length)];

    // Generar idioma aleatorio, incluyendo Arlequín
    const idiomas = ['Solista', 'Banda', 'Arlequín'];
    const idiomaSeleccionado = idiomas[Math.floor(Math.random() * idiomas.length)];

    // Mostrar imagen de Arlequín en la tarjeta correspondiente y ocultar el texto
    if (sexoSeleccionado === 'Arlequín') {
        arlequinImgSexo.style.display = 'block';
        sexoText.textContent = '';
    } else {
        sexoText.textContent = sexoSeleccionado;
    }

    if (idiomaSeleccionado === 'Arlequín') {
        arlequinImgIdioma.style.display = 'block';
        idiomaText.textContent = '';
    } else {
        idiomaText.textContent = idiomaSeleccionado;
    }

    // Reiniciar el temporizador
    clearInterval(timerInterval);
    startTimer(60);
});

// Temporizador
let timerInterval;

function startTimer(duration) {
    let timer = duration, minutes, seconds;
    const timerElement = document.getElementById('timer');
    timerElement.classList.remove('timer-red');

    timerInterval = setInterval(() => {
        minutes = Math.floor(timer / 60);
        seconds = timer % 60;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        timerElement.textContent = `${minutes}:${seconds}`;

        if (--timer < 0) {
            clearInterval(timerInterval);
            timerElement.textContent = "00:00";
            timerElement.classList.add('timer-red');
        }
    }, 1000);
}







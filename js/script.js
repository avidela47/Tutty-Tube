document.getElementById('generar-artista').addEventListener('click', function () {
    const ruleta = document.getElementById('ruleta');
    const letras = document.querySelectorAll('.letra');
    const letraSeleccionada = document.getElementById('letra-seleccionada');
    const timerElement = document.getElementById('timer');

    // Limpiar selección previa
    letras.forEach(letra => letra.classList.remove('selected'));
    letraSeleccionada.textContent = '?'; // Limpiar la letra seleccionada

    // Rotar la ruleta aleatoriamente
    const randomRotation = Math.floor(Math.random() * 360) + 720; // 720 para dar mínimo 2 vueltas completas
    ruleta.style.transform = `rotate(${randomRotation}deg)`;

    // Obtener letra seleccionada
    setTimeout(() => {
        const selectedAngle = (randomRotation % 360);
        const index = Math.round(selectedAngle / 13.84) % 26; // Dividido por los grados por letra

        const letraElegida = letras[index];
        letraElegida.classList.add('selected');

        // Mostrar letra en el centro
        letraSeleccionada.textContent = letraElegida.textContent;
    }, 5000); // Detener tras 5 segundos

    // Generar sexo aleatorio
    const sexos = ['Hombre', 'Mujer'];
    const sexoSeleccionado = sexos[Math.floor(Math.random() * sexos.length)];
    document.getElementById('sexo').textContent = sexoSeleccionado;

    // Generar idioma aleatorio
    const idiomas = ['Español', 'Inglés'];
    const idiomaSeleccionado = idiomas[Math.floor(Math.random() * idiomas.length)];
    document.getElementById('idioma').textContent = idiomaSeleccionado;

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

        minutes = minutes < 10 ? '0' + minutes : minutes;  // Formatear los minutos con dos dígitos
        seconds = seconds < 10 ? '0' + seconds : seconds;  // Formatear los segundos con dos dígitos

        timerElement.textContent = `${minutes}:${seconds}`;

        if (--timer < 0) {
            clearInterval(timerInterval); // Detener el temporizador
            timerElement.textContent = "00:00";
            timerElement.classList.add('timer-red'); // Activar parpadeo rojo
        }
    }, 1000);
}




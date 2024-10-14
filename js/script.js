document.getElementById('generar-artista').addEventListener('click', function () {
    const ruleta = document.getElementById('ruleta');
    const letras = document.querySelectorAll('.letra');
    const letraSeleccionada = document.getElementById('letra-seleccionada');

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
});


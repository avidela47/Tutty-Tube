// Espera a que el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    const generarBtn = document.getElementById('generarBtn');
    const result = document.getElementById('result');
    const result2 = document.getElementById('result2');
    const result3 = document.getElementById('result3');

    // Agregar el evento de clic al botón
    generarBtn.addEventListener('click', function() {
        let firstname = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        let sexo = ["Hombre", "Mujer"];
        let idioma = ["Español", "Inglés"];

        let rand_first = Math.floor(Math.random() * firstname.length);
        let rand_sexo = Math.floor(Math.random() * sexo.length);
        let rand_idioma = Math.floor(Math.random() * idioma.length);

        result.innerHTML = "<h1>Letra:</h1><div class='alert alert-success'><h2>" + firstname[rand_first] + "</h2></div>";
        result2.innerHTML = "<h1>Sexo:</h1><div class='alert alert-success'><h2>" + sexo[rand_sexo] + "</h2></div>";
        result3.innerHTML = "<h1>Idioma:</h1><div class='alert alert-success'><h2>" + idioma[rand_idioma] + "</h2></div>";

        // Muestra los resultados
        result.style.display = 'block';
        result2.style.display = 'block';
        result3.style.display = 'block';
    });
});





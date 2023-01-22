function generate(){
	let firstname = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
	let sexo= ["Hombre", "Mujer", ];
	let idioma= ["Español", "Ingles", ];
	let rand_first = Math.floor(Math.random()*firstname.length); 
	let rand_last = Math.floor(Math.random()*sexo.length);
	let rand_idiom = Math.floor(Math.random()*idioma.length); 
	document.getElementById('result').innerHTML = "<h1>Letra:</h1><div class='alert alert-success'><h2>"+firstname[rand_first]+"</h2></div>";
	document.getElementById('result2').innerHTML = "<h1>Sexo:</h1><div class='alert alert-success'><h2>"+sexo[rand_last]+"</h2></div>";
	document.getElementById('result3').innerHTML = "<h1>Idioma:</h1><div class='alert alert-success'><h2>"+idioma[rand_idiom]+"</h2></div>";
	
}




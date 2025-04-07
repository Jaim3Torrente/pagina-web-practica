// script.js

// Datos de las descripciones de los personajes
const personajes = {
    'Jonathan Joestar': 'Jonathan Joestar es el protagonista principal de la Parte 1. Es un joven noble y valiente que lucha contra Dio Brando, quien se convierte en su archienemigo.',
    'Dio Brando': 'Dio Brando es el antagonista principal de la Parte 1. Un villano despiadado que busca obtener poder absoluto a través de la Máscara de Piedra.',
    'Speedwagon': 'Robert E. O. Speedwagon es un aliado de Jonathan Joestar y se convierte en su amigo cercano durante la Parte 1. Es un experto en negocios y un gran luchador.',
    'Will Anthonio Zeppeli': 'Zeppeli es un maestro de la técnica del Hamon que enseña a Jonathan Joestar a luchar contra Dio Brando.',
    'Joseph Joestar': 'Joseph Joestar es el protagonista de la Parte 2. Nieto de Jonathan, es un joven ingenioso y astuto que lucha contra los Hombres del Pilar.',
    'César Zeppeli': 'César Zeppeli es el aliado y amigo de Joseph Joestar en la Parte 2. Viene de una familia que ha luchado contra los enemigos con el Hamon durante generaciones.',
    'Lisa Lisa': 'Lisa Lisa es una maestra de la técnica del Hamon y una figura clave en la formación de Joseph Joestar en la Parte 2.',
    'Wamuu': 'Wamuu es uno de los Hombres del Pilar, un ser ancestral con habilidades sobrehumanas y un gran rival de Joseph Joestar.',
    'Esidisi': 'Esidisi es otro de los Hombres del Pilar, conocido por su astucia y crueldad. Es un enemigo formidable en la Parte 2.',
    'Kars': 'Kars es el líder de los Hombres del Pilar, un ser casi invencible que busca obtener la perfección absoluta.',
    'Jotaro Kujo': 'Jotaro Kujo es el protagonista de la Parte 3, Stardust Crusaders. Un joven que posee un Stand poderoso llamado Star Platinum.',
    'Muhammed Avdol': 'Muhammed Avdol es uno de los aliados de Jotaro en la Parte 3. Su Stand, Magician\'s Red, le da poder sobre el fuego.',
    'Noriaki Kakyoin': 'Noriaki Kakyoin es otro aliado de Jotaro en la Parte 3. Su Stand, Hierophant Green, le permite controlar objetos a través de hilos.',
    'Jean Pierre Polnareff': 'Jean Pierre Polnareff es un aliado de Jotaro con un Stand llamado Silver Chariot. Es un espadachín experto.',
    'Iggy': 'Iggy es un perro y aliado en la Parte 3. Su Stand, The Fool, le permite manipular la arena y otras sustancias.',
    'DIO': 'DIO es el principal antagonista de la Parte 3. Usando su Stand, The World, es capaz de detener el tiempo y tiene un poder sobrehumano.',
    'Joseph Joestar (viejo)': 'Joseph Joestar, en su vejez, aparece en la Parte 3. Aunque ya mayor, sigue siendo un aliado vital para Jotaro y los demás, usando su ingenio y experiencia para superar desafíos. Su Stand es Hermit Purple'
};

// Función para mostrar la descripción de un personaje
function mostrarDescripcion(personaje) {
    const descripcion = personajes[personaje];
    alert(descripcion);  // Se puede mostrar la descripción en un alert o en un div, dependiendo de la preferencia.
}

// Agregar los eventos de clic a las imágenes de personajes
document.addEventListener('DOMContentLoaded', () => {
    const personajesDivs = document.querySelectorAll('.character');
    
    personajesDivs.forEach(div => {
        const personaje = div.querySelector('img').alt;  // Usamos el atributo alt para identificar al personaje
        div.addEventListener('click', () => mostrarDescripcion(personaje));
    });
});
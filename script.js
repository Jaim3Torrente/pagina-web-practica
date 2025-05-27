// script.js

const personajes = {
    'Jonathan Joestar': 'Jonathan Joestar es el protagonista de la Parte 1. Es un joven noble y valiente que lucha contra Dio Brando, quien se convierte en su archienemigo.',
    'Dio Brando': 'Dio Brando es el antagonista principal de la Parte 1. Un villano despiadado que busca obtener poder absoluto a través de la Máscara de Piedra.',
    'Speedwagon': 'Robert E. O. Speedwagon es un aliado de Jonathan Joestar y se convierte en su amigo cercano durante la Parte 1. Es un experto en negocios y un gran luchador.',
    'Will A. Zeppeli': 'Zeppeli es un maestro de la técnica del Hamon que enseña a Jonathan Joestar a luchar contra Dio Brando.',
    'Joseph Joestar': 'Joseph Joestar es el protagonista de la Parte 2. Nieto de Jonathan, es un joven ingenioso y astuto que lucha contra los Hombres del Pilar.',
    'César Zeppeli': 'César Zeppeli es el aliado y amigo de Joseph Joestar. Proviene de una familia con tradición en el uso del Hamon.',
    'Lisa Lisa': 'Lisa Lisa es la mentora de Joseph. Es una experta en Hamon y esconde un vínculo familiar importante.',
    'Wamuu': 'Wamuu es uno de los Hombres del Pilar, honorable y fuerte, rival directo de Joseph.',
    'Esidisi': 'Esidisi es otro Hombre del Pilar, conocido por su crueldad e inteligencia.',
    'Kars': 'Kars es el líder de los Hombres del Pilar y el creador de la Máscara de Piedra. Busca la perfección absoluta.',
    'Jotaro Kujo': 'Jotaro es el protagonista de la Parte 3. Es frío y fuerte, su Stand es Star Platinum.',
    'Muhammed Avdol': 'Aliado de Jotaro en la Parte 3. Su Stand Magician\'s Red controla el fuego.',
    'Noriaki Kakyoin': 'Aliado de Jotaro con un Stand llamado Hierophant Green, que manipula tentáculos.',
    'Jean Pierre Polnareff': 'Aliado francés de Jotaro. Su Stand Silver Chariot es rápido y usa una espada.',
    'Iggy': 'Perro con el Stand The Fool, que manipula arena. Aunque rudo, es leal.',
    'DIO': 'DIO renace con el cuerpo de Jonathan y usa el Stand The World para detener el tiempo.',
    'Joseph Joestar (viejo)': 'Joseph ya anciano aparece en la Parte 3. Usa Hermit Purple y su astucia.',
    'Josuke Higashikata': 'Josuke es el protagonista de la Parte 4. Su Stand, Crazy Diamond, repara objetos y heridas.',
    'Okuyasu Nijimura': 'Amigo de Josuke. Su Stand The Hand borra todo lo que toca con su mano derecha.',
    'Koichi Hirose': 'Aliado de Josuke. Su Stand Echoes evoluciona varias veces y se vuelve muy poderoso.',
    'Rohan Kishibe': 'Mangaka excéntrico con su Stand Heaven's Door que puede leer y escribir en las personas como libros.',
    'Yoshikage Kira': 'Asesino serial con una obsesión por la normalidad. Su Stand Killer Queen es letal.',
    'Giorno Giovanna': 'Protagonista de la Parte 5. Hijo de DIO con el cuerpo de Jonathan. Usa Gold Experience.',
    'Bruno Bucciarati': 'Líder del equipo de Giorno. Su Stand Sticky Fingers abre cremalleras.',
    'Guido Mista': 'Usa el Stand Sex Pistols, un grupo de 6 Stands pequeños para controlar balas. Le tiene miedo al número cuatro.',
    'Leone Abbacchio': 'Ex policía con el Stand Moody Blues que reproduce eventos pasados.',
    'Narancia Ghirga': 'Joven impulsivo. Su Stand Aerosmith es un avión con metralleta.',
    'Pannacotta Fugo': 'Usuario del Stand Purple Haze, que libera un virus mortal.',
    'Trish Una': 'Hija de Diavolo. Desarrolla el Stand Spice Girl.',
    'Diavolo': 'Jefe de Passione y antagonista principal. Tiene doble personalidad. Su Stand King Crimson borra el tiempo.',
    'Jolyne Cujoh': 'Protagonista de Parte 6. Hija de Jotaro. Usa el Stand Stone Free.',
    'Ermes Costello': 'Amiga de Jolyne con el Stand Kiss, que puede duplicar objetos y hacerlos chocar.',
    'Foo Fighters': 'Organismo que habita un cuerpo humanoide. Puede controlar agua.',
    'Weather Report': 'Aliado amnésico con un Stand que manipula el clima.',
    'Narciso Anasui': 'Está enamorado de Jolyne. Su Stand Diver Down altera estructuras.',
    'Enrico Pucci': 'Sacerdote y antagonista. Quiere acelerar el destino usando su Stand Made in Heaven.',
    'Johnny Joestar': 'Protagonista de Parte 7. Jinete paralítico que usa el Stand Tusk.',
    'Gyro Zeppeli': 'Protagonista de la Parte 7. Maestro del Spin y mentor de Johnny. Usa el Stand Ball Breaker.',
    'Diego Brando': 'Pese a tener su mismo apellido, no tiene nada que ver con Dio aunque así le apoden. Es un jinete talentoso y ambicioso. Su Stand es Scary Monsters',
    'Funny Valentine': 'Presidente de EE.UU. y villano de la Parte 7. Su Stand Dirty Deeds Done Dirt Cheap viaja entre dimensiones.'
};

// Mostrar la descripción del personaje
function mostrarDescripcion(personaje, event) {
    const descripcion = personajes[personaje];
    const descripcionDiv = document.getElementById('descripcion');

    descripcionDiv.innerText = descripcion;
    descripcionDiv.style.left = `${event.pageX + 10}px`;
    descripcionDiv.style.top = `${event.pageY + 10}px`;
    descripcionDiv.style.display = 'block';
}

// Evento al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    let descripcionDiv = document.getElementById('descripcion');

    if (!descripcionDiv) {
        descripcionDiv = document.createElement('div');
        descripcionDiv.id = 'descripcion';
        descripcionDiv.style.display = 'none';
        descripcionDiv.style.position = 'absolute';
        descripcionDiv.style.background = '#fff';
        descripcionDiv.style.border = '1px solid #ccc';
        descripcionDiv.style.padding = '10px';
        descripcionDiv.style.borderRadius = '8px';
        descripcionDiv.style.maxWidth = '250px';
        descripcionDiv.style.zIndex = '1000';
        descripcionDiv.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.2)';
        document.body.appendChild(descripcionDiv);
    }

    const personajesDivs = document.querySelectorAll('.character');

    personajesDivs.forEach(div => {
        const personaje = div.querySelector('img').alt;
        div.addEventListener('click', (event) => {
            event.stopPropagation();
            mostrarDescripcion(personaje, event);
        });
    });

    // Ocultar el tooltip si se hace clic fuera
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.character')) {
            descripcionDiv.style.display = 'none';
        }
    });
});
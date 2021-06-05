const nombre = "Jon"; // constante No lo puedo modificar
let edad = 19; //la puedo cambiar
// var variable global a todo el programa

const jon  = {
    nombre : 'Jon',
    apellido : 'Gibaut',
    edad : 19,
    lenguajes : [
        {
            nombre: 'JS',
            experiencia: 4,
        },
        {
            nombre: 'C++',
            experiencia: 3,
        }
    ],
    hobbies: ['Tocar la guitarra 🎸', 'Programar 🤓'],
};
// EMOJIS tecla WINDOWS + PUNTO

const messi = {
    nombre: 'Leo',
    apellido: 'Messi',
    edad: 33,
    posiciones: [
        {
            posicion : 'Extremo por derecha',
            nivel: 10
        },
        {
            posicion : 'Enganche',
            nivel : 8,
            posicionNatural : false
        }       
    ],
    clubes : ['Barcelona', 'Argentina'],
}

function verificarEdad (edad) {
    let verif = false;
    if (edad < 18){
        verif = false;
    }
    else{
        varif = true;
    }
};

const verificarEdad = (edad) => {
    let verif = false;
    if (edad < 18){
        verif = false;
    }
    else{
        varif = true;
    }
}

type Alumno = {
    nombre: string
    lenguaje_preferido: string
}

const alumnos: Alumno[] = [
    {
        nombre: "Gorka",
        lenguaje_preferido: "Javascript"
    },
    {
        nombre: "Miki",
        lenguaje_preferido: "Visual Basic 6"
    },
    {
        nombre: "Miguel",
        lenguaje_preferido: "Turbo Pascal"
    },
    {
        nombre: "Hugo",
        lenguaje_preferido: "Cobol"
    }
]

function ponLaVerdad(alumno: Alumno) {
    return { nombre: alumno.nombre, lenguaje_preferido: "Javascript" }
}

let nuevosAlumnos: Alumno[] = []
for (let i = 0; i < alumnos.length; i++) {
    let nuevoAlumno: Alumno = ponLaVerdad(alumnos[i])
    nuevosAlumnos.push(nuevoAlumno)
}

console.log(nuevosAlumnos)
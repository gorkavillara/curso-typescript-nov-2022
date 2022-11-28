type Alumno = {
    nombre: string,
    apellido: string,
    dni: string
}

const database: IDBFactory = window.indexedDB
let db: IDBDatabase
let objectStore: IDBObjectStore;
// let objectStore2;

if (database) {
    const request = database.open("tareasDB", 2)

    request.onupgradeneeded = () => {
        db = request.result
        console.log("DB abierta", db)
        objectStore = db.createObjectStore("tareas", {
            autoIncrement: true
        })
        // objectStore2 = db.createObjectStore("tareas2")
    }

    request.onsuccess = () => {
        db = request.result
        console.log("DB obtenida con éxito")
        // objectStore = db.createObjectStore("tareas")
    }

    request.onerror = error => console.log(error)
}

const yo: Alumno = {
    nombre: "Gorka",
    apellido: "Villar",
    dni: "12345678H"
}

const nuevoAlumno = (alumno: Alumno) => {
    const trans = db.transaction(["tareas"], "readwrite")
    const transObjectStore = trans.objectStore("tareas")
    const req = transObjectStore.add(alumno)

    req.addEventListener("success", e => console.log("Éxito", e))
}

const boton_add = document.querySelector("button.btn-indexdb") as HTMLButtonElement

boton_add.onclick = () => {
    nuevoAlumno(yo)
}
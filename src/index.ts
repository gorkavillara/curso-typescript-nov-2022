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
        imprimeTodas()
        // objectStore2 = db.createObjectStore("tareas2")
    }

    request.onsuccess = () => {
        db = request.result
        console.log("DB obtenida con éxito")
        imprimeTodas()
    }

    request.onerror = error => console.log(error)
}

const yo: Alumno = {
    nombre: "Gorka",
    apellido: "Villar",
    dni: "12345678H"
}

const nuevaTarea = (tarea: string) => {
    const trans = db.transaction(["tareas"], "readwrite")
    const transObjectStore = trans.objectStore("tareas")
    const req = transObjectStore.add(tarea)

    req.addEventListener("success", e => console.log("Éxito", e))
}

const btn_nuevatarea: HTMLButtonElement = document.querySelector("button.btn-nueva-tarea")

btn_nuevatarea.onclick = () => {
    const input: HTMLInputElement = document.querySelector("input.input-nueva-tarea")
    const nueva_tarea: string = input.value
    nueva_tarea !== "" && nuevaTarea(nueva_tarea)
    // nueva_tarea !== "" ? nuevaTarea(nueva_tarea) : null
    imprimeTodas()
}

const tareas_div = document.querySelector("div.tareas-div")

const imprimeTarea = (tarea: string, index: number) => {
    const tarea_div = document.createElement("div")
    tarea_div.className = "tarea"
    const input_tarea = document.createElement("input")
    input_tarea.type = "checkbox"
    input_tarea.name = `tarea-${index}`
    input_tarea.id = `tarea-${index}`
    const label_tarea = document.createElement("label")
    label_tarea.htmlFor = `tarea-${index}`
    label_tarea.innerText = tarea
    tarea_div.appendChild(input_tarea)
    tarea_div.appendChild(label_tarea)
    tareas_div.appendChild(tarea_div)
  }

const obtenTareas = () => {
    const trans = db.transaction(["tareas"], "readonly")
    const transObjectStore = trans.objectStore("tareas")
    const req = transObjectStore.getAll()

    req.addEventListener("success", () => { 
        const tareas: string[] = req.result
        tareas.forEach((tarea: string, index: number) => {
            imprimeTarea(tarea, index)
        })
    })
}

const imprimeTodas = () => {
    // Limpiar el div
    tareas_div.innerHTML = ""
    obtenTareas()
}
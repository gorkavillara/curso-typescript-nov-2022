type Tarea = {
  texto: string
}

const boton = document.querySelector(".btn-nueva-tarea")! as HTMLButtonElement
const input_nueva_tarea = document.querySelector(
  "input.input-nueva-tarea"
)! as HTMLInputElement
const tareas_div = document.querySelector("div.listado")
const tareas: Tarea[] = []

boton.onclick = () => {
  const nueva_tarea = input_nueva_tarea.value
  if (nueva_tarea === "") return
  // Añadir la nueva tarea al storage
  nuevaTareaStorage(nueva_tarea)
  tareas.push({ texto: nueva_tarea })
  imprimeTarea(nueva_tarea, tareas.length)
}

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

const nuevaTareaStorage = (tarea: string) => {
  const tareas_almacenadas_storage: string | null =
    localStorage.getItem("tareas")
  const tareas_almacenadas: Tarea[] | null =
    tareas_almacenadas_storage === null
      ? [{ texto: tarea }]
      : [...JSON.parse(tareas_almacenadas_storage), { texto: tarea }]
  console.log(tareas_almacenadas)
  localStorage.setItem("tareas", JSON.stringify(tareas_almacenadas))
}

const obtenTareasStorage = () => {
  const tareas_almacenadas_storage: string | null =
    localStorage.getItem("tareas")
  console.log(tareas_almacenadas_storage)
  if (tareas_almacenadas_storage === null) return
  // Uno por uno imprimirlos por pantalla
  return JSON.parse(tareas_almacenadas_storage)
}

const inicializar = () => {
  // Obtener los datos del storage
  const tareas_almacenadas: Tarea[] = obtenTareasStorage()
  tareas_almacenadas !== null && tareas_almacenadas.forEach((tarea, index) => imprimeTarea(tarea.texto, index))
}

inicializar()

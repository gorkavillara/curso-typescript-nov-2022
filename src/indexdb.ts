const database: IDBFactory = window.indexedDB
let db: IDBDatabase

if (database) {
  const request = database.open("tareasDB", 1)

  request.onsuccess = () => {
    db = request.result
    console.log("open", db)
  }

  request.onupgradeneeded = () => {
    db = request.result
    console.log("create", db)

    const objectStore = db.createObjectStore("tareas", {
      autoIncrement: true,
    })
  }

  request.onerror = (error) => {
    console.log("error", error)
  }
}
const addData = () => {
  const transaction = db.transaction(["tareas"], "readwrite")
  const objectStore = transaction.objectStore("tareas")
  const request = objectStore.add("Bajar la basura")
}

const getData = () => {
  const transaction = db.transaction(["tareas"], "readonly")
  const objectStore = transaction.objectStore("tareas")
  const request: IDBRequest = objectStore.openCursor()
  request.addEventListener("success", (e: any) => {
    const cursor = e.target.result
    if (cursor) {
      console.log(cursor.value)
      cursor.continue()
    } else {
      console.log("Búsqueda finalizada")
    }
  })
}

const getIndividualData = (id: number | string) => {
  const transaction = db.transaction(["tareas"], "readonly")
  const objectStore = transaction.objectStore("tareas")
  const request: IDBRequest = objectStore.get(id)
  request.addEventListener("success", (e: any) => {
    console.log(e.target.result)
  })
}

const getAll = () => {
  const transaction = db.transaction(["tareas"], "readonly")
  const objectStore = transaction.objectStore("tareas")
  const request: IDBRequest = objectStore.getAll()
  request.addEventListener("success", (e: any) => {
    console.log(e.target.result)
  })
}

const updateIndividualData = (text: string, id: number | string) => {
  const transaction = db.transaction(["tareas"], "readwrite")
  const objectStore = transaction.objectStore("tareas")
  const request: IDBRequest = objectStore.put(text, id)
  request.addEventListener("success", (e: any) => {
    console.log(e.target.result)
  })
}

const deleteIndividualData = (id: number | string) => {
  const transaction = db.transaction(["tareas"], "readwrite")
  const objectStore = transaction.objectStore("tareas")
  const request: IDBRequest = objectStore.delete(id)
  request.addEventListener("success", (e: any) => {
    console.log(e.target.result)
  })
}

const btn_idb = document.querySelector(
  "button.btn-indexdb"
)! as HTMLButtonElement

btn_idb.onclick = () => {
  console.log("clc")
  // const dat = getData();
  // addData()
  // getIndividualData(1)
//   updateIndividualData("Hacer la compra", 1)
    getAll()
}

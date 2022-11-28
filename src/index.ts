// const boton = document.querySelector("button#btn-info")
const boton = document.getElementById("btn-info")! as HTMLButtonElement

console.log(boton.innerHTML)

// boton.addEventListener("click", (e: MouseEvent) => {
//     console.log(e)
// })

boton.onclick = (e: MouseEvent) => {
  console.log(e)
}

const clickButton = () => console.log("Hola mundo")

// const form = document.getElementById("formulario") as HTMLFormElement
// const form = document.getElementsByClassName("formulario")[0]
const form: HTMLFormElement = document.querySelector("form#formulario")

form.onsubmit = (e: SubmitEvent) => {
  e.preventDefault()
  checkValidation()
  console.log(e)
}

const input: HTMLInputElement = document.querySelector("input#input-nombre")

const validationFail = () => {
  input.style.color = "red"
//   document.body.append(document.createTextNode("Error"))
}
const validationPass = () => {
  input.style.color = "green"
//   document.body.append(document.createTextNode("Todo correcto"))
}

const checkValidation = () =>
  input.value.length < 4 ? validationFail() : validationPass()

input.onchange = (e) => {
  checkValidation()
}

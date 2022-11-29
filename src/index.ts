class Rectangulo {
  // Método para inicializar el objeto
  width: number
  height: number
  color: string
  static descripcion: string =
    "La clase rectángulo necesita instanciarse con una anchura (width), una altura (height) y un color determinados."

  constructor(width: number, height: number, color: string) {
    // Definir los atributos iniciales en función del input
    this.width = width
    this.height = height
    this.color = color
  }

  obtenArea() {
    return this.width * this.height
  }

  obtenPerimetroPublic() {
    return this._obtenPerimetro()
  }

  private _obtenPerimetro() {
    return 2 * this.width + 2 * this.height
  }

  static comparaAreaRectangulos(rect1: Rectangulo, rect2: Rectangulo) {
    return rect1.obtenArea() === rect2.obtenArea()
  }

  imprimeRectangulo(container: HTMLDivElement) {
    // console.log("imprimiendo en el siguiente div", container)
    // Primer paso -> crear el elemento en el DOM (Document Object Model)
    // container.innerText = `${this.width} x ${this.height} -> color = ${this.color}`
    const rect_div: HTMLDivElement = document.createElement("div")
    rect_div.style.backgroundColor = this.color
    rect_div.style.width = `${this.width * 10}px`
    rect_div.style.height = `${this.height * 10}px`
    container.appendChild(rect_div)
  }

  get perimetro() {
    return 2 * this.height + 2 * this.width
  }

  set cuadra(width: number) {
    this.width = width
    this.height = width
  }

  cambiaForma(width: number, height: number) {
    this.width = width
    this.height = height
  }

}
const rectangulos_div: HTMLDivElement =
  document.querySelector("div.rectangulos")
const rect = new Rectangulo(10, 10, "blue")
const rect2 = new Rectangulo(15, 5, "#dc323c")

rect2.imprimeRectangulo(rectangulos_div)

const numero = 234

console.log("El tipo de numero es", typeof "numero")

console.log(rect2 instanceof Rectangulo)

console.log(rect.perimetro)

rect.cambiaForma(1, 1)  // Utilizando métodos convencionales
rect.cuadra = 5         // Utilizando un getter

rect.imprimeRectangulo(rectangulos_div)
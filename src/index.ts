class Rectangle {
    width: number
    height: number
    color: string

    // Set up
    constructor(w: number, h: number, c: string) {
        console.log("El rectángulo se está creando")
        this.width = w
        this.height = h
        this.color = c
    }

    getArea() {
        return this.width * this.height
    }

    print(container: HTMLDivElement) {
        const rectangle_div = document.createElement("div")
        rectangle_div.style.backgroundColor = this.color
        rectangle_div.style.width = `${this.width}px`
        rectangle_div.style.height = `${this.height}px`
        container.appendChild(rectangle_div)
    }

    get area () {
        return this.width * this.height
    }

    set rect_width (w: number) {
        this.width = w
    }

    static areaEquals (a: Rectangle, b: Rectangle) {
        return a.area === b.area
    }
}

const rect = new Rectangle(10, 10, "#0000ff")
const rect2 = new Rectangle(9, 2, "red")

console.log(rect.getArea())
console.log(rect2.getArea())

const container: HTMLDivElement = document.querySelector("div.rectangulos")

rect.print(container)

rect2.rect_width = 50 
rect2.print(container)
console.log(rect2 instanceof Rectangle)


console.log(Rectangle.areaEquals(rect, rect2))
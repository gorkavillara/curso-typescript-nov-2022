function* obtenId() {
    let id: number = 0
    while (id < 5) {
        yield id
        id++
    }
    return id
}

const id = obtenId()

console.log(id.next().value)
console.log(id.next().value)
console.log(id.next().value)
console.log(id.next().value)
console.log(id.next().value)
console.log(id.next().value)
console.log(id.next().value)
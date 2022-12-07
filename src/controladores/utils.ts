export const obtenIndice = (entrada: string): number => {
	const strId: string = entrada.split(".")[0]
	const indice: number = Number(strId) - 1
	return indice
}

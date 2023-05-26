function tabuada(numeros: number[]): void {
  for (const numero of numeros) {
    for (let i = 0; i <= 10; i++) {
      console.log(`${numero} x ${i} = ${numero * i}`)
    }
    console.log('--------------')
  }
}

tabuada([1, 5, 2])
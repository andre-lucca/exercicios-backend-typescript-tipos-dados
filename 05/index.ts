function soletrar(palavra: string): string {
  return palavra.split('').join('-')
}

const soletrada = soletrar('programador')

console.log(soletrada)
const produto: {
  produto: string;
  lote: number;
  ano: number;
  qtd: number;
} = {
  produto: 'CPU Dual Core 3.0GHZ',
  lote: 321,
  ano: 2022,
  qtd: 5
}

function gerarEtiquetas(prod: typeof produto): string[] {
  const etiquetas: string[] = []

  for (let i = 1; i <= prod.qtd; i++) {
    const unit: string = i.toString().padStart(3, '0')
    etiquetas.push(`${prod.lote}-${prod.ano}-${unit}`)
  }

  return etiquetas
}

const etiquetas = gerarEtiquetas(produto)

console.log(etiquetas)
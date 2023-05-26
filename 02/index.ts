const novosUsuarios: {
  nome: string;
  idade: number;
  status: boolean;
}[] = [
    {
      nome: "Guido",
      idade: 32,
      status: true,
    },
    {
      nome: "Dani",
      idade: 30,
      status: true,
    },
    {
      nome: "João",
      idade: 40,
      status: false,
    },
    {
      nome: "Guilherme",
      idade: 29,
      status: true,
    },
    {
      nome: "Ana",
      idade: 18,
      status: false,
    },
    {
      nome: "José",
      idade: 28,
      status: false,
    },
  ]

function filtrarUsuarios(lista: typeof novosUsuarios, nomeDeUsuario: string): typeof lista {
  return lista.filter(usuario => usuario.nome.toLowerCase().includes(nomeDeUsuario))
}

const novosUsuariosFiltrados = filtrarUsuarios(novosUsuarios, 'jo')
console.log(novosUsuariosFiltrados)
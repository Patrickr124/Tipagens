
import { Equal, Expect, ExpectExtends } from "./types/validateTypes";

// Seu código vai aqui :
// Modifique a tipagem myFunction para que a função duplicarNumero se encaixe nela.

type myFunction = (value:number) => number

// Validações :

type casosDeValidacao = [
  Expect<Equal<typeof duplicarNumero, myFunction>> // compara os tipos das funções
]


// Aqui estão os auxiliares e comparações:

function duplicarNumero(value: number) {
  return value * 2
}

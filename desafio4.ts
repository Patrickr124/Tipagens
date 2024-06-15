
import { Equal, Expect, ExpectExtends } from "./types/validateTypes";

// Seu código vai aqui :
// Faça com que a tipagem listType , aplicada como array em list_of_packs, aceite valores numéricos e de texto

type listType = string | number

// Validações :

const list_of_packs: listType[] = []
list_of_packs.push('um')
list_of_packs.push(2)
list_of_packs.push(2.5)

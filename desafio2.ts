
import { Equal, Expect, ExpectExtends } from "./types/validateTypes";

// Seu código vai aqui :
// Use a função TS Omit em IExtendedWithoutFields para fazer dele uma versão de  IExtendedUser que seja igual a  ISiblingsUser

interface IExtendedUser { // Não mexa nessa interface
  siblings: number
  rating: number
  applications: string[]
}

interface ISiblingsUser { // Não mexa nessa interface
  siblings: number
}

// Mexa aqui : 
interface IExtendedWithoutFields extends Omit<IExtendedUser,'rating'| 'applications'> {}


// Validações :

type casosDeValidacao = [

  Expect<Equal<ISiblingsUser, IExtendedWithoutFields>>, //  compara IFullUser ao Extendes com suas exceções

]


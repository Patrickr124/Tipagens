
import {  Expect, ExpectExtends } from "./types/validateTypes";

// Seu código vai aqui : Modifique IFullUser para possuir os campos de IUserWorker e IUserStudant

interface IFullUser extends IUserWorker,IUserStudent{
}


// Validações :

type casosDeValidacao = [
  Expect<ExpectExtends<IUserWorker, IFullUser>>, // Confere se IFullUser possui campos do Worker
  Expect<ExpectExtends<IUserStudent, IFullUser>>, // Confere se IFullUser possui campos do Student
]

// Aqui estão os auxiliares e comparações:

interface IUserWorker {
  name: string
  work: string
}

interface IUserStudent {
  name: string
  age: number
}

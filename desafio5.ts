
import { Equal, Expect, ExpectExtends } from "./types/validateTypes";

// Seu código vai aqui :
// O usuário userYouMade precisa ter seus atributos válidos, mexa apenas na tipagem abaixo :
interface IUserYouMade  {
name:string
age:number
work:string
siblings:number
rating:number
applications:string[]
active:boolean
}

// Validações :

let userYouMade : IUserYouMade 

userYouMade.name = "Nome Do Usuário"
userYouMade.age = 22
userYouMade.work = "Analista"
userYouMade.siblings = 0
userYouMade.rating = 10
userYouMade.applications = ['RH', 'Dev']
userYouMade.active = true

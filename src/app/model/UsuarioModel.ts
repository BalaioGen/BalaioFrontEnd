import { ProdutoModel } from "./produtoModel"


export class UsuarioModel {
    public id: number
    public nome: string
    public numcasa: number
    public produto: ProdutoModel[]
    public senha: string
    public telefone: number
    public tipo: string
    public foto: string
    public usuario: string
    public cep: number
    public complemento: string
    public cpf: number
    public dataNascimento: Date
    public descricaouser: string
    public email: string
}
import { CategoriaModel } from "./CategoriaModel"
import { UsuarioModel } from "./UsuarioModel"

export class ProdutoModel {
    public id: number
    public nomeproduto: string
    public quantidade: number
    public usuario: UsuarioModel
    public valor: number
    public dataFabricacao: Date
    public dataValidade: Date
    public descricaoproduto: string
    public fotoproduto: string
    public categoria: CategoriaModel
}
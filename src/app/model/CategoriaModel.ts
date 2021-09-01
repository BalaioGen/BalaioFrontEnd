import { ProdutoModel } from "./produtoModel"

export class CategoriaModel {
    public id: number
    public palavraChave: string
    public ativo: boolean
    public descricao: string
    public produto: ProdutoModel[]
}
export class User {
    private readonly identificador: string;
    private readonly nome: string;

    constructor(identificador: string, nome: string) {
        if (!nome) {
            throw "O nome é de preenchimento obrigatório.";
        }

        this.identificador = identificador;
        this.nome = nome;
    }

    getId() {
        return this.identificador;
    }

    getNome() {
        return this.nome;
    }
}
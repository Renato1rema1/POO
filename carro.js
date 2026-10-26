// ATIVIDADE AULA 01 - Classe Carro

export class Carro {
    id;
    nome;
    cor;
    disponivel;
    anoFabricacao;

    constructor(id, nome, cor, anoFabricacao) {
        this.id = id;
        this.nome = nome;
        this.cor = cor;
        this.anoFabricacao = anoFabricacao;
        this.disponivel = true; // todo carro já nasce disponível
    }

    // ATIVIDADE AULA 03 - Método de classe
    info() {
        return "Carro: " + this.nome + " - Cor: " + this.cor + " - Ano: " + this.anoFabricacao +
            " - " + (this.disponivel ? "Disponível" : "Indisponível");
    }
}

// ---- Testes da aula 01 (comentados na aula 03, agora roda pelo app.js) ----
/*
console.log("Classe carro");

const c1 = new Carro(1, "Camaro", "Amarelo", 2020);
const c2 = new Carro(2, "Civic", "Preto", 2018);
const c3 = new Carro(3, "Onix", "Branco", 2022);

console.log(c1);
console.log(c2);
console.log(c3);

c2.disponivel = false;
console.log("Carro: " + c2.nome + " - Disponível: " + c2.disponivel);
*/

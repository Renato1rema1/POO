// AULA 01 - Criando classes
// Classe = molde do objeto

export class Produto {
    id;
    nome;
    ativo;

    // Método construtor (método especial)
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
        this.ativo = true; // todo produto já nasce ativo
    }

    // AULA 03 - Método de classe
    info() {
        return "Produto: " + this.nome + " - " + (this.ativo ? "Em estoque" : "Em falta");
    }
}

// ---- Testes da aula 01 (comentados na aula 03, agora roda pelo app.js) ----
/*
console.log("Criando classes");

// Instanciando (criando) objetos com new
const p1 = new Produto(1, "Carregador");
const p2 = new Produto(2, "Capinha");

console.log(p1);
console.log(p2);

// Alterando propriedades
p2.ativo = false;
p1.nome = "Carregador iPhone";

console.log(p1);
console.log(p2);

// Mostrando só algumas propriedades
console.log("Nome produto: " + p2.nome + " - Status: " + p2.ativo);
*/

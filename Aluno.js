// ATIVIDADE AULA 02 - Modelagem da Entidade Aluno - V2

// 1. Objeto fixo (Enum) para os turnos
export const Turno = Object.freeze({
    MANHA: "Manhã",
    TARDE: "Tarde",
    NOITE: "Noite"
});

// 2. Classe Aluno com o seu constructor
export class Aluno {
    id;
    nome;
    dataMatricula;
    turno;
    estaAtivo;

    constructor(id, nome, dataMatricula, turno) {
        this.id = id;
        this.nome = nome;
        this.dataMatricula = new Date(dataMatricula);
        this.turno = turno;
        this.estaAtivo = true; // aluno nasce ativo por padrão
    }

    // ATIVIDADE AULA 03 - Método de classe
    info() {
        return "Aluno: " + this.nome + " - Turno: " + this.turno + " - Matrícula: " +
            this.dataMatricula.toISOString() + " - " + (this.estaAtivo ? "Estudando" : "Trancou o curso");
    }
}

// ---- Testes da aula 02 (comentados na aula 03, agora roda pelo app.js) ----
/*
// 3. Instanciar 2 alunos usando o new
const aluno1 = new Aluno(1, "Renato", "2026-02-10T00:00:00", Turno.MANHA);
const aluno2 = new Aluno(2, "Maria", "2026-02-12T00:00:00", Turno.TARDE);

// 4. Mudar o turno de um e desativar o outro
aluno1.turno = Turno.NOITE;
aluno2.estaAtivo = false;

// 5. Mostrar no console como ficaram
console.log(aluno1);
console.log(aluno2);
*/

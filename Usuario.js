// AULA 02 - Classes e métodos de classe

// Enum (objeto fixo) - Object.freeze trava o objeto para não aceitar mudanças
export const Genero = Object.freeze({
    M: "Masculino",
    F: "Feminino",
    O: "Outro"
});

// Classe
export class Usuario {
    id;
    nome;
    senha;
    dataNascimento;
    genero;
    isAdmin;

    // Método construtor
    constructor(id, nome, senha, dataNascimento, genero) {
        this.id = id;
        this.nome = nome;
        this.senha = senha;
        this.dataNascimento = new Date(dataNascimento);
        this.genero = genero;
        this.isAdmin = false; // só um administrador pode criar outro administrador
    }

    // Método de classe - retorna só as informações do perfil (sem senha, sem isAdmin)
    perfil() {
        return "Perfil: " + this.nome + " - Data de nascimento: " + this.dataNascimento.toISOString();
    }
}

// ---- Testes da aula 02 (comentados na aula 03, agora roda pelo app.js) ----
/*
const user1 = new Usuario(1, "Vander Martins", "123", "2000-04-14T00:00:00", Genero.M);
console.log(user1);

user1.nome = "Vander Alves";
console.log(user1);

console.log(user1.perfil());

const user2 = new Usuario(2, "Lucas", "456", "2001-05-10T00:00:00", Genero.M);
console.log(user2.perfil());
*/

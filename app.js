// AULA 03 - import, export, métodos e módulos
import { Produto } from './models/produto.js';
import { Genero, Usuario } from './models/Usuario.js';
import { Carro } from './models/carro.js';
import { Aluno, Turno } from './models/Aluno.js';

// ===== 1. Produto =====
const p = new Produto(5, "Guitarra");
const p2 = new Produto(6, "Cordas 09");

console.log(p);
console.log(p2);
console.log("Nome do produto: " + p.nome);

console.log(p.info());
p.ativo = false;
console.log(p.info());

// ===== 2. Usuário =====
const usuario1 = new Usuario(1, "César", "123", "2000-05-25T00:00:00", Genero.M);

console.log(usuario1);
console.log(usuario1.perfil());

// ===== 3. Carro (atividade) =====
const carro1 = new Carro(1, "Camaro", "Amarelo", 2020);
const carro2 = new Carro(2, "Civic", "Preto", 2018);
const carro3 = new Carro(3, "Onix", "Branco", 2022);

carro2.disponivel = false;

console.log(carro1);
console.log(carro1.info());
console.log(carro2.info());
console.log(carro3.info());

// ===== 4. Aluno (atividade) =====
const aluno1 = new Aluno(1, "Renato", "2026-02-10T00:00:00", Turno.MANHA);
const aluno2 = new Aluno(2, "Maria", "2026-02-12T00:00:00", Turno.TARDE);

aluno1.turno = Turno.NOITE;   // muda o turno de um
aluno2.estaAtivo = false;     // desativa o outro

console.log(aluno1);
console.log(aluno2);
console.log(aluno1.info());
console.log(aluno2.info());

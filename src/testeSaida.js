import { AbrigoAnimais } from "./abrigo-animais.js";
import chalk from "chalk";

const abrigo = new AbrigoAnimais();

const cenarios = [
  {
    descricao: "Caso básico válido",
    entrada: ['RATO,BOLA', 'RATO,NOVELO', 'Rex,Fofo']
  },
  {
    descricao: "Caso inválido - animal",
    entrada: ['CAIXA,RATO', 'RATO,BOLA', 'Lulu']
  },
  {
    descricao: "Caso inválido - brinquedo",
    entrada: ['RATO,CARRO', 'BOLA', 'Rex']
  },
  {
    descricao: "Intercalando brinquedos",
    entrada: ['BOLA,LASER', 'BOLA,NOVELO,RATO,LASER', 'Mimi,Fofo,Rex,Bola']
  },
  {
    descricao: "Limite de 3 animais por pessoa",
    entrada: ['RATO,BOLA,LASER,CAIXA,NOVELO,SKATE', 'BOLA', 'Rex,Mimi,Fofo,Zero,Bola,Bebe']
  },
  {
    descricao: "Loco sem outro animal",
    entrada: ['SKATE,RATO', 'BOLA', 'Loco']
  },
  {
    descricao: "Loco com outro animal adotado antes",
    entrada: ['RATO,BOLA,SKATE', 'BOLA', 'Rex,Loco']
  }
];

console.log(chalk.blue.bold("\n===== Saída detalhada dos cenários =====\n"));

cenarios.forEach((c, i) => {
  const [p1, p2, animais] = c.entrada;
  const resultado = abrigo.encontraPessoas(p1, p2, animais);

  console.log(chalk.yellow.bold(`${i + 1}. ${c.descricao}`));
  console.log(chalk.cyan("Entrada:"), c.entrada);

  if (resultado.erro) {
    console.log(chalk.red("Saída (erro):"), resultado.erro);
  } else {
    console.log(chalk.green("Saída (lista):"), resultado.lista);
  }

  console.log(chalk.gray("-------------------------------------------\n"));
});

console.log(chalk.blue.bold("\n===== Relatório resumido =====\n"));

cenarios.forEach((c, i) => {
  const [p1, p2, animais] = c.entrada;
  const resultado = abrigo.encontraPessoas(p1, p2, animais);

  if (!resultado.erro) {
    const adotadosP1 = resultado.lista.filter(l => l.endsWith("pessoa 1")).length;
    const adotadosP2 = resultado.lista.filter(l => l.endsWith("pessoa 2")).length;
    const abrigoCount = resultado.lista.filter(l => l.endsWith("abrigo")).length;

    console.log(chalk.yellow.bold(`${i + 1}. ${c.descricao}`));
    console.log(chalk.green(`Pessoa 1: ${adotadosP1} animal(is)`));
    console.log(chalk.green(`Pessoa 2: ${adotadosP2} animal(is)`));
    console.log(chalk.red(`Abrigo: ${abrigoCount} animal(is)`));
    console.log(chalk.gray("-------------------------------------------\n"));
  }
});

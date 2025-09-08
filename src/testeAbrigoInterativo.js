import { AbrigoAnimais } from "./abrigo-animais.js";
import chalk from "chalk";
import readline from "readline";

const abrigo = new AbrigoAnimais();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(chalk.blue.bold("=== Abrigo de Animais Interativo ==="));

rl.question(chalk.cyan("Digite os brinquedos da pessoa 1, separados por vírgula: "), (p1) => {
  rl.question(chalk.cyan("Digite os brinquedos da pessoa 2, separados por vírgula: "), (p2) => {
    rl.question(chalk.cyan("Digite a ordem dos animais, separados por vírgula: "), (animais) => {

      const resultado = abrigo.encontraPessoas(p1, p2, animais);

      console.log(chalk.blue.bold("\n===== Resultado ====="));
      if (resultado.erro) {
        console.log(chalk.red("Erro:"), resultado.erro);
      } else {
        console.log(chalk.green("Lista de adoções:"));
        resultado.lista.forEach(l => console.log(" - " + l));

        // resumo por pessoa
        const adotadosP1 = resultado.lista.filter(l => l.endsWith("pessoa 1")).length;
        const adotadosP2 = resultado.lista.filter(l => l.endsWith("pessoa 2")).length;
        const abrigoCount = resultado.lista.filter(l => l.endsWith("abrigo")).length;

        console.log(chalk.blue.bold("\nResumo:"));
        console.log(chalk.green(`Pessoa 1: ${adotadosP1} animal(is)`));
        console.log(chalk.green(`Pessoa 2: ${adotadosP2} animal(is)`));
        console.log(chalk.red(`Abrigo: ${abrigoCount} animal(is)`));
      }

      rl.close();
    });
  });
});

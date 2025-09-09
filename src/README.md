# 🐾 Desafio Abrigo de Animais

Este projeto foi desenvolvido como parte de um desafio técnico para organizar a adoção de animais em um abrigo, aplicando regras específicas de compatibilidade entre pessoas e brinquedos favoritos dos animais.

---

## 📌 Funcionalidades

- Validar se um animal é permitido (não aceita brinquedos como animal).  
- Distribuir adoções entre duas pessoas, respeitando:
  - Cada pessoa só pode adotar até **3 animais**.
  - Adoção depende dos **brinquedos disponíveis**.  
  - Caso ninguém tenha brinquedo compatível → animal fica no **abrigo**.
  - Caso **Loco** apareça, só pode ser adotado se a pessoa já tiver adotado outro animal antes.
- Geração de relatório mostrando quantos animais cada pessoa adotou e quantos ficaram no abrigo.

---

## 📂 Estrutura do Projeto

- `src/abrigo-animais.js` → Classe principal com a lógica do desafio  
- `src/abrigo-animais.test.js` → Testes automatizados (Jest)  
- `src/testeSaida.js` → **Script adicional (diferencial)** Script para rodar cenários manuais e relatórios

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/) (ambiente de execução)
- [Jest](https://jestjs.io/) (para testes automatizados)  
- [Chalk](https://github.com/chalk/chalk) (para colorir saídas no terminal)

---

## ⚙️ Como rodar o projeto


### 1️⃣ Instalar dependências

```bash
npm install
```
```bash
npm install chalk
```

### 2️⃣ Executar os testes automatizados

```bash
npm test
```

### 🖥️ Executando o testeSaida.js

Além dos testes, foi adicionado como diferencial o script testeSaida.js, que permite rodar casos e ver os resultados direto no terminal.

```bash
node src/testeSaida.js
```

## ✅ Exemplos de saída

### 🔎 Saída detalhada
```txt
===== Saída detalhada dos cenários =====

1. Caso básico válido
Entrada: [ 'RATO,BOLA', 'RATO,NOVELO', 'Rex,Fofo' ]
Saída (lista): [ 'Fofo - abrigo', 'Rex - pessoa 1' ]
-------------------------------------------

2. Caso inválido - animal
Entrada: [ 'CAIXA,RATO', 'RATO,BOLA', 'Lulu' ]
Saída (erro): Animal inválido
-------------------------------------------
```

### 📊 Relatório resumido
```txt
===== Relatório resumido =====

1. Caso básico válido
Pessoa 1: 1 animal(is)
Pessoa 2: 0 animal(is)
Abrigo: 1 animal(is)
-------------------------------------------
```

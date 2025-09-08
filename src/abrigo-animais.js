class AbrigoAnimais {
  constructor() {
    this.animais = {
      Rex:  { tipo: "cão",  brinquedos: ["RATO", "BOLA"] },
      Mimi: { tipo: "gato", brinquedos: ["BOLA", "LASER"] },
      Fofo: { tipo: "gato", brinquedos: ["BOLA", "RATO", "LASER"] },
      Zero: { tipo: "gato", brinquedos: ["RATO", "BOLA"] },
      Bola: { tipo: "cão",  brinquedos: ["CAIXA", "NOVELO"] },
      Bebe: { tipo: "cão",  brinquedos: ["LASER", "RATO", "BOLA"] },
      Loco: { tipo: "jabuti", brinquedos: ["SKATE", "RATO"] }
    };

    this.todosBrinquedos = new Set([
      "RATO", "BOLA", "LASER", "CAIXA", "NOVELO", "SKATE"
    ]);
  }

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    try {
      const listaPessoa1 = this._validaBrinquedos(brinquedosPessoa1.split(","));
      const listaPessoa2 = this._validaBrinquedos(brinquedosPessoa2.split(","));
      const animaisEntrada = ordemAnimais.split(",");

      for (let nome of animaisEntrada) {
        if (!this.animais[nome]) {
          return { erro: "Animal inválido" };
        }
      }

      let adotados = { p1: [], p2: [] };
      let resultado = [];

      for (let nome of animaisEntrada) {
        const animal = this.animais[nome];
        const cond1 = this._satisfaz(listaPessoa1, animal, adotados.p1);
        const cond2 = this._satisfaz(listaPessoa2, animal, adotados.p2);

        let destino = "abrigo";
        if (cond1 && !cond2 && adotados.p1.length < 3) {
          destino = "pessoa 1";
          adotados.p1.push(nome);
        } else if (cond2 && !cond1 && adotados.p2.length < 3) {
          destino = "pessoa 2";
          adotados.p2.push(nome);
        } else if (cond1 && cond2) {
          destino = "abrigo";
        }

        resultado.push(`${nome} - ${destino}`);
      }

      resultado.sort((a, b) => a.localeCompare(b));

      return { lista: resultado };
    } catch (e) {
      return { erro: e.message };
    }
  }

  _validaBrinquedos(lista) {
    const set = new Set();
    for (let b of lista) {
      if (!this.todosBrinquedos.has(b)) {
        throw new Error("Brinquedo inválido");
      }
      if (set.has(b)) {
        throw new Error("Brinquedo inválido");
      }
      set.add(b);
    }
    return lista;
  }

  _satisfaz(listaPessoa, animal, adotadosPessoa) {
    // regra do Loco
    if (animal.tipo === "jabuti") {
      return adotadosPessoa.length > 0;
    }

    let idx = 0;
    for (let brinquedo of listaPessoa) {
      if (brinquedo === animal.brinquedos[idx]) {
        idx++;
      }
      if (idx === animal.brinquedos.length) {
        return true;
      }
    }
    return false;
  }
}

export { AbrigoAnimais as AbrigoAnimais };

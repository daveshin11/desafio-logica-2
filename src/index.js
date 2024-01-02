function calcularSaldo(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    return saldoVitorias;
  }
  
  const vitorias = parseInt(prompt("Digite a quantidade de vitorias: "));
  const derrotas = parseInt(prompt("Digite a quantidade de derrotas: "));
  
  const saldoVitorias = calcularSaldo(vitorias, derrotas);
  
  
  if (saldoVitorias < 10) {
    nivel = "Ferro";
  } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
    nivel = "Bronze";
  } else if (saldoVitorias >= 21 && saldoVitorias <= 30) {
    nivel = "Prata";
  } else if (saldoVitorias >= 31 && saldoVitorias <= 40) {
    nivel = "Ouro";
  } else if (saldoVitorias >= 41 && saldoVitorias <= 50) {
    nivel = "Platina";
  } else if (saldoVitorias >= 51 && saldoVitorias <= 60) {
    nivel = "Esmeralda";
  } else if (saldoVitorias >= 61 && saldoVitorias <= 70) {
    nivel = "Diamante";
  } else if (saldoVitorias >= 71 && saldoVitorias <= 90) {
    nivel = "Mestre";
  } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
    nivel = "Grão Mestre";
  } else if (saldoVitorias >= 101) {
    nivel = "Desafiante";
  }
  
  console.log(`O herói tem de saldo ${saldoVitorias} Está no nivel de ${nivel}`);
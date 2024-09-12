const faturamentoEstados = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

let totalMensal = 0;
for (const estados in faturamentoEstados) {
    totalMensal = totalMensal + faturamentoEstados[estados]
}

for (const estados in faturamentoEstados) {

    let percentual = ((faturamentoEstados[estados] * 100) / totalMensal).toFixed(2)

    console.log(`O percentual de representação de ${estados} é ${percentual} %`)
}

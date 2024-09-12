const dados = require("./dados.json");

const faturamentoValido = dados.filter(x => x.valor > 0);

// O menor valor de faturamento ocorrido em um dia do mês

let menorFaturamento = faturamentoValido[0].valor;

faturamentoValido.forEach(objeto => {
    
    if (objeto.valor < menorFaturamento) {
        
        menorFaturamento = objeto.valor;
    }
});

// O maior valor de faturamento ocorrido em um dia do mês;

let maiorFaturamento = 0;

faturamentoValido.forEach(objeto => {
    
    if (objeto.valor > maiorFaturamento) {
        
        maiorFaturamento = objeto.valor;
    }
});

// Número de dias no mês em que o valor de faturamento diário foi superior à média mensal

let somaFaturamento = 0

faturamentoValido.forEach(objeto => {
    
    somaFaturamento = somaFaturamento + objeto.valor;
});

const mediaMensal = somaFaturamento / faturamentoValido.length

let diasSuperior = 0

faturamentoValido.forEach(objeto => {
    
    if (objeto.valor > mediaMensal) {
        diasSuperior++
    }
});

console.log(`O menor valor de faturamento ocorrido em um dia do mês foi R$ ${menorFaturamento}`);
console.log(`O maior valor de faturamento ocorrido em um dia do mês foi R$ ${maiorFaturamento}`);
console.log(`O número de dias no mês em que o valor de faturamento diário foi superior à média mensal é ${diasSuperior}`);
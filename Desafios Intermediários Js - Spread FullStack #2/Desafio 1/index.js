var vetor = [];
const input = gets();
/*vetor[0] = parseFloat(prompt("digite um numero ")); para funcionar no navegador, excluir o const input
= gets(); e o vetor[0] = input; e adicionar essa linha*/
vetor[0] = input;
console.log(`N[0] = ${vetor[0]}`);

for(i = 1; i < 10; i++){
	vetor[i] = 2*vetor[i-1];
	console.log(`N[${i}] = ${vetor[i]}`);
	
}


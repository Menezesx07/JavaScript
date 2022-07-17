var num = 0;                    //inserir uma quantidade indefinida de inteiros, ao digitar um negativo
var lista = [];                 //para a função, e soma todos o numeros (menos o negativo) e da a media
var soma = 0;
var media = 0;

do{                     //enquanto num for maior que 0, repete o codigo
    
   //num = parseInt(gets()); //gets para validar no prompt da dio
   num = parseInt(prompt("digite um numero ")); //parseFloat para validar no chrome
    lista.push(num); //inserir no inicio do array

}while(num > 0); 

lista.pop(); //remover o ultimo numero do array, no caso, o negativo

for(i = 0; i< lista.length; i++){ //loop para a soma dos numeros do array 
    soma = soma + lista[i]; //ou pode usar soma += lista[i]
}
 media = soma / lista.length;

 

//console.log(soma);
console.log(media.toFixed(2))


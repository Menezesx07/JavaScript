

var input1Html = document.getElementById("input1"); //.value;
var input2Html = document.getElementById("input2"); //.value;




function somar() {

    var input1Html = document.getElementById("input1").value;
    var input2Html = document.getElementById("input2").value;
    var consoleHtml = document.getElementById('console');
    var num1 = parseInt(input1Html);
    var num2 = parseInt(input2Html);
    var resultado = (num1+num2);

   if (num1 === num2) {
    var text1 = "os numeros " + num1 + " e "+ num2 +" são iguais,";
   } else {
    text1 = "os numeros " + num1 + " e "+ num2 + " são diferentes, ";
   }


   if (resultado > 10 && resultado < 20) {
    var text2 = "que está entre 10 e 20"
   } else {
    text2 = "que não está entre 10 e 20"
   }


   consoleHtml.innerHTML = text1 + " sua soma é " + resultado + ", " + text2;
  

}



var listaNomes = [];


function adicionar() {
    var inputHtml = document.getElementById("input").value;
    var nomeHtml = document.getElementById('nome');
    listaNomes.unshift(inputHtml);
    console.log(inputHtml);
    console.log(listaNomes);
    nomeHtml.innerHTML = inputHtml;
    document.getElementById("input").value = ""; //limpar o campo

   listaNomes.forEach((item)=>{
        let li = document.createElement('li');
        li.innerText = item;
        nomeHtml.appendChild(li);
    })
    
}
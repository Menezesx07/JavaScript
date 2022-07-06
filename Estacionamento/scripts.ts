interface veiculo {
    nome: string;
    placa: string;
    entrada: Date;
}



(function() {
    const $ = (query: string): HTMLInputElement | null => document.querySelector(query);

    
    function patio() {

        function ler(){}

        function adicionar(veiculo: any){

            const row = document.createElement("tr");
            row.innerHTML = `
                        <td>${veiculo.nome}</td>
                        <td>${veiculo.placa}</td>
                        <td>${veiculo.entrada}</td>
                        <td>
                        <button class="delete" data-placa="${veiculo.placa}">x</button>
                        </td>
     
                    `;

                    $("#patio")?.appendChild(row);
        };


        function remover(){}

        function render(){}

        function salvar(){}

        return {ler, adicionar, remover, salvar, render}



    }


    $("#cadastrar")?.addEventListener("click", () =>{
        const nome = $("#nome")?.value;
        const placa = $("#placa")?.value;

        if(!nome || !placa){
            alert ("Os campos nome e placa são obrigatórios");
            return
        } else{
            console.log("teste");
            patio().adicionar({ nome, placa, entrada: new Date() });
        }

        //patio().adicionar({ nome, placa, entrada: new Date() });
    });

})();
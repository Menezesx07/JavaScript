"use strict";
(function () {
    var _a;
    const $ = (query) => document.querySelector(query);
    function patio() {
        function ler() { }
        function adicionar(veiculo) {
            var _a;
            const row = document.createElement("tr");
            row.innerHTML = `
                        <td>${veiculo.nome}</td>
                        <td>${veiculo.placa}</td>
                        <td>${veiculo.entrada}</td>
                        <td>
                        <button class="delete" data-placa="${veiculo.placa}">x</button>
                        </td>
     
                    `;
            (_a = $("#patio")) === null || _a === void 0 ? void 0 : _a.appendChild(row);
        }
        ;
        function remover() { }
        function render() { }
        function salvar() { }
        return { ler, adicionar, remover, salvar, render };
    }
    (_a = $("#cadastrar")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        var _a, _b;
        const nome = (_a = $("#nome")) === null || _a === void 0 ? void 0 : _a.value;
        const placa = (_b = $("#placa")) === null || _b === void 0 ? void 0 : _b.value;
        if (!nome || !placa) {
            alert("Os campos nome e placa são obrigatórios");
            console.log("vazio");
            return;
        }
        else {
            console.log("teste");
            patio().adicionar({ nome, placa, entrada: new Date() });
        }
        //patio().adicionar({ nome, placa, entrada: new Date() });
    });
})();

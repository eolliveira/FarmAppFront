/*cadastrar medicamento*/

let form = document.querySelector('#form-cad-produto');
let listaMedicamentos = [];

form.onsubmit = function(e) { 
    e.preventDefault();

    let descricao = form.elements.descricao.value;
    let farmacia = form.elements.farmacia.value;
    let valor = parseFloat(form.elements.valor.value);

    addMedicamento(descricao, farmacia, valor);

    console.log(listaMedicamentos);

};


function addMedicamento(descricao, farmacia, valor) {
    let item = {
        descricao,
        farmacia,
        valor
    }

    listaMedicamentos.push(item);
    // atualizaMedicamento();
    atualizaTabelaMedicamento();
}


function atualizaTabelaMedicamento() {
    let tabelaItems = document.querySelector('#tabela-medicamentos tbody');
    tabelaItems.innerHTML = '';

    for(const i in listaMedicamentos) {
        if(listaMedicamentos.hasOwnProperty(i)) {
            const item = listaMedicamentos[i];

        let row = document.createElement('tr');
        let descricao = document.createElement('td');
        let farmacia = document.createElement('td');
        let valor = document.createElement('td');

        descricao.innerText = item.descricao;
        farmacia.innerText = item.farmacia;
        valor.innerText = item.valor;

        row.appendChild(descricao);
        row.appendChild(farmacia);
        row.appendChild(valor);


        tabelaItems.appendChild(row);


        
        }
    }
}



// function atualizaMedicamento() {
//     let areaProdutos = document.querySelector('#destaques-produtos');
//     areaProdutos.innerText = '';

//     for(const i in listaMedicamentos) {
//         if(listaMedicamentos.hasOwnProperty(i)) {
//             const item = listaMedicamentos[i];

//         let produto = document.createElement('div');
//         let descricao = document.createElement('p');
//         let farmacia = document.createElement('p');
//         let valor = document.createElement('p');

//         descricao.innerText = item.descricao;
//         farmacia.innerText = item.farmacia;
//         valor.innerText = item.valor;

//         produto.appendChild(descricao);
//         produto.appendChild(farmacia);
//         produto.appendChild(valor);


//         areaProdutos.appendChild(produto);
//         }
//     }

   

//Valida produtos cadastrados
function validarProduto(nomeProduto, farmProduto, valorProduto, qtidadeProduto) {
    let descricao = document.getElementById(nomeProduto).value;
    let farmacia = document.getElementById(farmProduto).value;
    let valor = document.getElementById(valorProduto).value;
    let quantidade = document.getElementById(qtidadeProduto).value;

    if (descricao == "")
        alert("Nome do Medicamento não pode estar em branco. Favor preenchê-lo!");
    else if (farmacia == "")
        alert("Campo Farmácia não pode estar em branco. Favor preenchê-lo!");
    else if (valor == "")
        alert("Campo valor do produto esta em branco. Favor preenchê-lo!");
    else if (quantidade == "")
        alert("Campo quantidade não pode estar em branco. Favor preenchê-lo!");
    else cadastrarProduto(descricao, farmacia, valor, parseInt(quantidade));
}

//Cadastra medicamentos
function cadastrarProduto(descricao, farmacia, valor, quantidade) {
    let novoProduto = { nome: descricao, farmacia: farmacia, valor: valor, quantidade: quantidade };

    if (typeof(Storage) !== "undefined") {
        let produtos = localStorage.getItem("produtos");
        if (produtos == null) produtos = []; // Caso nenhum produto ainda foi cadastrado
        else produtos = JSON.parse(produtos);
        produtos.push(novoProduto); // Adiciona produto
        localStorage.setItem("produtos", JSON.stringify(produtos))
        alert("Foram cadastradas com sucesso " + quantidade + " unidades do produto " + descricao + "!");
        atualizarTotalEstoque("totalEstoque");
        location.reload();
    } else alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação");
}

//atualiza estoque
function atualizarTotalEstoque(idCampo) {
    localStorage.setItem("totalEstoque", ++document.getElementById(idCampo).innerHTML)
}

//inclementa quantidade de medicamentos cadastrados
function carregarTotalEstoque(idCampo) {
    if (typeof(Storage) !== "undefined") {
        let totalEstoque = localStorage.getItem("totalEstoque");
        if (totalEstoque == null) totalEstoque = 0;
        document.getElementById(idCampo).innerHTML = totalEstoque;
    } else alert("Seu navegador não pode executar essa aplicação");
}

//Exibe medicamentos cadastrados na tela principal
function listarEstoque() {
    let areaProdutos = document.querySelector('#destaques-produtos');
    if (typeof(Storage) !== "undefined") {
        let produtos = localStorage.getItem("produtos");

        produtos = JSON.parse(produtos);
        produtos.forEach(produto => {

            let caixa = document.createElement('div');
            caixa.classList.add("produto");

            //adiciona imagem do remedio
            let myImage = new Image(100, 200);
            myImage.src = 'img/remedio-2.jpg';
            myImage.classList.add("destaquesImg");


            let nomeC = document.createElement('p');
            nomeC.classList.add("prod-remedio");
            let farmaciaC = document.createElement('p');
            farmaciaC.classList.add("prod-farmacia");
            let valorC = document.createElement('p');
            valorC.classList.add("prod-preco");
            let btnComprar = document.createElement('p');
            btnComprar.classList.add("prod-comprar");

            nomeC.innerText = produto.nome;
            farmaciaC.innerText = produto.farmacia;
            valorC.innerText = produto.valor;
            btnComprar.innerText = 'Comprar';

            caixa.appendChild(myImage);
            caixa.appendChild(nomeC);
            caixa.appendChild(farmaciaC);
            caixa.appendChild(valorC);
            caixa.appendChild(btnComprar);


            areaProdutos.appendChild(caixa);

        });
    } else alert("A versão do seu navegador é muito antiga. Por isso, não será possível visualizar o estoque!");


}

//Atualiza tabela de Medicamentos no cadastro
function atualizaTabelaMedicamento() {
    let tabelaItems = document.querySelector('#tabela-medicamentos tbody');
    tabelaItems.innerHTML = '';

    if (typeof(Storage) !== "undefined") {
        let produtos = localStorage.getItem("produtos");

        produtos = JSON.parse(produtos);
        produtos.forEach(produto => {

            let row = document.createElement('tr');
            let descricao = document.createElement('td');
            let farmacia = document.createElement('td');
            let valor = document.createElement('td');
            let quantidade = document.createElement('td');

            descricao.innerText = produto.nome;
            farmacia.innerText = produto.farmacia;
            valor.innerText = produto.valor;
            quantidade.innerText = produto.quantidade;

            row.appendChild(descricao);
            row.appendChild(farmacia);
            row.appendChild(valor);
            row.appendChild(quantidade);

            tabelaItems.appendChild(row);

            carregarTotalEstoque('totalEstoque');

        });
    }
}
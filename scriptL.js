//Seleciona a ul com a lista de cadastros HTML
const cadastros = document.getElementById("listaCadastros"); 

//requisição GET de API externa (CrudCrud) para buscar todas os cadastros
fetch("https://crudcrud.com/api/06a3049f7d97424e88d6aa84990d7c27/cadastros")
.then(resposta => resposta.json()) //Converte o corpo da resposta em JSON
.then((listaCadastros) => {
    // Itera sobre cada cadastro do array
    listaCadastros.forEach(cadastro => {
        //Cria um novo elemento de lista (<li>) para cada cadastro
        const item = document.createElement("li");
        // Define o conteúdo HTML do item
        item.innerHTML = `${cadastro.nome} - ${cadastro.email} <button class="botao" onclick="removerCadastro('${cadastro._id}')">✘</button>`
        //Adiciona o novo item à lista de cadastros no HTML
        cadastros.appendChild(item); //novo nó na arvore do DOM
    });
})

// Adiciona um ouvinte de evento de click no botão "Adicionar"
document.getElementById("add").addEventListener("click", () =>{
    //Pega os dados que o usuario adicionou nos inputs
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value; 

    if(nome === "" || email === ""){

        alert("Preencha todos os campos!");

        return;
}
    // faz uma requisição POST para a API externa para criar o cadastro
    fetch("https://crudcrud.com/api/06a3049f7d97424e88d6aa84990d7c27/cadastros", {

    method: "POST", // Insere
    headers: {"Content-Type": "application/json"}, body: JSON.stringify({nome: nome, email: email}) // Define os cabeçalhos
    })
    .then(resposta => resposta.json())
    .then((cadastro) => {
        const item = document.createElement("li");
        item.innerHTML = `${cadastro.nome} - ${cadastro.email} <button class="botao" onclick="removerCadastro('${cadastro._id}')">✘</button>`;
        cadastros.appendChild(item);
        // Limpa os Inputs
        document.getElementById("nome").value = "";
        document.getElementById("email").value = "";
    })

    .catch(erro => {
    console.error("Erro ao buscar castro:", erro);
});

})

function removerCadastro(id){
    // Ao clicar no X, "chama" a função removerCadastro, onde localiza direto o id do API externo
    fetch(`https://crudcrud.com/api/06a3049f7d97424e88d6aa84990d7c27/cadastros/${id}`, {

    method: "DELETE", // Exclui 
    })

    .then(() => {
        // Atualiza a lista
        location.reload();        
    })

    .catch((erro) => {
    console.error("Erro ao remover tarefa:", erro);
    });
}

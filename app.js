// Principal
import { Cliente, Cadastro } from "./classes.js";
import { Lista } from "./utils.js";

// Instancia a classe responsável pela API
const servicoCadastro = new Cadastro();

// Função para carregar os clientes na tela
async function carregarCadastros(){
    //Busca os dados da API
    const cadastros = await servicoCadastro.listaCadastros();
    console.log("Entrou em carregarCadastros"); // teste
    console.log(cadastros);  // teste
    Lista.renderizar(cadastros);

    adicionarEventosRemocao(); // ???
}

document.getElementById("add").addEventListener("click", async() =>{
    //Pega os dados que o usuario adicionou nos inputs
    const nome = document.getElementById("nome").value; 
    const email = document.getElementById("email").value;

    if(nome === "" || email === ""){

        alert("Preencha todos os campos!");

        return;
}

// Cria objeto Cliente 
const cliente = new Cliente(nome, email);

console.log("Objeto cliente criado:", cliente);

// Envia para API 
await servicoCadastro.adicionarCadastro(cliente);

// Limpa inputs
document.getElementById("nome").value = "";
document.getElementById("email").value = "";

// Atualiza lista
carregarCadastros();

});

// Função para remover cadastro
function adicionarEventosRemocao() { /// ???

// Seleciona todos os botões de remover
const botoes = document.querySelectorAll(".remover");

botoes.forEach(botao => {

    botao.addEventListener("click", async () => {

        const id = botao.dataset.id;

        await servicoCadastro.removerCadastro(id);

        carregarCadastros();
    });
});
}
// Carrega os cadastros ao abrir a página
carregarCadastros();




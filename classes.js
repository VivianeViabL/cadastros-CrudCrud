// Definição das classes

export class Cliente {
    #nome;
    #email;

    constructor(nome, email){  // Recebe os valores ao criar o objeto
        this.#nome = nome; this.#email = email; 
    }
    
    get nome(){
        return this.#nome;
    }

    get email() {
        return this.#email;  
    }
}

export class Cadastro {
    url = "https://crudcrud.com/api/a2dfe3631960477092930dbbdd75bef9/cadastro";
    
    // Método GET
    async listaCadastros() {
       try {
        const resposta = await fetch(this.url); // "this.url" acessa o valor de "url" sem precisar ficar repetindo o endereço do site em outros "fetch"
        const dados = await resposta.json();

        console.log("Cadastros encontrados", dados); // teste
        return dados; // inner?
    } catch (erro) {
        console.error("Erro ao buscar cadastros:", erro);
    }
}
    // Método POST
async adicionarCadastro(cliente){
    try {
    const resposta = await fetch(this.url, {
        method: "POST", // Insere
        headers: {"Content-Type": "application/json"}, body: JSON.stringify({nome: cliente.nome, email: cliente.email}) // Usa os getters do objeto Cliente
        });

        const dados = await resposta.json();
        console.log("Cliente cadastrado", dados);

        return dados;
    } catch (erro) {
        console.error("Erro ao adicionar cadastro:", erro);
    }
}

    //.then(resposta => resposta.json())
    //.then((cadastro) => {
       // const item = document.createElement("li");
       // item.innerHTML = `${cadastro.nome} - ${cadastro.email} <button class="botao" onclick="removerCadastro('${cadastro._id}')">✘</button>`;
       // cadastros.appendChild(item);
        // Limpa os Inputs
       // document.getElementById("nome").value = "";
       // document.getElementById("email").value = "";
   // })

  //  .catch(erro => {
   // console.error("Erro ao buscar castro:", erro);
//})};
//}

async removerCadastro(id){
    // Ao clicar no X, "chama" a função removerCadastro, onde localiza direto o id do API externo
    try {
        await fetch(`${this.url}/${id}`, {
            method: "DELETE", // Exclui
        });
        console.log("Cliente removido");
    } catch (erro) {
        console.error("Erro ao remover cadastro:", erro);
    }
}}
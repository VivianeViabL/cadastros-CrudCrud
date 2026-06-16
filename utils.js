// Funções auxiliares
/** O map() percorre um array e transforma cada item em outro valor. Use quando quiser: alterar os itens; criar um novo array transformado; gerar HTML; converter dados */
// O find() busca o primeiro item que atende uma condição Use quando precisar: localizar um item específico; buscar por ID; procurar usuário/produto/categoria; encontrar um objeto dentro de um array.
// O reduce() percorre o array acumulando um resultado final. Use quando quiser: somar valores; calcular totais; contar itens; agrupar dados; gerar estatísticas


export class Lista {

    static renderizar(cadastros){
        console.log("Renderizando lista"); // teste
    const lista = document.getElementById("listaCadastros");
    
    // "map()" transforma cada cadastro em HTML
    const itensHTML = cadastros.map(cadastros => {
        return(`<li>
            ${cadastros.nome} - ${cadastros.email} <button class="botao remover" data-id="${cadastros._id}">✘</button>
        </li>`);   
    });
    // "join("")" junta o array em uma string única
    lista.innerHTML = itensHTML.join("");
    }
}
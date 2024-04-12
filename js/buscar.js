async function buscar(){
    console.log("Passei por aqui");

    const resposta = await fetch("https://660f44b6356b87a55c510e99.mockapi.io/agendas");
    const respostaDadosAgenda = await resposta.json();

    console.log("Respsota:", respostaDadosAgenda);

    const cards = document.getElementById("cards_games")

    cards.innerHTML = respostaDadosAgenda.map((itemAgenda) => {
        return "Teste "
    });
}

console.log("antes de buscar");
buscar();
console.log("depois de buscar");
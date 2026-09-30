const input = document.getElementById("itemInput");
const botao = document.getElementById("addButton");
const lista = document.getElementById("lista");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", adicionarItem);

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        adicionarItem();
    }
});

function adicionarItem() {

    const nomeItem = input.value.trim();

    if (nomeItem === "") {
        mensagem.textContent = "Digite um item antes de adicionar.";
        mensagem.style.color = "#dc2626";
        return;
    }

    const item = document.createElement("li");
    item.classList.add("item");

    const conteudo = document.createElement("div");
    conteudo.classList.add("item-conteudo");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const texto = document.createElement("span");
    texto.textContent = nomeItem;

    const remover = document.createElement("button");
    remover.textContent = "Remover";
    remover.classList.add("remover");

    checkbox.addEventListener("change", function() {

        texto.classList.toggle(
            "item-concluido",
            checkbox.checked
        );

    });

    remover.addEventListener("click", function() {

        item.remove();

        mensagem.textContent = "Item removido da lista.";
        mensagem.style.color = "#16a34a";

        setTimeout(function() {
            mensagem.textContent = "";
        }, 2000);

    });

    conteudo.appendChild(checkbox);
    conteudo.appendChild(texto);

    item.appendChild(conteudo);
    item.appendChild(remover);

    lista.appendChild(item);

    input.value = "";
    input.focus();

    mensagem.textContent = "Item adicionado!";
    mensagem.style.color = "#16a34a";

    setTimeout(function() {
        mensagem.textContent = "";
    }, 2000);
}
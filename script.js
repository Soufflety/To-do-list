const form = document.getElementById("to-do");
const input = document.getElementById("tarefa");
const lista = document.getElementById("lista");

form.addEventListener("submit", function(event) {
    event.preventDefault()
    const texto = input.value;
    if (texto.trim() === "") {
        return;
    };
     const novadiv = document.createElement("div");
     novadiv.classList.add("tarefcss");
     const tarefa = document.createElement("p");
     tarefa.textContent = texto;
     const excluir = document.createElement("button");
     excluir.classList.add("btnexcl");
     excluir.textContent = "x";
     const concluir = document.createElement("button")
     concluir.textContent = "V"
     concluir.classList.add("btncnclr")
     concluir.addEventListener("click", function(event){
        tarefa.classList.toggle("concluida")
     })
     excluir.addEventListener ("click", function(event) {
    novadiv.remove();
                    }) ;
     novadiv.appendChild(tarefa);
     novadiv.appendChild(excluir);
     novadiv.appendChild(concluir)
     lista.appendChild(novadiv);
    input.value = "";
})


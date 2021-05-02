let idTarefa = 0;

function addTarefa(){
    const leitura = prompt("Entre com a tarefa que deseja adicionar: ", "Exemplo: Lavar louça mais tarde.");
    
    if(leitura != null){
        if(!leitura.trim()){
            alert("Tarefa inválida !");
        }else{
            const container = document.getElementById("tarefas");

            const tarefa = `${container.innerHTML} 
            <div id="tarefa-${idTarefa}">
                <p><input type="checkbox" onclick="removeTarefa(${idTarefa})"> ${leitura}</p>
            </div>`;

            container.innerHTML = tarefa;
            idTarefa++;
        }
    }
}

function removeTarefa(number){
    const remove = document.getElementById(`tarefa-${number}`);
    const texto = remove.innerText;

    remove.innerHTML = `<s><p><input type="checkbox" disabled="disabled" checked> ${texto}</p></s>`
}
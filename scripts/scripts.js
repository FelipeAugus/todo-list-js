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
                <p><input type="checkbox" onclick="concluiTarefa(${idTarefa})"> ${leitura}</p>
            </div>`;

            container.innerHTML = tarefa;
            idTarefa++;
        }
    }
}

function concluiTarefa(number){
    const conclui = document.getElementById(`tarefa-${number}`);
    const texto = conclui.innerText;

    conclui.innerHTML = `<p><s><input type="checkbox" disabled="disabled" checked> ${texto} </s><button onclick="removeTarefa(${number})"> 🗑 </button></p>`
}

function removeTarefa(number){
    const remove = document.getElementById(`tarefa-${number}`);
	
    if (remove.parentNode) {
  	    remove.parentNode.removeChild(remove);
    }
}

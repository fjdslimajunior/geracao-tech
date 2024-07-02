/*
#---Instruções para uso!----#
- Criar extrutura base e link do index.js no index.html
- no Terminal:
    npm init -y (Iniciando o package.json))
    npm i json-server@0.17.04 (arquivo de dependências simulando uma API)
    Métodos HTTP
        get(listar),   
        post(criar), 
        patch(editar), 
        put(editar mais de um objeto), 
        delet(Deletae)
- Criar api.json
    Aplicando o método "To do List"
- Abertura de api/server local para testes
    npx json-server api.json --watch --port 3000

===    ======    ======    ======    ======    ======    ===
- setagem do script "api" no package.json para inicilização do servidor se tornar mais prática.
    npm rum api
*/
const URL = "http://localhost:3000/tasks";
function openModal() {
    overlay.classList.add("active");
    createTask.classList.add("active");
}

function closeModal() {
    overlay.classList.remove("active");
    createTask.classList.remove("active");
}

function searchTasks() {
    fetch(URL)
        .then(res => res.json())
        .then(res => {
            insertTasks(res);
        })
} searchTasks();

function insertTasks(tasksList) {
    if (tasksList.length > 0) {
        // list.innerHTML = ""
        tasksList.map(tasks => {
            list.innerHTML += `
            <li>
                <h5>${tasks.titulo}</h5>
                <p>${tasks.descricao}</p>
                <div class="actions">
                    <box-icon name='trash' type='solid' size="sm" onclick="deleteTask(${tasks.id})"></box-icon>
                </div>
            </li>
            `;
        })
    }
}
function newTask() {
    event.preventDefault();
    const TASK = {
        titulo: titulo.value,
        descricao:descricao.value
    }
    //definicação do metodo
    fetch(URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
    body: JSON.stringify(TASK)
})      
    .then(res => res.json())
    .then(res => {
        console.log(res);
        closeModal();
        searchTasks();
        let form = document.querySelector("#newTask, form");
        form.reset();
    })
}
//DELETAR DADOS
function deleteTask(id) {
    fetch(`http://localhost:3000/tasks/${id}`, {
        method: "DELETE",
    })
        .then(res => res.json())
        .then(res => {
            alert("Task deleted successfully! ");
            searchTasks();
        })
}

//BARRA DE PESQUISA
function checkTask() {
    let lis = document.querySelectorAll("ul li");
    console.log(lis)
    if (search.value.length > 0) {
        lis.forEach(li => {
            //pesquisa funcionando dentro da descrição também
            if (!li.children[0] || !li.children[1].innerText.includes(search.value)) {
                li.classList.add('hidden');
            }
            else {
                li.classList.remove('hidden');
            }
        })
    } else {
        lis.forEach(li => {
            li.classList.remove('hidden');
        })
    }
}


// let lisDescription = document.querySelectorAll("ul li p");
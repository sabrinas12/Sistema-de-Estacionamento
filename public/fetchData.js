// Função para buscar dados do servidor
function fetchData() {
    // Cria um novo objeto XMLHttpRequest
    var xhr = new XMLHttpRequest();
    // Inicializa uma nova requisição GET para a URL '/fetch-data'
    xhr.open('GET', '/fetch-data', true);

    // Define o que acontece quando a requisição é carregada
    xhr.onload = function() {
        // Se o status da requisição é 200 (sucesso)
        if (this.status === 200) {
            // Converte a resposta JSON em um objeto JavaScript
            var data = JSON.parse(this.responseText);
            // Cria elementos de tabela
            var table = document.createElement('table');
            var thead = document.createElement('thead');
            var tbody = document.createElement('tbody');

            // Obtém as chaves do primeiro objeto nos dados (excluindo 'id')
            var headers = Object.keys(data[0]).filter(key => key !== 'id');
            // Cria uma nova linha de tabela
            var tr = document.createElement('tr');

            // Cria as células do cabeçalho
            headers.forEach(header => {
                var th = document.createElement('th');
                th.textContent = header;
                tr.appendChild(th);
            });
            thead.appendChild(tr);

            // Cria as linhas da tabela
            data.forEach(item => {
                var tr = document.createElement('tr');
                headers.forEach(header => {
                    var td = document.createElement('td');
                    td.textContent = item[header];
                    tr.appendChild(td);
                });

                // Adiciona um botão de exclusão a cada linha
                var deleteButton = document.createElement('button');
                deleteButton.textContent = 'Excluir';
                deleteButton.onclick = function() {
                    deleteRow(item.id);
                };
                var td = document.createElement('td');
                td.appendChild(deleteButton);
                tr.appendChild(td);

                tbody.appendChild(tr);
            });

            // Adiciona o cabeçalho e o corpo à tabela
            table.appendChild(thead);
            table.appendChild(tbody);

            // Adiciona a tabela ao container
            document.getElementById('newTableContainer').appendChild(table);
        }
    };

    // Envia a requisição
    xhr.send();
}

// Chama a função fetchData quando a página é carregada
window.onload = fetchData;

// Função para excluir uma linha
function deleteRow(id) {
    var xhr = new XMLHttpRequest();
    xhr.open('DELETE', '/delete-row/' + id, true);
    xhr.onload = function() {
        if (this.status === 200) {
            // Recarrega a página para atualizar a tabela
            location.reload();
        } else {
            console.error('Erro ao excluir a linha: ' + this.status);
        }
    };
    xhr.send();
}
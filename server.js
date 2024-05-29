const express = require('express');
const path = require('path');
const mysql = require('mysql');
const app = express();

// Cria a conexão com o banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'estacionamento'
});

// Conecta ao banco de dados
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to the database');
});

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

//insere dados no banco de dados
app.post('/submit-form', (req, res) => {
    const marca = req.body.marca;
    const modelo = req.body.modelo;
    const placa = req.body.placa;
    const nome = req.body.nome;
    const cpf = req.body.cpf;

    const query = `INSERT INTO veiculos (marca, modelo, placa, nome, cpf) VALUES ('${marca}', '${modelo}', '${placa}', '${nome}', '${cpf}')`;

    db.query(query, (err, result) => {
        if (err) {
            res.status(500).send(err.sqlMessage);
        } else {
            console.log('Data inserted into database');
            res.send('Received your request!');
        }
    });
});

app.get('/fetch-data', (req, res) => {
    const query = 'SELECT * FROM veiculos';

    db.query(query, (err, results) => {
        if (err) {
            res.status(500).send(err.sqlMessage);
        } else {
            res.json(results);
        }
    });
});

app.delete('/delete-row/:id', (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM veiculos WHERE id = ?';

    db.query(query, [id], (err, result) => {
        if (err) {
            console.error('Erro ao excluir o registro:', err);
            res.status(500).send('Erro ao excluir o registro');
        } else {
            res.send('Registro excluído com sucesso');
        }
    });
});

// Endpoint para obter o horário de entrada de um veículo
app.get('/get-entry-time/:id', (req, res) => {
    const id = req.params.id;
    const query = 'SELECT data_entrada FROM veiculos WHERE id = ?';

    db.query(query, [id], (err, results) => {
        if (err) {
            res.status(500).send(err.sqlMessage);
        } else {
            res.send(results[0].data_entrada);
        }
    });
});

app.listen(3000, () => {
    console.log('App listening on port 3000');
});

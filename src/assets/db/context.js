const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3002;

app.use(cors());
app.use(express.json());

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'teste123',
    database: 'aeo',
    port: 3306

});

// connection.connection((err) => {
//     if (err) {
//         console.error('Erro ao conectar ao DB: ' + err.message);
//     } else {
//         console.log('Conectado ao DB');
//     }
// })

app.get('/aluno', (req, res) => {
    connection.getConnection((err, con) => {

        con.query('SELECT * FROM alunos', (err, results) => {
            if (err) {
                res.status(500).json({ error: 'Erro ao obter alunos no banco de dados' });
            } else {
                res.json(results);
            }
        })
    });
})

app.post('/aluno', (req, res) => {
    const { nome, idade, telefone } = req.body;
    connection.query('INSERT INTO alunos (nome, idade, telefone) VALUES (?, ?, ?)', [nome, idade, telefone], (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao inserir aluno no banco de dados' });
        } else {
            res.json(results);
        }
    })
})

app.listen(port, () => {
    console.log('Servidor rodando na porta ' + port);
})
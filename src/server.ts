import express from 'express';
import path from 'path';

const server = express();
const port = 3000;

server.use(express.static(path.join(__dirname, '../public')));
server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
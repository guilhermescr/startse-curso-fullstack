import fs from 'fs';
import { promisify } from 'util';

const readFilePromise = promisify(fs.readFile);

let alunos;

// Método mais claro de entender
readFilePromise('./alunos.json').then((dados) => {
  alunos = JSON.parse(dados);
  console.log('alunos', alunos);
}).catch((error) => {
  console.error(error);
});

/* Método não tão eficiente
fs.readFile('./alunos.json', (erro, dados) => {
  if (erro) {
    console.log(erro);
    return;
  }
  alunos = JSON.parse(dados);
  console.log('alunos', alunos);
});
*/
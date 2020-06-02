import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('listagem de usuarios');

  response.json([
    'Allan',
    'Diego',
    'Robson'
  ]);
});

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333!');
});
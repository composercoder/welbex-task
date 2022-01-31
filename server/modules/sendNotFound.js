function sendNotFound(response) {
  response.status(404).send(JSON.stringify(new Error('Такие записи в таблице отсутствуют')));
  response.end();
}

module.exports = sendNotFound;

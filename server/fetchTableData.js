const db = require('./db/db');

function sendNotFound(response) {
  response.status(404).send(JSON.stringify(new Error('Такие записи в таблице отсутствуют')));
  response.end();
}

function fetchTableData(request, response) {
const filter = Object.keys(request.query).length === 0 ? '' : createFilter(request.query);
const pagination = ' OFFSET ' + (request.query.offset || 0) + ' LIMIT ' + ((+request.query.limit + 1) || 13);
console.log(filter + pagination);
console.log(request.query);

  response.set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:3000'
  });

  db.query('SELECT * FROM events' + filter + pagination)
    .then((data) => {
      if (data.rows.length !== 0) {
        response.status(200).send(JSON.stringify({
          allowedToTurnLeft: (Number(request.query.offset) - Number(request.query.limit)) > 0,
          allowedToTurnRight: (Number(request.query.offset) + Number(request.query.limit)) < data.rows.length,
          data: removeLastDataElement(data.rows)
        }));
        response.end();
      } else {
        sendNotFound();
      }
    })
    .catch((err) => {
      sendNotFound(response);
    })
}

function removeLastDataElement(arr) {
  arr.pop();
  return arr;
}


function createFilter({parameter, condition, value, offset, limit}) {

  switch(condition) {
    case 'more': condition = '>';
      break;
    case 'less': condition = '<';
      break;
    case 'equals': condition = '=';
      break;
    case 'contains':
      if (!value) {
        condition = '';
        value = '';
      } else {
        condition = 'LIKE';
        value = `'%${value}%'`;
      }
  }

  if (!parameter || !condition) {
    return '';
  }

  return ` WHERE ${parameter} ${condition} ${value} ORDER BY ${parameter} ASC`;
}

module.exports = fetchTableData;

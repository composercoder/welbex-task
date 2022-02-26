const db = require('../db/db');
const removeLastDataElement = require('./removeLastDataElement');
const setPageTurnAllowance = require('./setPageTurnAllowance');
const createFilter = require('./createFilter');
const sendNotFound = require('./sendNotFound');

function fetchTableData(request, response) {
  const filter = Object.keys(request.query).length === 0 ? '' : createFilter(request.query);
  const pagination = ' OFFSET ' + (request.query.offset || 0) + ' LIMIT ' + ((+request.query.limit + 1) || 13);

  response.set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:3000'
  });

  db.query('SELECT * FROM events' + filter + pagination)
    .then((data) => {
      if (data.rows.length !== 0) {
        response.status(200).send(JSON.stringify({
          allowedToTurnPage: {
            allowedToTurnLeft: setPageTurnAllowance(request.query, data.rows, 'left'),
            allowedToTurnRight: setPageTurnAllowance(request.query, data.rows, 'right'),
          },
          data: removeLastDataElement(data.rows),
          error: null
        }));
        response.end();
      } else {
        sendNotFound();
      }
    })
    .catch((err) => {
      console.error(err);
      sendNotFound(response);
    })
}

module.exports = fetchTableData;

const express = require('express');
const fetchTableData = require('./fetchTableData');
const PORT = 5000;

const app = express();

app.get('/', fetchTableData);

app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});

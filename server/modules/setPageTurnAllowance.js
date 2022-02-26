function setPageTurnAllowance(query, dataRows, direction) {

  switch(direction) {
    case 'left':
      if (checkParams([query.offset, query.limit])) {
        return Number(query.offset) > 0;
      }
      return false;

    case 'right':
      if (checkParams([query.offset, query.limit])) {
        return (Number(query.offset) + Number(query.limit)) < dataRows.length
      }
      return false;

    default:
      return false;
  }
}


function checkParams([offset, limit]) {
  if (!offset && !limit) {
    return false;
  }

  const offsetIsValid = offset.match(/[0-9]{0,3}/);
  const limitIsValid = limit.match(/[1-9]{2}/);

  return offsetIsValid && limitIsValid;
};

module.exports = setPageTurnAllowance;

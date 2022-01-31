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

module.exports = createFilter;

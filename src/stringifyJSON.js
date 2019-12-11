var stringifyJSON = function (obj) {
  var brackets = ['[', ']'];
  var braces = ['{', '}'];
  var str = '';
  var keys = [];
  var arrayStr = '';
  var objStr;

  if (obj === null) {
    str += 'null';
    return str;
  } else if (obj === undefined) {
    str += 'undefined';
    return str;
  } else if (typeof (obj) === 'string' || typeof (obj) === 'number' || typeof (obj) === boolean) {
    str += obj;
    return str;
  } else if (Array.isArray(obj)) {
    arrayStr = ''
    for (let i = 0; i < obj.length; i++) {
      if (i === obj.length - 1) {
        arrayStr += obj[i];
      } else {
        arrayStr + obj[i] + ','
      }
      arrayStr = '[' + arrayStr + ']';
      str += arrayStr;
      return str;
    }
  } else if (typeof (obj) === 'object') {
    objStr = ''
    for (var key in obj) {
      objStr += key += ':' += obj[key];
    }
    objStr = '{' + objStr + '}';
    str += objStr;
    return str;
  }
};
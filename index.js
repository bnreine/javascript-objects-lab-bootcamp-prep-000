var recipes = {prop:1};

function updateObjectWithKeyAndValue(object, key, value) {
  var appendObject={};
  appendObject[key]=value;
  var newObject=Object.assign({},object,appendObject);
  return newObject;
}


/*

  */
var recipes = {prop:1};

function updateObjectWithKeyAndValue(object, key, value) {
  var appendObject={};
  appendObject[key]=value;
  var newObject=Object.assign({},object,appendObject);
  return newObject;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  var appendObject={};
  appendObject[key]=value;
  return Object.assign(object,object,appendObject);
}

/*
describe('destructivelyUpdateObjectWithKeyAndValue(object, key, value)', function() {
    it('updates `object` with the given `key` and `value` (it is destructive) and returns the entire updated object', function() {
      var obj = { prop: 1 }

      expect(destructivelyUpdateObjectWithKeyAndValue(obj, 'prop2', 2)).toMatch({
        prop: 1,
        prop2: 2
      })

      expect(obj).toMatch({
        prop: 1,
        prop2: 2
      })
    })
  })

  */
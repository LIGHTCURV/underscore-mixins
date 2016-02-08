_.mixin({
  groupByMulti: function(obj, values, context) {
    var byFirst, prop, rest;
    if (!values.length) {
      return obj;
    }
    byFirst = _.groupBy(obj, values[0], context);
    rest = values.slice(1);
    for (prop in byFirst) {
      byFirst[prop] = _.groupByMulti(byFirst[prop], rest, context);
    }
    return byFirst;
  }
});

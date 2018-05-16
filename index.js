const _ = require('lodash')
const r = require('r-dom')
;
// classNames
module.exports = function(tag, names, props, children) {
  if (!_.isFunction(tag)) {
    return d(r.div, ...arguments);
  }
  if (arguments.length <= 2 || !_.isString(names)) {
    return tag(names);
  }
  if (!_.isPlainObject(props)) {
    return tag({
      className: names
    }, props);
  } else {
    return tag({
      className: names,
      ...props
    }, children);
  }
};


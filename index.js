// compiled from index.coffee
import _ from 'lodash'
import r from 'r-dom'
;
// classNames
export default function(tag, names, props, children) {
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


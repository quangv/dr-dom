`
import _ from 'lodash'
import r from 'r-dom'
`

# classNames
export default (tag, names, props, children)->
  unless _.isFunction tag
    return d r.div, ...arguments

  if arguments.length <= 2 or not _.isString names
    return tag names

  unless _.isPlainObject props
    return tag className: names, props
  else
    return tag { className: names, ...props }, children


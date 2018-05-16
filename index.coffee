`
import _ from 'lodash'
import r from 'r-dom'
`

###
# Wraps r-dom
#
# - defaults to `div`
# - className if next argument string
###
export default (tag, names, props, children)->

  # defaults to `div`
  unless _.isFunction tag
    return d r.div, ...arguments

  # forwards to r-dom's r[tag]
  if arguments.length <= 2 or not _.isString names
    return tag names

  # forwards to r-dom's r[tag] with classNames
  unless _.isPlainObject props
    return tag className: names, props

  # forwards to r-dom's r[tag] with classNames & props
  else
    return tag { className: names, ...props }, children


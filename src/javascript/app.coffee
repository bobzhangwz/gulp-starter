$ = require 'jquery'
_ = require 'underscore'

$('#content').html 'changed'

_.each [1,2,3,4], (a) -> console.log a

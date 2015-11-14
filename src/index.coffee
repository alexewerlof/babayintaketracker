class IndexCtrl
  foo: 'bar'
  constructor: () -> @foo = 'bar'

angular.module 'app', []
.controller('IndexCtrl', IndexCtrl)

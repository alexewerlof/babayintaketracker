class IndexCtrl
  foo: 'bar'
  constructor: () -> @foo = 'bar'

angular.module 'app', ['ngMaterial']
.controller('IndexCtrl', IndexCtrl)

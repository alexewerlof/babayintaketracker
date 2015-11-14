days = [
  {
    date: moment(),
    intakes: [
      {
        what: 'milk'
        when: moment()
        quantity: 200
      }
    ]
  }
]

class AddCtrl
  constructor: () ->

class IndexCtrl
  constructor: (@$mdDialog) ->
    @days = days

  dayTotal: (day) ->
    _.sum day.intakes, 'quantity'

  add: (ev) ->
    @$mdDialog.show {
      controller: AddCtrl
      templateUrl: 'add.html'
      parent: angular.element document.body
      targetEvent: ev
      clickOutsideToClose: true
    }
    .then (answer) ->
      @status = 'You said the information was "' + answer + '".'
    ,(err) ->
      @status = 'You cancelled the dialog.'


angular.module 'app', ['ngMaterial']
.filter 'momentDate', () -> (m) -> m.format 'LL'
.filter 'momentTime', () -> (m) -> m.format 'LT'
.controller 'IndexCtrl', IndexCtrl

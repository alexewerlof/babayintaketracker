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

class IndexCtrl
  constructor: () ->
    @days = days

  dayTotal: (day) ->
    _.sum day.intakes, 'quantity'


angular.module 'app', ['ngMaterial']
.filter 'momentDate', () -> (m) -> m.format 'LL'
.filter 'momentTime', () -> (m) -> m.format 'LT'
.controller 'IndexCtrl', IndexCtrl

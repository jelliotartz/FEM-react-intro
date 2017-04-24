import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var div = React.DOM.div

// use createFactory for cleaner code in MyFirstComponent. Just a convenience method.
var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      div(null,
        MyTitleFactory({title: 'check out my mad props', color: 'peru'}),
        MyTitleFactory({title: 'izzy bear', color: 'thistle'}),
        MyTitleFactory({title: 'prop #3 :)', color: 'rebeccapurple'})
      )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))

/* global React ReactDOM */

var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render: function () {
    return (
      div(null,
        h1({ style: { color: this.props.color, fontWeight: 'bold' } }, this.props.title)
      )
    )
  }
})

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

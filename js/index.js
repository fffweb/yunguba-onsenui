import React from 'react';
import ReactDOM from 'react-dom';
import onsen from 'onsenui';


class MyPage extends React.Component {
  handleClick() {
    onsen.notification.alert('You clicked the button!');
  }

  render() {
    return (
      <ons-page>
        <ons-toolbar>
          <div className="center">Title</div>
        </ons-toolbar>

        <ons-button onClick={this.handleClick.bind(this)}>Click me!</ons-button>
      </ons-page>
    );
  }
}

ReactDOM.render(
  <MyPage />,
  document.getElementById('wrapper')
);
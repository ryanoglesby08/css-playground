import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isHidden: false
    };

    this.hide = this.hide.bind(this);
  }

  hide() {
    this.setState({
      isHidden: true
    });
  }

  render() {
    return (
      <div>
        { this.state.isHidden ? null : <p><em>Hide me with the button below!</em></p> }

        <p>
          With a tool such as React, we can use JavaScript logic to show or hide elements
          instead of CSS rules. This means we can completely test the
          behavior at a unit level, and be confident that we do not have a false
          positive. No CSS involved.
        </p>

        <input type="button" value="Click to hide" onClick={this.hide} />
      </div>
    );
  }
}

export default App;

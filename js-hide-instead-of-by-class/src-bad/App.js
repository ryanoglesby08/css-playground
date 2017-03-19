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
    const className = this.state.isHidden ? "is-hidden" : "";

    return (
      <div>
        <p><em className={className}>Hide me with the button below!</em></p>
        <p>
          Unfortunately, the behavior is broken. All of the unit tests pass, but
          I have accidentally forgotten to create a CSS rule to hide this paragraph
          for the given class name.
          <br/>
          <br/>
          Using this technique, I am forced to rely on expensive UI functional tests
          or manual testing to actually verify the behavior.
        </p>

        <input type="button" value="Click to hide" onClick={this.hide} />
      </div>
    );
  }
}

export default App;

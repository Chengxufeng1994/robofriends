import React from 'react';

// class component
class CounterButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  shouldComponentUpdate(nextProp, nextState) {
    console.log('[nextProp]: ', nextProp);
    console.log('[nextState]: ', nextState);
    if (nextState.count !== this.state.count) {
      return true;
    }

    return false;
  }

  onCountChange = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    console.log('[Render CounterButton]');
    const { count } = this.state;
    const { color } = this.props;
    return (
      <button color={color} onClick={this.onCountChange}>
        Count: {count}
      </button>
    );
  }
}

export default CounterButton;

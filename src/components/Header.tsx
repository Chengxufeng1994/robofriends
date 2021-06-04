import React from 'react';
// import CounterButton from './CounterButton';
type HeaderProps = {};
type HeaderState = {};
// class component
class Header extends React.Component {
  shouldComponentUpdate(nextProp: HeaderProps, nextState: HeaderState) {
    return false;
  }

  render() {
    // console.log('[Render Header]');
    return (
      <>
        <h1 className="f1">RoboFriends</h1>
        {/* <CounterButton color="red" /> */}
      </>
    );
  }
}

export default Header;

// function component
// const Header = (props) => {
//   console.log('[Render Header]');
//   return <h1 className="f1">RoboFriends</h1>;
// };

// const MemoHeader = React.memo(Header);
// MemoHeader.displayName = 'Header';

// export default MemoHeader;

import React from 'react';
import Alert from './Alert';

class UncontrolledAlert extends React.Component { // eslint-disable-line react/prefer-stateless-function

  state = { isOpen: true };

  handleAutoClose = () => {
    this.setState({ isOpen: false });
  }

  render() {
    return <Alert isOpen={this.state.isOpen} autoClose={this.handleAutoClose} {...this.props} />;
  }
}

export default UncontrolledAlert;

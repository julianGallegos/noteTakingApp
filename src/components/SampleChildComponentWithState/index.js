import React, { Component } from 'react';

import SampleStatelessComponent from '../SampleStatelessComponent';

class SampleChildComponentWithState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // fill in state here
      sample: true
    }
  }

  render () {
    return (
      <div>
        Sample Child component with state
        { <SampleStatelessComponent {...this.props } />  }
      </div>
    )
  }
}

export default SampleChildComponentWithState;

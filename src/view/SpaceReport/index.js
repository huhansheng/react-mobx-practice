import React from 'react';
import { List, ListItem } from 'material-ui/List';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';


class SpaceReport extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div style={{position: 'relative'}}>
          <img style={{ display: 'block', width: '100%', height: '250px' }} alt="welcome to my spacereport" src="/common/img/handsome.jpg" />
          <div style={{position: 'absolute', bottom: '15px', padding: '15px', color: '#E3F2FD' }}>
            <span>At the most beautiful moment, meet youself</span>
          </div>
        </div>
      </div>
    );
  }
}

export default SpaceReport;
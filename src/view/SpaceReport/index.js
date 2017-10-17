import React from 'react';
import { List, ListItem } from 'material-ui/List';
import {
  Step,
  Stepper,
  StepLabel,
  StepButton
} from 'material-ui/Stepper';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import Toggle from 'material-ui/Toggle';
import ArrowForwardIcon from 'material-ui/svg-icons/navigation/arrow-forward';

class SpaceReport extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stepIndex: 0
    }
  }

  render() {
    return (
      <div>
        <div style={{ position: 'relative' }}>
          <img style={{ display: 'block', width: '100%', height: '250px' }} alt="welcome to my spacereport" src="/common/img/handsome.jpg" />
          <div style={{ position: 'absolute', bottom: '15px', padding: '15px', color: '#E3F2FD' }}>
            <span>At the most beautiful moment, meet youself</span>
          </div>
        </div>
        <div style={{ background: '#E1F5FE' }}>
          <Toggle
            defaultToggled
            label="call me"
            style={{ padding: '15px 15px 0 15px' }}
            labelStyle={{ fontSize: '18px', color: 'red' }}
          />
          <Stepper linear={false} orientation="vertical" activeStep={this.state.stepIndex}>
            <Step>
              <StepLabel style={{height: '60px'}} onClick={() => this.setState({stepIndex: 0})}>
                study anything that it is come true your dream
              </StepLabel>
            </Step>
            <Step>
              <StepLabel style={{height: '60px'}} onClick={() => this.setState({stepIndex: 1})}>
                development yourself every freely time
              </StepLabel>
            </Step>
            <Step>
              <StepLabel style={{height: '60px'}} onClick={() => this.setState({stepIndex: 2})}>
                have a dream of youself that it make you
              </StepLabel>
            </Step>
          </Stepper>
          <List>
            <ListItem
              primaryText="photo"
              secondaryText="Jan 10, 2014"
            />
          </List>
        </div>
      </div>
    );
  }
}

export default SpaceReport;
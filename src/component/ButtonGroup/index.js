import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const btnGroupSty = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
};
const btnSty = {
  margin: 12
};

class ButtonGroup extends React.Component {
  onClickBtn(action) {
    if (this.props.onClick) {
      this.props.onClick(action);
    }
  }

  createBtn() {
    const btnList = this.props.itemList;

    const list = btnList.map((item, index) => {
      const { backgroundColor = '#fff', disabled = false, label = '', labelColor = '#212121', icon = null, action } = item;

      return (
        <RaisedButton
          key={action}
          disabled={disabled}
          label={label}
          icon={icon}
          labelColor={labelColor}
          style={btnSty}
          onClick={this.onClickBtn.bind(this, action)}
        />
      );
    });

    return list;
  }

  render() {
    return (
      <div style={btnGroupSty}>
        { this.createBtn() }
      </div>
    );
  }
}

export default ButtonGroup;

import { Modal, Button } from 'antd';
import React from 'react'; 

class Info extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>      
          <p>{this.props.detalle}</p>
      </div>
    );
  }
}

export default Info; 
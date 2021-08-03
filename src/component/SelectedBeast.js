import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class SelectedBeast extends Component {
  render() {
    return (
      <div>
        <Modal show={this.props.show}>
          <Modal.Header>
            <h2>{this.props.title}</h2>
          </Modal.Header>
          <img
            style={{ maxWidth: '100%',height: "300px",cursor: 'pointer',textAlign: 'center'}} src={this.props.img} alt={this.props.title}/>
          <div style={{ height: '2px',width: '100%',backgroundColor: '#e0e0e0',margin: '2px  0 10px 0'}}></div>
          <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center',padding: '10px',}}>
            {this.props.desc}
          </div>
          <Modal.Footer>
            <Button variant='secondary' onClick={this.props.handle}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default SelectedBeast;

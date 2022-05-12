import Modal from "react-bootstrap/Modal";
import React from "react";
import './SelectedBeast.css'

class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal show={this.props.showModal}
        onHide={this.props.hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <img 
          className="modalPicture"
          src={this.props.img}
          alt={this.props.description}
          // style={{width: "100%", height: "100%"}}
            />

        </Modal.Body>
      </Modal>

    )
  }

}


export default SelectedBeast;
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";
import Stat from "../../components/Stats/Stats";
import TextList from "../../components/TextList/TextList";

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      title: "Notes",
      amount: props.amount
    };
    this.handleModalToggle = this.handleModalToggle.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      amount: nextProps.amount
    });
  }
  // Toggles the visibility of the modal
  handleModalToggle() {
    this.setState({
      showModal: !this.state.showModal
    });
  }
  // Cancel event from the modal, reset the state.
  handleCancel() {
    this.handleModalToggle();
  }
  // Renders our component
  render() {
    return (
      <div className={"widget settlementNotes"}>
        <header className={"widget-header xwidget-header--link"}>
          <div className="widget-header-title">{this.state.title}</div>
        </header>
        <div className="widget-content">
          <TextList list={this.props.notes} minimum={1} showDetails />
        </div>
        {/* <button
          type="button"
          className="widget-content"
          onClick={this.handleModalToggle}
        >
          <Stat amount={this.state.amount} />
        </button>
        <Modal isOpen={this.state.showModal} toggle={this.handleCancel}>
          <ModalHeader>Adjust {this.state.title}</ModalHeader>
          <ModalBody>
            <Stat amount={this.state.amount} />
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.handleCancel} color="link">
              Close
            </Button>
          </ModalFooter>
        </Modal> */}
      </div>
    );
  }
}

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      note: PropTypes.string
    })
  )
};

Notes.defaultProps = {
  notes: []
};

export default Notes;

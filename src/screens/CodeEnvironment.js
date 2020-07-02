import React from 'react'
import Problem from '../components/Problem/Problem'
import CodeEditor from '../components/CodeEditor/CodeEditor'
import UnobtrusiveNavbar from '../containers/UnobtrusiveNavbar/UnobtrusiveNavbar'
import { Row, Modal, Button } from 'react-bootstrap'
import { updateProblem } from '../actions/ProblemActions'
import { updateCode } from '../actions/CodeActions'
import { closeProblem } from '../actions/ScreenLayoutActions'
import { closeModal } from '../actions/ResponseActions'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import axios from 'axios'
import URI from '../endpoints/endpoints'

class CodeEnvironment extends React.Component {
  componentDidMount() {
    axios.get(`${URI}api/problem/${this.props.match.params.id}`).then((response) => {
      this.props.updateProblem(response.data)
      this.props.updateCode(response.data.starting_code)
    })
  }

  render() {
    return(
      <div className='wrapper'>
        <MyVerticallyCenteredModal onHide={this.props.closeModal} content={this.props.modal.modalContent} show={this.props.modal.showModal} />
        <UnobtrusiveNavbar/> 
        <Row noGutters={true}>
          <Problem
            problemClass={this.props.problemClass}
            problem={this.props.problem}
            closeProblem={this.props.closeProblem}
          /> 
          <CodeEditor/>
        </Row>
      </div>
    )
  }
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Test Results 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <div dangerouslySetInnerHTML={{ __html: props.content }} />
        </p>
      </Modal.Body>
      <Modal.Footer>
        { props.content == "Nice you got it! You can move on to the next problem!" 
        ? <Link to="/" className="btn btn-success">Back To Problems</Link> 
        : <Button onClick={props.onHide}>Close</Button> }
      </Modal.Footer>
    </Modal>
  );
}

const mapStateToProps = state => {
  const problem = state.problem
  const problemClass = state.screenLayout.problemClass
  const modal = state.response
  return { problem, problemClass, modal }
}

const mapDispatchToProps = dispatch => {
  return {
    updateProblem: (problem) => dispatch(updateProblem(problem)),
    updateCode: (code) => dispatch(updateCode(code)),
    closeProblem: () => dispatch(closeProblem()),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CodeEnvironment)

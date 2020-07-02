import React from 'react'
import './ActionBox.scss'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { expandProblem, showTerminal, hideTerminal } from '../../actions/ScreenLayoutActions'
import { showModal } from '../../actions/ResponseActions'
import axios from 'axios'
import URI from '../../endpoints/endpoints'

class ActionBox extends React.Component {
  displayExpandProblemButton() {
    let buttonJsx = null
    if (this.props.problemClass == 'hidden') {
      buttonJsx = <Button variant="light" className="mr-1" onClick={() => this.expandProblemButtonClicked()}>Show Problem</Button>
    }

    return buttonJsx
  }

  displayTerminalButton() {
    let buttonJsx = null
    if (this.props.terminalClass == 'terminal-hidden') {
      buttonJsx = <Button onClick={() => this.showTerminalButtonClicked()} variant="light">Show Terminal</Button> 
    } else {
      buttonJsx = <Button onClick={() => this.hideTerminalButtonClicked()} variant="light">Hide Terminal</Button>
    }

    return buttonJsx;
  }

  showTerminalButtonClicked() {
    this.props.showTerminal()
  }

  hideTerminalButtonClicked() {
    this.props.hideTerminal()
  }

  expandProblemButtonClicked() {
    this.props.expandProblem()
  }

  submitButtonClicked() {
    const code = this.props.code
    const problemId = this.props.problemId
    let that = this
    axios({
      method: 'get',
      url: `${URI}api/submit/${problemId}`,
      params: {
        code
      }
    }).then((response) => {
      console.log(response.data)
      if (response.data.did_pass_tests) {
        that.props.showModal("Nice you got it! You can move on to the next problem!")
      } else if (response.data.timeout_error !== undefined) {
        that.props.showModal(`<strong>Wrong!</strong><br>Your code took too long! Make sure you're not going into an infinite loop or something like that.`)
      } else {        
        that.props.showModal(`<strong>Wrong!</strong><br><strong>Expected Output:</strong> ${response.data.expected_output}<br><strong>Actual Output</strong>: ${response.data.actual_output}`)
      }
    }).catch((error) => {
      console.log(error)
    }); 
  }

  render() {
    return (
      <div className='ActionBox'>
        <div className='left-buttons'>
          {this.displayExpandProblemButton()}
          {this.displayTerminalButton()}
        </div>
        <div className='right-buttons'>
          <Button variant="success" onClick={() => this.submitButtonClicked()}>Run Test Cases</Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const problemClass = state.screenLayout.problemClass
  const terminalClass = state.screenLayout.terminalClass
  const problemId = state.problem.id
  const code = state.codeState.code
  return { problemClass, terminalClass, code, problemId }
}

const mapDispatchToProps = dispatch => {
  return {
    expandProblem: () => dispatch(expandProblem()),
    showTerminal: () => dispatch(showTerminal()),
    hideTerminal: () => dispatch(hideTerminal()),
    showModal: (content) => dispatch(showModal(content))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionBox)

import React from 'react'
import './ActionBox.scss'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { expandProblem, showTerminal, hideTerminal } from '../../actions/ScreenLayoutActions'

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

  render() {
    return (
      <div className='ActionBox'>
        <div className='left-buttons'>
          {this.displayExpandProblemButton()}
          {this.displayTerminalButton()}
        </div>
        <div className='right-buttons'>
          <Button variant="light" className='mr-1'>Run Test Cases</Button>
          <Button variant="success">Submit</Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const problemClass = state.screenLayout.problemClass
  const terminalClass = state.screenLayout.terminalClass
  return { problemClass, terminalClass }
}

const mapDispatchToProps = dispatch => {
  return {
    expandProblem: () => dispatch(expandProblem()),
    showTerminal: () => dispatch(showTerminal()),
    hideTerminal: () => dispatch(hideTerminal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionBox)

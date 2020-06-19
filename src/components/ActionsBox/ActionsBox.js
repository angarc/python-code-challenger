import React from 'react'
import './ActionBox.scss'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { expandProblem } from '../../actions/ScreenLayoutActions'

class ActionBox extends React.Component {

  displayExpandProblemButton() {
    let buttonJsx = null
    if (this.props.problemClass == 'hidden') {
      buttonJsx = <Button variant="light" onClick={() => this.expandProblemButtonClicked()}>Show Problem</Button>
    }

    return buttonJsx
  }

  expandProblemButtonClicked() {
    this.props.expandProblem()
  }

  render() {
    return (
      <div className='ActionBox'>
        <div class='left-buttons'>
          {this.displayExpandProblemButton()}
        </div>
        <div class='right-buttons'>
          <Button variant="light" className='mr-1'>Run Test Cases</Button>
          <Button variant="success">Submit</Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const problemClass = state.screenLayout.problemClass
  return { problemClass }
}

const mapDispatchToProps = dispatch => {
  return {
    expandProblem: () => dispatch(expandProblem())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionBox)

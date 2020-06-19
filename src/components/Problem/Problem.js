import React from 'react'
import './Problem.scss'
import { connect } from 'react-redux'
import { closeProblem, expandProblem } from '../../actions/ScreenLayoutActions'
import { Col } from 'react-bootstrap'

class Problem extends React.Component {

  closeButtonClicked() {
    this.props.closeProblem()  
  }

  expandButtonClicked() {
    this.props.expandProblem()
  }

  displaySizeButton() {
    let buttonJsx = null 

    if (this.props.problemWidth == 6) {
      buttonJsx = <button onClick={() => this.closeButtonClicked()}>Close</button> 
    } else if (this.props.problemWidth == 1) {
      buttonJsx = <button onClick={() => this.expandButtonClicked()}>Expand</button>
    }

    return buttonJsx
  }

  render() {
    return(
      <Col lg={this.props.problemWidth}>
        <div className='Problem'>
          <h1 className='bold'>{this.props.title}</h1>
          <p>{this.props.description}</p>

          <h3 className='bold'>Challenge</h3>
          <p>{this.props.challenge}</p>

          <hr/>

          <h3 className='bold'>Test Cases</h3>
          <p>Input: </p>
          <code>{this.props.input1}</code>
          <p className='mt-3'>Output: </p>
          <code>{this.props.output1}</code><br/>

          {this.displaySizeButton()} 
        </div>
      </Col>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const problemWidth = state.screenLayout.problemWidth
  return { problemWidth }
}

const mapDispatchToProps = dispatch => {
  return {
    closeProblem: () => dispatch(closeProblem()),
    expandProblem: () => dispatch(expandProblem())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Problem);

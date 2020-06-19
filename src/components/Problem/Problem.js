import React from 'react'
import './Problem.scss'
import { connect } from 'react-redux'
import { closeProblem } from '../../actions/ScreenLayoutActions'
import { Col, Button } from 'react-bootstrap'

class Problem extends React.Component {

  closeButtonClicked() {
    this.props.closeProblem()  
  }

  displayCloseButton() {
    let buttonJsx = null 

    if (this.props.problemClass == 'expanded') {
      buttonJsx = <Button variant='light' className='hideButton mt-3' onClick={() => this.closeButtonClicked()}>Hide Problem</Button>
    }

    return buttonJsx
  }

  render() {
    return(
      <Col lg={6} className={this.props.problemClass + " problemContainer"}>
        <div className='problem'>
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
          {this.displayCloseButton()} 
        </div>
      </Col>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const problemClass = state.screenLayout.problemClass
  return { problemClass }
}

const mapDispatchToProps = dispatch => {
  return {
    closeProblem: () => dispatch(closeProblem()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Problem);

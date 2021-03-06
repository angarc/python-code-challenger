import React from 'react'
import './Problem.scss'
import { updateProblem } from './../../actions/ProblemActions'
import { Col, Button } from 'react-bootstrap'
import axios from 'axios'
import { Modal } from 'react-bootstrap'
const ReactMarkdown = require('react-markdown')

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
          <h1 className='bold'>{this.props.problem.title}</h1>
          <ReactMarkdown source={this.props.problem.description}/>

          <h3 className='bold'>Challenge</h3>
          <ReactMarkdown source={this.props.problem.challenge}/>

          <hr/>
          <h3 className='bold'>Test Cases</h3>
          <ReactMarkdown source={this.props.problem.test_case_1}/>
          <hr/>
          <ReactMarkdown source={this.props.problem.test_case_2}/>
          {this.displayCloseButton()} 
        </div>
      </Col>
    )
  }
}

export default Problem;

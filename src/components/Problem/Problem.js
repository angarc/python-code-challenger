import React from 'react'
import './Problem.scss'
import { connect } from 'react-redux'
import { closeProblem } from '../../actions/ScreenLayoutActions'
import { updateProblem } from '../../actions/ProblemActions'
import { Col, Button } from 'react-bootstrap'
import axios from 'axios'
const ReactMarkdown = require('react-markdown')

class Problem extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:8000/api/problem/1').then((response) => {
      this.props.updateProblem(response.data)
    })
  }

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
    console.log(this.props.problem.title)
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

const mapStateToProps = (state, ownProps) => {
  const problemClass = state.screenLayout.problemClass

  const problem = state.problem
  return { problemClass, problem }
}

const mapDispatchToProps = dispatch => {
  return {
    closeProblem: () => dispatch(closeProblem()),
    updateProblem: (problem) => dispatch(updateProblem(problem))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Problem);

import React from 'react'
import Problem from '../components/Problem/Problem'
import CodeEditor from '../components/CodeEditor/CodeEditor'
import UnobtrusiveNavbar from '../containers/UnobtrusiveNavbar/UnobtrusiveNavbar'
import { Row } from 'react-bootstrap'
import { updateProblem } from '../actions/ProblemActions'
import { updateCode } from '../actions/CodeActions'
import { closeProblem } from '../actions/ScreenLayoutActions'
import { connect } from 'react-redux'
import axios from 'axios'

class CodeEnvironment extends React.Component {
  componentDidMount() {
    axios.get(`http://localhost:8000/api/problem/${this.props.match.params.id}`).then((response) => {
      console.log(response.data)
      this.props.updateProblem(response.data)
      this.props.updateCode(response.data.starting_code)
    })
  }

  render() {
    return(
      <div className='wrapper'>
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

const mapStateToProps = state => {
  const problem = state.problem
  const problemClass = state.screenLayout.problemClass

  return { problem, problemClass }
}

const mapDispatchToProps = dispatch => {
  return {
    updateProblem: (problem) => dispatch(updateProblem(problem)),
    updateCode: (code) => dispatch(updateCode(code)),
    closeProblem: () => dispatch(closeProblem())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CodeEnvironment)

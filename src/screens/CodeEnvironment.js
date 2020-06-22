import React from 'react'
import Problem from '../components/Problem/Problem'
import CodeEditor from '../components/CodeEditor/CodeEditor'
import { Row } from 'react-bootstrap'
import { updateProblem } from '../actions/ProblemActions'
import { connect } from 'react-redux'
import axios from 'axios'

class CodeEnvironment extends React.Component {
  componentDidMount() {
    axios.get(`http://localhost:8000/api/problem/${this.props.match.params.id}`).then((response) => {
      console.log(response.data)
      this.props.updateProblem(response.data)
    })
  }

  render() {
    return(
      <div className='wrapper'>
        <Row noGutters={true}>
          <Problem
            problemClass=''
            problem={this.props.problem}            
          /> 
          <CodeEditor/>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { problem: state.problem }
}

const mapDispatchToProps = dispatch => {
  return {
    updateProblem: (problem) => dispatch(updateProblem(problem))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CodeEnvironment)

import React from 'react'
import './Problem.scss'

class Problem extends React.Component {
  render() {
    return(
      <div className='Problem'>
        <h1 className='title'>{this.props.title}</h1>
        <p>{this.props.description}</p>

        <h3>Challenge</h3>
        <p>{this.props.challenge}</p>

        <hr/>

        <h3>Test Cases</h3>
        <p>Input: </p>
        <code>{this.props.input1}</code>
        <p className='mt-3'>Output: </p>
        <code>{this.props.output1}</code> 
      </div>
    )
  }
}

export default Problem;

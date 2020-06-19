import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import { Button, Row, Col } from 'react-bootstrap'
import Problem from './components/Problem/Problem'
import CodeEditor from './components/CodeEditor/CodeEditor'


class App extends React.Component {

  

  render() {
    return (
      <div className='wrapper'>
        <Row noGutters={true}>
          <Problem 
            title={"Finally Home"}
            description={"You've been away all day long, and now you're finally home to see bear!"}
            challenge={"Write a program that outputs: Hello, Bear!"}
            input1={"None"}
            output1={"Hello, Bear!"}
          /> 
          <CodeEditor/>
        </Row>
      </div>
    )
  }
}

export default App

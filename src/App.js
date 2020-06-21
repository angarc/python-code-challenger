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
          <Problem/> 
          <CodeEditor/>
        </Row>
      </div>
    )
  }
}

export default App

import React from 'react';
import AceEditor from "react-ace";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-twilight";
import { Button, Row, Col } from 'react-bootstrap';
import ActionBox from './components/ActionsBox/ActionsBox'
import Problem from './components/Problem/Problem'

class App extends React.Component {
  onChange(newValue) {
    console.log("change", newValue);
  }

  render() {
    return (
      <div className='wrapper'>
        <Row noGutters={true}>
          <Col lg={6}>
            <Problem 
              title={"Finally Home"}
              description={"You've been away all day long, and now you're finally home to see bear!"}
              challenge={"Write a program that outputs: Hello, Bear!"}
              input1={"None"}
              output1={"Hello, Bear!"}
            /> 
          </Col>

          <Col lg={6} className={'right-column'}>
            <AceEditor
              placeholder="Placeholder Text"
              mode="python"
              theme="twilight"
              name="code-editor"
              width={'100%'}
              height={'90vh'}
              onLoad={this.onLoad}
              onChange={(value) => this.onChange(value)}
              fontSize={22}
              showPrintMargin={true}
              showGutter={true}
              highlightActiveLine={true}
              value={`def solution():\n\tpass`}
              setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
              showLineNumbers: true,
              tabSize: 2,
              }}
            />

            <ActionBox/> 
          </Col>
        </Row>
      </div>
    )
  }
}

export default App

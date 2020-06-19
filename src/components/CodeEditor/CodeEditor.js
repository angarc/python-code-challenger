import React from 'react'
import AceEditor from "react-ace"
import "ace-builds/src-noconflict/mode-python"
import "ace-builds/src-noconflict/theme-twilight"
import ActionBox from '../ActionsBox/ActionsBox'
import TerminalEmulator from '../TerminalEmulator/TerminalEmulator'
import { Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import './CodeEditor.scss'

class CodeEditor extends React.Component {
  onChange(newValue) {
    console.log(newValue);
  }

  render() {
    return(
      <Col lg={this.props.codeEditorWidth} className='CodeEditor'>
        <AceEditor
          placeholder="Python 3.8"
          mode="python"
          theme="twilight"
          name="code-editor"
          width={'auto'}
          height={this.props.codeEditorHeight}
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

        <TerminalEmulator />        

        <ActionBox/> 
      </Col>
    )
  }
}

const mapStateToProps = state => {
  const { codeEditorWidth, codeEditorHeight } = state.screenLayout
  return { codeEditorWidth, codeEditorHeight }
}

export default connect(mapStateToProps)(CodeEditor)
